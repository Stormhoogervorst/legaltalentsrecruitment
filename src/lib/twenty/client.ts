const CLOUD_API = "https://api.twenty.com";

export class TwentyError extends Error {
  status: number;
  body: string;

  constructor(message: string, status: number, body: string) {
    super(message);
    this.name = "TwentyError";
    this.status = status;
    this.body = body;
  }
}

export type TwentyField = {
  id: string;
  name: string;
  type?: string;
};

export type TwentyObject = {
  nameSingular: string;
  namePlural: string;
  fields: TwentyField[];
};

let resolvedBase: string | null = null;
let schemaCache: TwentyObject[] | null = null;

function configuredBases(): string[] {
  const configured = process.env.TWENTY_BASE_URL?.replace(/\/$/, "");
  const bases: string[] = [];
  if (configured) bases.push(configured);
  const cloudWorkspace = !configured || /\.twenty\.com$/i.test(configured);
  if (cloudWorkspace && !bases.includes(CLOUD_API)) bases.push(CLOUD_API);
  if (bases.length === 0) bases.push(CLOUD_API);
  return bases;
}

function apiKey(): string {
  const key = process.env.TWENTY_API_KEY;
  if (!key) throw new TwentyError("TWENTY_API_KEY ontbreekt.", 500, "");
  return key;
}

function isHtml(text: string, contentType: string): boolean {
  if (contentType.includes("text/html")) return true;
  const start = text.trimStart().slice(0, 20).toLowerCase();
  return start.startsWith("<!doctype") || start.startsWith("<html");
}

export function quoteFilter(value: string): string {
  return `"${value.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

export async function twentyRequest(
  method: string,
  path: string,
  body?: unknown,
): Promise<unknown> {
  const bases = resolvedBase ? [resolvedBase] : configuredBases();
  let lastError: TwentyError | null = null;

  for (const base of bases) {
    const headers: Record<string, string> = {
      Authorization: `Bearer ${apiKey()}`,
      Accept: "application/json",
    };
    const init: RequestInit = {
      method,
      headers,
      signal: AbortSignal.timeout(20_000),
    };
    if (body !== undefined) {
      headers["Content-Type"] = "application/json";
      init.body = JSON.stringify(body);
    }

    let response: Response;
    try {
      response = await fetch(`${base}${path}`, init);
    } catch (error) {
      lastError = new TwentyError(
        error instanceof Error ? error.message : "Twenty onbereikbaar.",
        0,
        "",
      );
      continue;
    }

    const text = await response.text();
    const contentType = response.headers.get("content-type") ?? "";
    if (isHtml(text, contentType)) {
      lastError = new TwentyError(
        `Geen Twenty API op ${base}.`,
        response.status,
        text.slice(0, 180),
      );
      continue;
    }

    resolvedBase = base;
    if (!response.ok) {
      throw new TwentyError(
        `Twenty ${method} ${path} gaf ${response.status}.`,
        response.status,
        text.slice(0, 800),
      );
    }

    if (!text) return null;
    try {
      return JSON.parse(text) as unknown;
    } catch {
      throw new TwentyError(
        "Twenty antwoord was geen JSON.",
        response.status,
        text.slice(0, 300),
      );
    }
  }

  throw lastError ?? new TwentyError("Twenty onbereikbaar.", 0, "");
}

export async function getSchema(): Promise<TwentyObject[] | null> {
  if (schemaCache) return schemaCache;
  try {
    const objects: TwentyObject[] = [];
    let after: string | null = null;
    // /metadata pages objects at 10. Without a cursor, vacancy and taskTarget
    // fall off the first page and look missing.
    for (let page = 0; page < 20; page += 1) {
      const payload = await twentyRequest("POST", "/metadata", {
        query: `query ApplySchema($after: ConnectionCursor) {
          objects(paging: { first: 50, after: $after }) {
            pageInfo { hasNextPage endCursor }
            edges {
              node {
                nameSingular
                namePlural
                fieldsList { id name type }
              }
            }
          }
        }`,
        variables: { after },
      });
      const connection = asRecord(asRecord(asRecord(payload)?.data)?.objects);
      objects.push(...readSchema({ data: { objects: connection } }));
      const pageInfo = asRecord(connection?.pageInfo);
      if (pageInfo?.hasNextPage !== true) break;
      const endCursor = stringValue(pageInfo.endCursor);
      if (!endCursor) break;
      after = endCursor;
    }
    if (objects.length === 0) return null;
    schemaCache = objects;
    return objects;
  } catch (error) {
    console.error("[apply] Twenty metadata niet gelezen.", {
      message: error instanceof Error ? error.message : "onbekend",
      body: error instanceof TwentyError ? error.body.slice(0, 400) : undefined,
    });
    return null;
  }
}

function readSchema(payload: unknown): TwentyObject[] {
  const data = asRecord(payload)?.data;
  const edges = asRecord(data)?.objects;
  const list = asRecord(edges)?.edges;
  if (!Array.isArray(list)) return [];

  const objects: TwentyObject[] = [];
  for (const edge of list) {
    const node = asRecord(asRecord(edge)?.node);
    if (!node) continue;
    const nameSingular = stringValue(node.nameSingular);
    const namePlural = stringValue(node.namePlural);
    if (!nameSingular || !namePlural) continue;
    const fields: TwentyField[] = [];
    if (Array.isArray(node.fieldsList)) {
      for (const field of node.fieldsList) {
        const record = asRecord(field);
        const id = record ? stringValue(record.id) : null;
        const name = record ? stringValue(record.name) : null;
        if (!id || !name) continue;
        fields.push({
          id,
          name,
          type: record ? stringValue(record.type) ?? undefined : undefined,
        });
      }
    }
    objects.push({ nameSingular, namePlural, fields });
  }
  return objects;
}

const FALLBACK_PLURAL: Record<string, string> = {
  candidate: "candidates",
  vacancy: "vacancies",
  submission: "submissions",
  task: "tasks",
  taskTarget: "taskTargets",
};

export function objectPlural(
  schema: TwentyObject[] | null,
  singular: string,
): string {
  return (
    schema?.find((object) => object.nameSingular === singular)?.namePlural ??
    FALLBACK_PLURAL[singular] ??
    `${singular}s`
  );
}

export function fieldByName(
  schema: TwentyObject[] | null,
  singular: string,
  name: string,
): TwentyField | null {
  if (!schema) return null;
  const object = schema.find((item) => item.nameSingular === singular);
  return object?.fields.find((field) => field.name === name) ?? null;
}

export async function listRecords(
  plural: string,
  filter?: string,
  limit = 5,
  fields?: string,
): Promise<Record<string, unknown>[]> {
  const params = new URLSearchParams();
  if (filter) params.set("filter", filter);
  params.set("limit", String(limit));
  params.set("depth", "0");
  if (fields) params.set("fields", fields);
  const payload = await twentyRequest(
    "GET",
    `/rest/${plural}?${params.toString()}`,
  );
  return readList(payload, plural);
}

export async function createRecord(
  plural: string,
  singular: string,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const payload = await twentyRequest("POST", `/rest/${plural}`, data);
  const record = readRecord(payload, [`create${capitalize(singular)}`, singular]);
  if (!record) {
    throw new TwentyError(
      `Twenty gaf geen ${singular} terug.`,
      500,
      JSON.stringify(payload).slice(0, 400),
    );
  }
  return record;
}

export async function updateRecord(
  plural: string,
  singular: string,
  id: string,
  data: Record<string, unknown>,
): Promise<Record<string, unknown>> {
  const payload = await twentyRequest("PATCH", `/rest/${plural}/${id}`, data);
  return (
    readRecord(payload, [`update${capitalize(singular)}`, singular]) ?? { id }
  );
}

export async function getRecord(
  plural: string,
  singular: string,
  id: string,
  fields?: string,
): Promise<Record<string, unknown>> {
  const params = new URLSearchParams();
  params.set("depth", "0");
  if (fields) params.set("fields", fields);
  const payload = await twentyRequest(
    "GET",
    `/rest/${plural}/${id}?${params.toString()}`,
  );
  const record = readRecord(payload, [singular]);
  if (!record) {
    throw new TwentyError(`Twenty record ${id} niet gevonden.`, 404, "");
  }
  return record;
}

export async function uploadFilesField(
  fieldMetadataId: string,
  file: { filename: string; mime: string; bytes: Uint8Array },
): Promise<string> {
  const created = await metadataGraphql(
    `mutation CreateFileUpload($filename: String!, $size: Float!, $fileFolder: FileFolder!, $fieldMetadataId: String) {
      createFileUpload(
        filename: $filename
        size: $size
        fileFolder: $fileFolder
        fieldMetadataId: $fieldMetadataId
      ) {
        fileId
        uploadUrl
        contentType
      }
    }`,
    {
      filename: file.filename,
      size: file.bytes.byteLength,
      fileFolder: "FilesField",
      fieldMetadataId,
    },
  );
  const target = graphqlField(created, "createFileUpload");
  const fileId = stringValue(target.fileId);
  const uploadUrl = stringValue(target.uploadUrl);
  const contentType = stringValue(target.contentType);
  if (!fileId || !uploadUrl || !contentType) {
    throw new TwentyError(
      "Twenty gaf geen upload-doel terug.",
      500,
      JSON.stringify(created).slice(0, 400),
    );
  }

  await putUpload(uploadUrl, contentType, file.bytes);

  const completed = await metadataGraphql(
    `mutation CompleteFileUpload($fileId: String!) {
      completeFileUpload(fileId: $fileId) { id }
    }`,
    { fileId },
  );
  return stringValue(graphqlField(completed, "completeFileUpload").id) ?? fileId;
}

async function metadataGraphql(
  query: string,
  variables: Record<string, unknown>,
): Promise<unknown> {
  return twentyRequest("POST", "/metadata", { query, variables });
}

function graphqlField(
  payload: unknown,
  field: string,
): Record<string, unknown> {
  const errors = asRecord(payload)?.errors;
  if (Array.isArray(errors) && errors.length > 0) {
    throw new TwentyError(
      "CV-upload naar Twenty mislukt.",
      400,
      JSON.stringify(errors).slice(0, 800),
    );
  }
  const record = asRecord(asRecord(asRecord(payload)?.data)?.[field]);
  if (!record) {
    throw new TwentyError(
      "CV-upload naar Twenty mislukt.",
      500,
      JSON.stringify(payload).slice(0, 400),
    );
  }
  return record;
}

async function putUpload(
  uploadUrl: string,
  contentType: string,
  bytes: Uint8Array,
) {
  const url = /^https?:\/\//i.test(uploadUrl)
    ? uploadUrl
    : `${resolvedBase ?? configuredBases()[0]}${uploadUrl.startsWith("/") ? "" : "/"}${uploadUrl}`;
  let response: Response;
  try {
    response = await fetch(url, {
      method: "PUT",
      headers: { "Content-Type": contentType },
      body: new Blob([toBlobPart(bytes)], { type: contentType }),
      signal: AbortSignal.timeout(25_000),
    });
  } catch (error) {
    throw new TwentyError(
      error instanceof Error ? error.message : "CV-upload naar Twenty mislukt.",
      0,
      "",
    );
  }
  if (!response.ok) {
    const text = await response.text();
    throw new TwentyError(
      "CV-upload naar Twenty mislukt.",
      response.status,
      text.slice(0, 800),
    );
  }
}

function readList(payload: unknown, plural: string): Record<string, unknown>[] {
  const data = asRecord(asRecord(payload)?.data) ?? asRecord(payload);
  const list = data?.[plural];
  if (!Array.isArray(list)) return [];
  return list.filter((item): item is Record<string, unknown> =>
    Boolean(asRecord(item)),
  );
}

function readRecord(
  payload: unknown,
  keys: string[],
): Record<string, unknown> | null {
  const root = asRecord(payload);
  if (root && typeof root.id === "string") return root;
  const data = asRecord(root?.data) ?? root;
  if (!data) return null;
  for (const key of keys) {
    const value = asRecord(data[key]);
    if (value && typeof value.id === "string") return value;
  }
  for (const value of Object.values(data)) {
    const record = asRecord(value);
    if (record && typeof record.id === "string") return record;
  }
  return null;
}

export function asRecord(value: unknown): Record<string, unknown> | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  return value as Record<string, unknown>;
}

export function stringValue(value: unknown): string | null {
  return typeof value === "string" && value.trim() ? value : null;
}

export function capitalize(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function toBlobPart(bytes: Uint8Array): ArrayBuffer {
  const copy = new Uint8Array(bytes.byteLength);
  copy.set(bytes);
  return copy.buffer;
}

export function isPhoneRejection(error: unknown): boolean {
  if (!(error instanceof TwentyError) || error.status !== 400) return false;
  return /phone/i.test(error.body) && /(invalid|required|calling|country|format)/i.test(error.body);
}
