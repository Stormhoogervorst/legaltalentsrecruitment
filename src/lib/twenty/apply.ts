import { consentDates } from "@/lib/apply/dates";
import { logApplicationProblem, type ApplyInput } from "@/lib/apply/log";
import { normalizeLinkedIn } from "@/lib/apply/linkedin";
import { normalizeDutchPhone } from "@/lib/apply/phone";
import { MAX_CV_FILES, RECRUITER_ID } from "@/lib/apply/constants";
import {
  asRecord,
  createRecord,
  fieldByName,
  getRecord,
  getSchema,
  isPhoneRejection,
  listRecords,
  objectPlural,
  quoteFilter,
  stringValue,
  TwentyError,
  updateRecord,
  uploadFilesField,
  type TwentyObject,
} from "@/lib/twenty/client";

const CANDIDATE_FIELDS = [
  "id",
  "name",
  "email",
  "phone",
  "linkedin",
  "source",
  "searchStatus",
  "recruiterId",
  "gdprConsent",
  "gdprConsentDate",
  "retainUntil",
  "summary",
  "cv",
].join(",");

const CV_FAILED = "CV-upload mislukt, zie mail";

export type TwentySyncResult = {
  ok: boolean;
  candidateId?: string;
  created?: boolean;
  submissionId?: string | null;
  taskId?: string | null;
  warnings: string[];
  error?: string;
};

export async function syncApplicationToTwenty(
  input: ApplyInput,
): Promise<TwentySyncResult> {
  const warnings: string[] = [];
  try {
    const schema = await getSchema();
    const candidate = await findOrCreateCandidate(schema, input, warnings);
    await attachCv(schema, candidate.id, input, warnings);
    const submissionId = await linkVacancy(
      schema,
      candidate.id,
      input,
      warnings,
    );
    const taskId = await createFollowUpTask(
      schema,
      candidate.id,
      submissionId,
      input,
      warnings,
    );

    if (warnings.length > 0) {
      logApplicationProblem("deels gelukt", input, warnings);
    }

    return {
      ok: true,
      candidateId: candidate.id,
      created: candidate.created,
      submissionId,
      taskId,
      warnings,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Twenty mislukt.";
    const body = error instanceof TwentyError ? error.body : undefined;
    logApplicationProblem(message, input, body ?? message);
    return { ok: false, warnings, error: message };
  }
}

async function findOrCreateCandidate(
  schema: TwentyObject[] | null,
  input: ApplyInput,
  warnings: string[],
) {
  const plural = objectPlural(schema, "candidate");
  const existing = await findCandidate(plural, input.email);
  if (existing) {
    const id = stringValue(existing.id);
    if (!id) throw new TwentyError("Kandidaat zonder id.", 500, "");
    const record = await readCandidate(plural, id);
    try {
      await fillEmptyFields(plural, id, record, input);
    } catch (error) {
      warnings.push(
        `Lege velden niet bijgewerkt: ${error instanceof Error ? error.message : "onbekend"}`,
      );
    }
    return { id, created: false, record };
  }

  const created = await createCandidate(plural, input, warnings);
  const id = stringValue(created.id);
  if (!id) throw new TwentyError("Nieuwe kandidaat zonder id.", 500, "");
  return { id, created: true, record: created };
}

async function readCandidate(
  plural: string,
  id: string,
): Promise<Record<string, unknown>> {
  try {
    return await getRecord(plural, "candidate", id, CANDIDATE_FIELDS);
  } catch (error) {
    if (!(error instanceof TwentyError) || error.status !== 400) throw error;
    return getRecord(plural, "candidate", id);
  }
}

async function findCandidate(
  plural: string,
  email: string,
): Promise<Record<string, unknown> | null> {
  const filter = `email.primaryEmail[ilike]:${quoteFilter(email.trim())}`;
  const matches = await listRecords(plural, filter, 2);
  if (matches.length > 1) {
    console.error("[apply] Meerdere kandidaten met hetzelfde e-mailadres.", {
      email,
      ids: matches.map((match) => match.id),
    });
  }
  return matches[0] ?? null;
}

async function createCandidate(
  plural: string,
  input: ApplyInput,
  warnings: string[],
): Promise<Record<string, unknown>> {
  const data = candidatePayload(input);
  let failure: unknown;
  try {
    return await createRecord(plural, "candidate", data);
  } catch (error) {
    failure = error;
  }

  if (isPhoneRejection(failure) && data.phone) {
    console.error("[apply] Telefoon geweigerd, kandidaat alsnog zonder nummer.", {
      phone: input.phone,
    });
    try {
      return await createRecord(plural, "candidate", omitKey(data, "phone"));
    } catch (retryError) {
      failure = retryError;
    }
  }

  if (failure instanceof TwentyError && failure.status === 400) {
    console.error("[apply] Volledige kandidaat geweigerd, minimale aanmaak.", {
      body: failure.body.slice(0, 500),
    });
    warnings.push("Kandidaat met beperkte velden aangemaakt.");
    return createRecord(plural, "candidate", {
      name: input.name,
      email: { primaryEmail: input.email },
      summary: applicationSummary(input),
    });
  }

  throw failure;
}

async function fillEmptyFields(
  plural: string,
  id: string,
  existing: Record<string, unknown>,
  input: ApplyInput,
) {
  const patch = emptyFieldPatch(existing, input);
  if (Object.keys(patch).length === 0) return;
  try {
    await updateRecord(plural, "candidate", id, patch);
  } catch (error) {
    if (!isPhoneRejection(error) || !patch.phone) throw error;
    const withoutPhone = omitKey(patch, "phone");
    if (Object.keys(withoutPhone).length === 0) return;
    await updateRecord(plural, "candidate", id, withoutPhone);
  }
}

function candidatePayload(input: ApplyInput): Record<string, unknown> {
  const dates = consentDates();
  const phone = normalizeDutchPhone(input.phone);
  const linkedin = input.linkedin;
  const data: Record<string, unknown> = {
    name: input.name,
    email: { primaryEmail: input.email },
    source: "WEBSITE",
    searchStatus: "NIEUW",
    recruiterId: RECRUITER_ID,
    gdprConsent: true,
    gdprConsentDate: dates.gdprConsentDate,
    retainUntil: dates.retainUntil,
  };
  if (phone) data.phone = phone;
  if (linkedin) data.linkedin = { primaryLinkUrl: linkedin };
  data.summary = applicationSummary(input);
  return data;
}

function emptyFieldPatch(
  existing: Record<string, unknown>,
  input: ApplyInput,
): Record<string, unknown> {
  const patch: Record<string, unknown> = {};
  const dates = consentDates();
  const phone = normalizeDutchPhone(input.phone);
  const linkedin = normalizeLinkedIn(input.linkedin);

  if (isBlank(existing.name)) patch.name = input.name;
  if (isBlank(asRecord(existing.email)?.primaryEmail)) {
    patch.email = { primaryEmail: input.email };
  }
  if (phone && isBlank(asRecord(existing.phone)?.primaryPhoneNumber)) {
    patch.phone = phone;
  }
  if (linkedin && isBlank(asRecord(existing.linkedin)?.primaryLinkUrl)) {
    patch.linkedin = { primaryLinkUrl: linkedin };
  }
  if (isBlank(existing.source)) patch.source = "WEBSITE";
  if (isBlank(existing.searchStatus)) patch.searchStatus = "NIEUW";
  if (isBlank(existing.recruiterId)) patch.recruiterId = RECRUITER_ID;
  if (existing.gdprConsent == null) patch.gdprConsent = true;
  if (isBlank(existing.gdprConsentDate)) patch.gdprConsentDate = dates.gdprConsentDate;
  if (isBlank(existing.retainUntil)) patch.retainUntil = dates.retainUntil;
  if (isBlank(existing.summary)) patch.summary = applicationSummary(input);
  return patch;
}

function applicationSummary(input: ApplyInput): string {
  const linkedin = input.linkedin || "niet opgegeven";
  return `Gesolliciteerd via de website op: ${input.vacancy}. Telefoon: ${input.phone}. LinkedIn: ${linkedin}`;
}

async function attachCv(
  schema: TwentyObject[] | null,
  candidateId: string,
  input: ApplyInput,
  warnings: string[],
) {
  try {
    const field = fieldByName(schema, "candidate", "cv");
    if (!field) {
      warnings.push(CV_FAILED);
      return;
    }
    const plural = objectPlural(schema, "candidate");
    const fresh = await readCandidate(plural, candidateId);
    const current = readFileList(fresh.cv);
    if (current === null) {
      warnings.push(CV_FAILED);
      return;
    }
    if (current.length >= MAX_CV_FILES) {
      warnings.push(CV_FAILED);
      return;
    }
    const fileId = await uploadFilesField(field.id, input.cv);
    await updateRecord(plural, "candidate", candidateId, {
      cv: [...current, { fileId, label: input.cv.filename }],
    });
  } catch (error) {
    console.error("[apply] CV-upload mislukt.", {
      message: error instanceof Error ? error.message : "onbekend",
      body: error instanceof TwentyError ? error.body.slice(0, 400) : undefined,
      filename: input.cv.filename,
      size: input.cv.bytes.byteLength,
    });
    warnings.push(CV_FAILED);
  }
}

async function linkVacancy(
  schema: TwentyObject[] | null,
  candidateId: string,
  input: ApplyInput,
  warnings: string[],
): Promise<string | null> {
  try {
    const vacancy = await findVacancy(schema, input.vacancy);
    if (!vacancy) {
      warnings.push(`Geen vacature gevonden voor: ${input.vacancy}`);
      return null;
    }

    const plural = objectPlural(schema, "submission");
    const filter = `candidateId[eq]:${quoteFilter(candidateId)},vacancyId[eq]:${quoteFilter(vacancy.id)}`;
    let existing: Record<string, unknown>[] = [];
    try {
      existing = await listRecords(plural, filter, 1);
    } catch (error) {
      warnings.push(
        `Bestaande sollicitatie niet gecontroleerd: ${error instanceof Error ? error.message : "onbekend"}`,
      );
      return null;
    }
    const existingId = stringValue(existing[0]?.id);
    if (existingId) return existingId;

    const created = await createRecord(plural, "submission", {
      name: `${input.name} - ${input.vacancy}`,
      stage: "GEINTERESSEERD",
      candidateId,
      vacancyId: vacancy.id,
    });
    return stringValue(created.id);
  } catch (error) {
    warnings.push(
      `Vacature niet gekoppeld: ${error instanceof Error ? error.message : "onbekend"}`,
    );
    return null;
  }
}

async function findVacancy(
  schema: TwentyObject[] | null,
  title: string,
): Promise<{ id: string } | null> {
  const plural = objectPlural(schema, "vacancy");
  const fields = vacancyTitleFields(schema);
  for (const field of fields) {
    try {
      const exact = await listRecords(
        plural,
        `${field}[ilike]:${quoteFilter(title)}`,
        5,
      );
      const exactId = pickVacancyId(exact, field, title, true);
      if (exactId) return { id: exactId };
    } catch (error) {
      if (!isUnknownField(error)) throw error;
    }
  }

  for (const field of fields) {
    try {
      const contains = await listRecords(
        plural,
        `${field}[ilike]:${quoteFilter(`%${title.replace(/%/g, "")}%`)}`,
        5,
      );
      const id = pickVacancyId(contains, field, title, false);
      if (id) return { id };
    } catch (error) {
      if (!isUnknownField(error)) throw error;
    }
  }
  return null;
}

function vacancyTitleFields(schema: TwentyObject[] | null): string[] {
  const names = ["name", "title"];
  if (!schema) return names;
  const object = schema.find((item) => item.nameSingular === "vacancy");
  if (!object || object.fields.length === 0) return names;
  const present = names.filter((name) =>
    object.fields.some((field) => field.name === name),
  );
  return present.length > 0 ? present : names;
}

function pickVacancyId(
  records: Record<string, unknown>[],
  field: string,
  title: string,
  exactOnly: boolean,
): string | null {
  const wanted = title.trim().toLowerCase();
  const exact = records.find((record) => {
    const value = stringValue(record[field]) ?? labelOf(record);
    return value?.trim().toLowerCase() === wanted;
  });
  const chosen = exact ?? (exactOnly ? null : records[0]);
  return chosen ? stringValue(chosen.id) : null;
}

function labelOf(record: Record<string, unknown>): string | null {
  return stringValue(record.name) ?? stringValue(record.title);
}

async function createFollowUpTask(
  schema: TwentyObject[] | null,
  candidateId: string,
  submissionId: string | null,
  input: ApplyInput,
  warnings: string[],
): Promise<string | null> {
  try {
    const plural = objectPlural(schema, "task");
    const data: Record<string, unknown> = {
      title: `Nieuwe sollicitatie: ${input.name} - ${input.vacancy}`,
      status: "TODO",
      assigneeId: RECRUITER_ID,
      bodyV2: { markdown: taskMarkdown(input, warnings) },
    };
    let created: Record<string, unknown>;
    try {
      created = await createRecord(plural, "task", data);
    } catch (error) {
      if (!isAssigneeRejection(error)) throw error;
      created = await createRecord(plural, "task", omitKey(data, "assigneeId"));
      warnings.push("Taak aangemaakt zonder assignee.");
    }
    const taskId = stringValue(created.id);
    if (!taskId) return null;
    await linkTask(schema, taskId, candidateId, submissionId, warnings);
    return taskId;
  } catch (error) {
    warnings.push(
      `Taak niet aangemaakt: ${error instanceof Error ? error.message : "onbekend"}`,
    );
    return null;
  }
}

async function linkTask(
  schema: TwentyObject[] | null,
  taskId: string,
  candidateId: string,
  submissionId: string | null,
  warnings: string[],
) {
  // targetCandidateId / targetSubmissionId are morph ids. fieldsList only
  // exposes the relation "target", so a schema miss must not drop them.
  const plural = objectPlural(schema, "taskTarget");
  const links: Record<string, unknown>[] = [
    { taskId, targetCandidateId: candidateId },
  ];
  if (submissionId) links.push({ taskId, targetSubmissionId: submissionId });

  let candidateLinked = false;
  let submissionLinked = !submissionId;
  const failures: string[] = [];

  for (const data of links) {
    try {
      await createRecord(plural, "taskTarget", data);
      if ("targetCandidateId" in data) candidateLinked = true;
      if ("targetSubmissionId" in data) submissionLinked = true;
    } catch (error) {
      const body = error instanceof TwentyError ? ` ${error.body}` : "";
      failures.push(
        `${error instanceof Error ? error.message : "onbekend"}${body}`,
      );
    }
  }

  if (!candidateLinked) {
    warnings.push(
      `Taak niet gekoppeld: ${failures.join(" | ") || "onbekend"}`,
    );
    return;
  }
  if (!submissionLinked) {
    warnings.push("Taak wel aan kandidaat gekoppeld, niet aan de submission.");
  }
}

function taskMarkdown(input: ApplyInput, warnings: string[]): string {
  const lines = [
    `Naam: ${input.name}`,
    `E-mail: ${input.email}`,
    `Telefoon: ${input.phone}`,
    `LinkedIn: ${input.linkedin || "niet opgegeven"}`,
    `Vacature: ${input.vacancy}`,
    `Pagina: ${input.page}`,
    "",
    "Reageer binnen 5 werkdagen.",
  ];
  if (warnings.includes(CV_FAILED)) {
    lines.push("", CV_FAILED);
  }
  if (warnings.some((warning) => warning.startsWith("Geen vacature gevonden"))) {
    lines.push("", `Geen overeenkomende vacature gevonden voor: ${input.vacancy}.`);
  }
  return lines.join("\n");
}

function readFileList(
  value: unknown,
): { fileId: string; label: string }[] | null {
  if (value == null) return [];
  if (!Array.isArray(value)) return null;
  const files: { fileId: string; label: string }[] = [];
  for (const item of value) {
    const record = asRecord(item);
    const fileId = record ? stringValue(record.fileId) : null;
    if (!fileId) continue;
    files.push({
      fileId,
      label: (record && stringValue(record.label)) || "cv",
    });
  }
  return files;
}

function isBlank(value: unknown): boolean {
  if (value == null) return true;
  if (typeof value === "string") return value.trim().length === 0;
  return false;
}

function isUnknownField(error: unknown): boolean {
  if (!(error instanceof TwentyError) || error.status !== 400) return false;
  return /unknown|cannot find|not found|does not exist|invalid field|field .* not/i.test(
    error.body,
  );
}

function omitKey(
  data: Record<string, unknown>,
  key: string,
): Record<string, unknown> {
  const copy = { ...data };
  delete copy[key];
  return copy;
}

function isAssigneeRejection(error: unknown): boolean {
  return (
    error instanceof TwentyError &&
    error.status === 400 &&
    /assignee/i.test(error.body)
  );
}
