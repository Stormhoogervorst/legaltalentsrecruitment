import { CV_TOO_LARGE, CV_WRONG_TYPE, MAX_CV_BYTES } from "@/lib/apply/constants";

type CvExtension = "pdf" | "doc" | "docx";

const MIME_BY_EXTENSION: Record<CvExtension, string[]> = {
  pdf: ["application/pdf", "application/x-pdf"],
  doc: ["application/msword"],
  docx: [
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ],
};

export type CvPayload = {
  filename: string;
  mime: string;
  bytes: Uint8Array;
};

export function cvExtension(filename: string): CvExtension | null {
  const base = filename.split(/[/\\]/).pop() ?? "";
  const extension = base.includes(".")
    ? base.split(".").pop()?.toLowerCase()
    : "";
  if (extension === "pdf" || extension === "doc" || extension === "docx") {
    return extension;
  }
  return null;
}

export function safeCvFilename(filename: string, extension: CvExtension): string {
  const base = filename.replace(/\\/g, "/").split("/").pop() ?? `cv.${extension}`;
  const cleaned = base.replace(/\0/g, "").trim().slice(0, 180);
  return cleaned || `cv.${extension}`;
}

export function mimeForExtension(extension: CvExtension, provided: string): string {
  const normalized = provided.trim().toLowerCase();
  if (MIME_BY_EXTENSION[extension].includes(normalized)) return normalized;
  return MIME_BY_EXTENSION[extension][0];
}

/** Client check: extension, and MIME when the browser supplied one. */
export function clientCvError(file: {
  name: string;
  type: string;
  size: number;
}): string | null {
  if (!file.name && file.size === 0) return null;
  const extension = cvExtension(file.name);
  if (!extension) return CV_WRONG_TYPE;
  const mime = file.type.trim().toLowerCase();
  if (
    mime &&
    mime !== "application/octet-stream" &&
    !MIME_BY_EXTENSION[extension].includes(mime)
  ) {
    return CV_WRONG_TYPE;
  }
  if (file.size > MAX_CV_BYTES) return CV_TOO_LARGE;
  if (file.size <= 0) return CV_WRONG_TYPE;
  return null;
}

function hasMagic(extension: CvExtension, bytes: Uint8Array): boolean {
  if (bytes.length < 4) return false;
  if (extension === "pdf") {
    return (
      bytes[0] === 0x25 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x44 &&
      bytes[3] === 0x46
    );
  }
  if (extension === "docx") {
    return bytes[0] === 0x50 && bytes[1] === 0x4b;
  }
  return (
    bytes[0] === 0xd0 &&
    bytes[1] === 0xcf &&
    bytes[2] === 0x11 &&
    bytes[3] === 0xe0
  );
}

/** Server check: extension, MIME, size and file signature. */
export function serverCvError(file: {
  name: string;
  type: string;
  bytes: Uint8Array;
}): string | null {
  const extension = cvExtension(file.name);
  if (!extension) return CV_WRONG_TYPE;
  const metaError = clientCvError({
    name: file.name,
    type: file.type,
    size: file.bytes.byteLength,
  });
  if (metaError) return metaError;
  if (!hasMagic(extension, file.bytes)) return CV_WRONG_TYPE;
  return null;
}
