import { CV_TOO_LARGE, CV_WRONG_TYPE, MAX_CV_BYTES } from "../src/lib/apply/constants";
import { serverCvError } from "../src/lib/apply/cv";
import { normalizeDutchPhone } from "../src/lib/apply/phone";
import { parseApplyFormData } from "../src/lib/apply/parse-form";
import type { ApplyInput } from "../src/lib/apply/log";
import {
  getRecord,
  getSchema,
  listRecords,
  objectPlural,
  quoteFilter,
} from "../src/lib/twenty/client";
import {
  syncApplicationToTwenty,
  type TwentySyncResult,
} from "../src/lib/twenty/apply";

const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15);

function assert(condition: unknown, message: string) {
  if (!condition) throw new Error(message);
}

function tinyPdf(label: string): Uint8Array {
  const source = `%PDF-1.1
1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj
2 0 obj<</Type/Pages/Count 1/Kids[3 0 R]>>endobj
3 0 obj<</Type/Page/Parent 2 0 R/MediaBox[0 0 200 200]>>endobj
trailer<</Root 1 0 R>>
%%EOF
% ${label}
`;
  return new TextEncoder().encode(source);
}

function printPhones() {
  const samples = [
    ["06 12 34 56 78", "+31612345678"],
    ["0612345678", "+31612345678"],
    ["0031 6 12345678", "+31612345678"],
    ["+31 6 12345678", "+31612345678"],
    ["+31612345678", "+31612345678"],
    ["020-1234567", "+31201234567"],
    ["+32 470 12 34 56", null],
    ["12345", null],
  ] as const;

  console.log("\n=== Telefoonnormalisatie ===");
  for (const [input, expected] of samples) {
    const result = normalizeDutchPhone(input);
    const actual = result?.primaryPhoneNumber ?? null;
    console.log(`${input} -> ${actual ?? "(leeg)"}`);
    assert(
      actual === expected,
      `Verwacht ${expected} voor "${input}", kreeg ${actual}`,
    );
    if (result) {
      assert(result.primaryPhoneCountryCode === "NL", "landcode");
      assert(result.primaryPhoneCallingCode === "+31", "calling code");
    }
  }
}

async function printFiles() {
  console.log("\n=== Bestandstype en grootte ===");

  const exe = new Uint8Array([0x4d, 0x5a, 0x90, 0x00]);
  const exeError = serverCvError({
    name: "TEST-virus.exe",
    type: "application/octet-stream",
    bytes: exe,
  });
  console.log("TEST-virus.exe ->", exeError);
  assert(exeError === CV_WRONG_TYPE, "exe moet worden geweigerd");

  const fakePdf = serverCvError({
    name: "TEST.pdf",
    type: "application/pdf",
    bytes: new TextEncoder().encode("dit is geen pdf"),
  });
  console.log("TEST.pdf (geen PDF-signatuur) ->", fakePdf);
  assert(fakePdf === CV_WRONG_TYPE, "nep-pdf moet worden geweigerd");

  const oversized = new Uint8Array(MAX_CV_BYTES + 1);
  oversized.set(tinyPdf("te groot"));
  const sizeError = serverCvError({
    name: "TEST-te-groot.pdf",
    type: "application/pdf",
    bytes: oversized,
  });
  console.log(
    `TEST-te-groot.pdf (${oversized.byteLength} bytes) ->`,
    sizeError,
  );
  assert(sizeError === CV_TOO_LARGE, "te groot bestand moet worden geweigerd");

  const valid = serverCvError({
    name: "TEST-cv.pdf",
    type: "application/pdf",
    bytes: tinyPdf("ok"),
  });
  console.log("TEST-cv.pdf ->", valid ?? "geldig");
  assert(valid === null, "echte pdf moet slagen");

  const form = new FormData();
  form.set("name", "TEST Parser");
  form.set("email", "test-parser@example.com");
  form.set("phone", "0612345678");
  form.set("linkedin", "linkedin.com/in/test-kandidaat");
  form.set("vacancy", "TEST vacature");
  form.set("page", "/vacatures/test");
  form.set("gdprConsent", "true");
  form.set(
    "cv",
    new File([exe], "TEST.exe", { type: "application/octet-stream" }),
  );
  const parsed = await parseApplyFormData(form);
  console.log(
    "parser ongeldig type ->",
    parsed.ok ? "onverwacht geldig" : parsed.fieldErrors.cv,
  );
  assert(!parsed.ok && parsed.fieldErrors.cv === CV_WRONG_TYPE, "parser cv");

  const big = new FormData();
  big.set("name", "TEST Parser");
  big.set("email", "test-parser@example.com");
  big.set("phone", "0612345678");
  big.set("vacancy", "TEST vacature");
  big.set("page", "/vacatures/test");
  big.set("gdprConsent", "true");
  big.set(
    "cv",
    new File([oversized], "TEST-te-groot.pdf", { type: "application/pdf" }),
  );
  const parsedBig = await parseApplyFormData(big);
  console.log(
    "parser te groot ->",
    parsedBig.ok ? "onverwacht geldig" : parsedBig.fieldErrors.cv,
  );
  assert(
    !parsedBig.ok && parsedBig.fieldErrors.cv === CV_TOO_LARGE,
    "parser grootte",
  );
}

function application(options: {
  name: string;
  email: string;
  phone: string;
  filename: string;
  vacancy: string;
}): ApplyInput {
  return {
    name: options.name,
    email: options.email,
    phone: options.phone,
    linkedin: "https://www.linkedin.com/in/test-kandidaat",
    vacancy: options.vacancy,
    page: "/vacatures/test",
    cv: {
      filename: options.filename,
      mime: "application/pdf",
      bytes: tinyPdf(options.filename),
    },
  };
}

async function vacancyTitle(): Promise<string> {
  const schema = await getSchema();
  const plural = objectPlural(schema, "vacancy");
  const field =
    schema
      ?.find((object) => object.nameSingular === "vacancy")
      ?.fields.find((item) => item.name === "name" || item.name === "title")
      ?.name ?? "name";
  const records = await listRecords(plural, undefined, 5, `id,${field}`);
  for (const record of records) {
    const value = record[field];
    if (typeof value === "string" && value.trim()) return value;
  }
  return `TEST vacature zonder match ${stamp}`;
}

async function readBack(id: string) {
  const schema = await getSchema();
  const plural = objectPlural(schema, "candidate");
  return getRecord(
    plural,
    "candidate",
    id,
    "id,name,email,phone,linkedin,cv,summary,source,searchStatus,gdprConsent,gdprConsentDate,retainUntil",
  );
}

async function runTwenty() {
  if (!process.env.TWENTY_API_KEY) {
    console.log(
      "\n=== Twenty ===\nOVERGESLAGEN: TWENTY_API_KEY staat niet in de omgeving.",
    );
    return;
  }

  console.log("\n=== Twenty schema (candidate, vacancy, submission, task, taskTarget) ===");
  const schema = await getSchema();
  const interesting = ["candidate", "vacancy", "submission", "task", "taskTarget"];
  if (!schema) {
    console.log("Metadata niet gelezen. Fallback-paden worden gebruikt.");
  } else {
    for (const name of interesting) {
      const object = schema.find((item) => item.nameSingular === name);
      console.log(
        object
          ? `${name} -> /rest/${object.namePlural} velden: ${object.fields.map((field) => field.name).join(", ")}`
          : `${name} -> NIET GEVONDEN`,
      );
    }
  }

  const vacancy = await vacancyTitle();
  console.log("\nVacature voor koppeling:", vacancy);

  const email = `test-kandidaat-${stamp}@example.com`;
  console.log("\n=== 1. Nieuwe kandidaat met CV ===");
  const first = await syncApplicationToTwenty(
    application({
      name: "TEST Kandidaat Nieuw",
      email,
      phone: "06 12345678",
      filename: "TEST-cv.pdf",
      vacancy,
    }),
  );
  console.log(JSON.stringify(first, null, 2));
  assert(first.ok && first.created, "nieuwe kandidaat");
  assert(
    !first.warnings.some((warning) => warning.includes("CV-upload")),
    `CV-upload: ${first.warnings.join(" | ")}`,
  );
  const { taskId, submissionId, candidateId } = requiredIds(first);

  const stored = await readBack(candidateId);
  console.log("Opgeslagen:", JSON.stringify(summarize(stored), null, 2));
  console.log("cv:", JSON.stringify(stored.cv ?? null, null, 2));
  assert(stored.cv != null, "cv is null");
  assert(
    Array.isArray(stored.cv) && stored.cv.length > 0,
    "cv hangt niet aan de kandidaat",
  );
  await assertTwoTaskTargets(taskId, candidateId, submissionId);

  console.log("\n=== 2. Zelfde e-mail nogmaals ===");
  const second = await syncApplicationToTwenty(
    application({
      name: "TEST Kandidaat Nogmaals",
      email,
      phone: "+32 470 12 34 56",
      filename: "TEST-cv-2.pdf",
      vacancy,
    }),
  );
  console.log(JSON.stringify(second, null, 2));
  assert(second.ok, "tweede sollicitatie");
  assert(second.created === false, "geen tweede kandidaat");
  const {
    taskId: secondTaskId,
    submissionId: secondSubmissionId,
    candidateId: secondCandidateId,
  } = requiredIds(second);
  assert(secondCandidateId === candidateId, "zelfde kandidaat-id");
  assert(secondSubmissionId === submissionId, "geen dubbele submission");

  const after = await readBack(candidateId);
  console.log("Na dubbele aanvraag:", JSON.stringify(summarize(after), null, 2));
  console.log("cv:", JSON.stringify(after.cv ?? null, null, 2));
  assert(after.cv != null, "cv is null na tweede aanvraag");
  assert(after.name === "TEST Kandidaat Nieuw", "naam niet overschreven");
  const files = Array.isArray(after.cv) ? after.cv : [];
  assert(files.length >= 2, "tweede CV toegevoegd");
  await assertTwoTaskTargets(secondTaskId, candidateId, secondSubmissionId);

  console.log("\n=== 3. Telefoon in drie notaties ===");
  const phones = [
    ["06 98765432", "TEST Telefoon 06"],
    ["0031 6 98765432", "TEST Telefoon 0031"],
    ["+31 6 98765432", "TEST Telefoon plus"],
  ] as const;
  for (const [phone, name] of phones) {
    const result = await syncApplicationToTwenty(
      application({
        name,
        email: `test-${name.toLowerCase().replace(/\s+/g, "-")}-${stamp}@example.com`,
        phone,
        filename: "TEST-cv.pdf",
        vacancy: `TEST vacature zonder match ${stamp}`,
      }),
    );
    assert(result.ok, `${name} niet aangemaakt`);
    const { candidateId: phoneCandidateId } = result;
    if (!phoneCandidateId) throw new Error(`${name} niet aangemaakt`);
    const record = await readBack(phoneCandidateId);
    console.log(
      phone,
      "->",
      JSON.stringify({
        id: phoneCandidateId,
        phone: record.phone ?? null,
        summary: record.summary ?? null,
        warnings: result.warnings,
      }),
    );
  }
}

function requiredIds(result: TwentySyncResult) {
  const { taskId, submissionId, candidateId } = result;
  if (!taskId || !submissionId || !candidateId) {
    throw new Error("taak, submission of kandidaat ontbreekt");
  }
  return { taskId, submissionId, candidateId };
}

async function assertTwoTaskTargets(
  taskId: string,
  candidateId: string,
  submissionId: string,
) {
  const targets = await listRecords(
    "taskTargets",
    `taskId[eq]:${quoteFilter(taskId)}`,
    10,
  );
  console.log("taskTargets:", JSON.stringify(targets, null, 2));
  assert(
    targets.length === 2,
    `verwacht 2 taskTargets, kreeg ${targets.length}`,
  );
  assert(
    targets.some((target) => target.targetCandidateId === candidateId),
    "geen targetCandidateId op de taak",
  );
  assert(
    targets.some((target) => target.targetSubmissionId === submissionId),
    "geen targetSubmissionId op de taak",
  );
}

function summarize(record: Record<string, unknown>) {
  const cv = Array.isArray(record.cv)
    ? record.cv.map((file) => {
        if (!file || typeof file !== "object") return file;
        const item = file as { fileId?: string; label?: string };
        return { fileId: item.fileId, label: item.label };
      })
    : record.cv;
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    phone: record.phone,
    linkedin: record.linkedin,
    source: record.source,
    searchStatus: record.searchStatus,
    gdprConsent: record.gdprConsent,
    gdprConsentDate: record.gdprConsentDate,
    retainUntil: record.retainUntil,
    summary: record.summary,
    cv,
  };
}

async function main() {
  printPhones();
  await printFiles();
  await runTwenty();
  console.log("\nKlaar.");
}

main().catch((error: unknown) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
