import { APPLY_FAILURE_MESSAGE, MAX_REQUEST_BYTES } from "@/lib/apply/constants";
import { logApplicationProblem, type ApplyInput } from "@/lib/apply/log";
import { honeypotFilled, parseApplyFormData } from "@/lib/apply/parse-form";
import { allowApply, clientIp } from "@/lib/apply/rate-limit";
import { sendApplicationMail } from "@/lib/web3forms-server";
import { syncApplicationToTwenty } from "@/lib/twenty/apply";

export const runtime = "nodejs";
export const maxDuration = 60;

const RATE_LIMIT_MESSAGE =
  "Te veel pogingen. Wacht een paar minuten en probeer het opnieuw.";

export async function POST(request: Request) {
  if (!allowApply(clientIp(request))) {
    return json({ success: false, message: RATE_LIMIT_MESSAGE }, 429);
  }

  const contentLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
    return json(
      {
        success: false,
        fieldErrors: { cv: "Je CV mag maximaal 5 MB zijn." },
      },
      400,
    );
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return json(
      {
        success: false,
        message: "Het formulier kon niet worden gelezen.",
      },
      400,
    );
  }

  if (honeypotFilled(form)) {
    return json({
      success: true,
      channels: { web3forms: true, twenty: true },
    });
  }

  const parsed = await parseApplyFormData(form);
  if (!parsed.ok) {
    return json({ success: false, fieldErrors: parsed.fieldErrors }, 400);
  }

  return deliver(parsed.data);
}

async function deliver(input: ApplyInput) {
  const [mail, twenty] = await Promise.allSettled([
    sendApplicationMail(input),
    syncApplicationToTwenty(input),
  ]);

  const web3formsOk = mail.status === "fulfilled" && mail.value.ok;
  const twentyOk = twenty.status === "fulfilled" && twenty.value.ok;

  if (twenty.status === "rejected") {
    logApplicationProblem(
      "Twenty exception",
      input,
      twenty.reason instanceof Error ? twenty.reason.message : twenty.reason,
    );
  }

  if (!web3formsOk && !twentyOk) {
    return json(
      {
        success: false,
        message: APPLY_FAILURE_MESSAGE,
        channels: { web3forms: false, twenty: false },
      },
      502,
    );
  }

  return json({
    success: true,
    channels: { web3forms: web3formsOk, twenty: twentyOk },
  });
}

function json(body: unknown, status = 200) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}
