"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { type BaseSyntheticEvent, useId, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { SlashPill } from "@/components/home/primitives";
import { APPLY_FAILURE_MESSAGE } from "@/lib/apply/constants";
import { normalizeLinkedIn } from "@/lib/apply/linkedin";
import { submitToWeb3Forms } from "@/lib/web3forms";
import {
  sollicitatieSchema,
  type SollicitatieFormValues,
} from "@/lib/validations/sollicitatie";

const inputClass =
  "w-full border-0 border-b border-[rgba(10,10,15,0.18)] bg-transparent px-0 py-3 text-[16px] leading-[1.5] text-foreground outline-none transition-colors placeholder:text-foreground-muted focus:border-accent";
const labelClass =
  "mb-2 block text-sm font-medium leading-[1.5] text-foreground-muted";
const errorClass = "mt-2 text-xs font-medium text-red-700";

type SollicitatieFormProps = {
  vacatureTitle: string;
};

type ApplyResponse = {
  success?: boolean;
  message?: string;
  fieldErrors?: Partial<Record<keyof SollicitatieFormValues | "page", string>>;
  channels?: { web3forms?: boolean; twenty?: boolean };
};

const fieldNames = [
  "name",
  "email",
  "phone",
  "linkedin",
  "vacancy",
  "gdprConsent",
  "cv",
] as const;

export function SollicitatieForm({ vacatureTitle }: SollicitatieFormProps) {
  const formId = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<SollicitatieFormValues>({
    resolver: zodResolver(sollicitatieSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      vacancy: vacatureTitle,
      gdprConsent: false,
      honeypot: "",
    },
  });

  const onSubmit: SubmitHandler<SollicitatieFormValues> = async (
    values,
    event?: BaseSyntheticEvent,
  ) => {
    const formElement = event?.currentTarget;
    const honeypot =
      (formElement instanceof HTMLFormElement
        ? new FormData(formElement).get("website")?.toString()
        : "") ||
      values.honeypot ||
      "";

    if (honeypot.trim()) {
      setSubmitStatus("success");
      return;
    }

    const file = values.cv?.item(0);
    if (!file) {
      setError("cv", { message: "Upload je CV." });
      return;
    }

    const pagePath =
      typeof window === "undefined"
        ? ""
        : `${window.location.pathname}${window.location.search}`;

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerError(null);

    const payload = new FormData();
    payload.set("name", values.name);
    payload.set("email", values.email);
    payload.set("phone", values.phone);
    payload.set("linkedin", normalizeLinkedIn(values.linkedin));
    payload.set("vacancy", vacatureTitle);
    payload.set("page", pagePath);
    payload.set("gdprConsent", values.gdprConsent ? "true" : "false");
    payload.set("website", honeypot);
    payload.set("cv", file, file.name);

    let response: Response | null = null;
    try {
      response = await fetch("/api/apply", { method: "POST", body: payload });
    } catch {
      response = null;
    }

    const result = response ? await readApplyResponse(response) : null;
    const savedOnServer = Boolean(response?.ok && result?.success);
    const mailAlreadySent = result?.channels?.web3forms === true;
    const shouldRetryMail =
      !mailAlreadySent && (savedOnServer || !response || response.status >= 500);

    let mailSent = mailAlreadySent;
    if (shouldRetryMail) {
      const mail = await submitToWeb3Forms(
        {
          subject: `Nieuwe sollicitatie: ${vacatureTitle} — ${values.name}`,
          from_name: "Legal Talents Sollicitatie",
          name: values.name,
          email: values.email,
          phone: values.phone,
          linkedin: normalizeLinkedIn(values.linkedin),
          vacancy: vacatureTitle,
          page: pagePath,
        },
        file,
      );
      mailSent = mail.success;
    }

    setIsSubmitting(false);

    if (savedOnServer || mailSent) {
      setSubmitStatus("success");
      return;
    }

    if (result?.fieldErrors) {
      let shown = false;
      for (const field of fieldNames) {
        const message = result.fieldErrors[field];
        if (!message) continue;
        setError(field, { message });
        shown = true;
      }
      if (shown) return;
    }

    setServerError(result?.message || APPLY_FAILURE_MESSAGE);
    setSubmitStatus("error");
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-[24px] bg-background-secondary p-8 text-center md:p-12">
        <SlashPill>/ BEDANKT</SlashPill>
        <h2 className="display-md mt-8 text-foreground">
          Bedankt voor je sollicitatie!
        </h2>
        <p className="mx-auto mt-6 max-w-[540px] text-[18px] leading-[1.5] text-foreground-secondary">
          We hebben je sollicitatie voor {vacatureTitle} ontvangen. We reageren
          binnen 5 werkdagen.
        </p>
      </div>
    );
  }

  return (
    <>
      <SlashPill>/ SOLLICITEREN</SlashPill>
      <h2 className="display-md mt-8">Solliciteer direct</h2>
      <p className="mt-6 max-w-[540px] text-[18px] leading-[1.5] text-foreground-secondary">
        Vul het formulier in. We reageren binnen 5 werkdagen, meestal sneller.
        Vertrouwelijk en zonder verplichtingen.
      </p>
      <div className="mt-12">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="rounded-[24px] border border-[rgba(10,10,15,0.08)] bg-white p-8 md:p-12"
          noValidate
        >
          {submitStatus === "error" ? (
            <div
              role="alert"
              className="mb-8 rounded-[16px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
            >
              {serverError ?? APPLY_FAILURE_MESSAGE}
            </div>
          ) : null}

          <div className="space-y-8">
            <div>
              <label htmlFor={`${formId}-name`} className={labelClass}>
                Naam
              </label>
              <input
                id={`${formId}-name`}
                type="text"
                autoComplete="name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={
                  errors.name ? `${formId}-name-error` : undefined
                }
                className={inputClass}
                {...register("name")}
              />
              {errors.name ? (
                <p id={`${formId}-name-error`} className={errorClass}>
                  {errors.name.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-email`} className={labelClass}>
                E-mailadres
              </label>
              <input
                id={`${formId}-email`}
                type="email"
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? `${formId}-email-error` : undefined
                }
                className={inputClass}
                {...register("email")}
              />
              {errors.email ? (
                <p id={`${formId}-email-error`} className={errorClass}>
                  {errors.email.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-phone`} className={labelClass}>
                Telefoonnummer
              </label>
              <input
                id={`${formId}-phone`}
                type="tel"
                autoComplete="tel"
                placeholder="+31 6 ..."
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={
                  errors.phone ? `${formId}-phone-error` : undefined
                }
                className={inputClass}
                {...register("phone")}
              />
              {errors.phone ? (
                <p id={`${formId}-phone-error`} className={errorClass}>
                  {errors.phone.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-linkedin`} className={labelClass}>
                LinkedIn-profiel (optioneel)
              </label>
              <input
                id={`${formId}-linkedin`}
                type="text"
                inputMode="url"
                autoComplete="url"
                placeholder="linkedin.com/in/..."
                aria-invalid={Boolean(errors.linkedin)}
                aria-describedby={
                  errors.linkedin ? `${formId}-linkedin-error` : undefined
                }
                className={inputClass}
                {...register("linkedin")}
              />
              {errors.linkedin ? (
                <p id={`${formId}-linkedin-error`} className={errorClass}>
                  {errors.linkedin.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor={`${formId}-cv`} className={labelClass}>
                CV
              </label>
              <input
                id={`${formId}-cv`}
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                aria-invalid={Boolean(errors.cv)}
                aria-describedby={
                  errors.cv ? `${formId}-cv-error` : `${formId}-cv-hint`
                }
                className={`${inputClass} file:mr-4 file:rounded-full file:border-0 file:bg-foreground file:px-4 file:py-2 file:text-sm file:font-medium file:text-background`}
                {...register("cv")}
              />
              <p
                id={`${formId}-cv-hint`}
                className="mt-2 text-xs leading-[1.5] text-foreground-muted"
              >
                PDF, DOC of DOCX, maximaal 5 MB.
              </p>
              {errors.cv ? (
                <p id={`${formId}-cv-error`} className={errorClass}>
                  {errors.cv.message}
                </p>
              ) : null}
            </div>

            <div>
              <label
                htmlFor={`${formId}-gdpr`}
                className="flex items-start gap-3 text-[15px] leading-[1.5] text-foreground"
              >
                <input
                  id={`${formId}-gdpr`}
                  type="checkbox"
                  className="mt-1 size-4 shrink-0 accent-foreground"
                  aria-invalid={Boolean(errors.gdprConsent)}
                  aria-describedby={
                    errors.gdprConsent ? `${formId}-gdpr-error` : undefined
                  }
                  {...register("gdprConsent")}
                />
                <span>
                  Ik geef toestemming om mijn gegevens maximaal 2 jaar te
                  bewaren voor werving en selectie.{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-2"
                  >
                    Privacyverklaring
                  </Link>
                </span>
              </label>
              {errors.gdprConsent ? (
                <p id={`${formId}-gdpr-error`} className={errorClass}>
                  {errors.gdprConsent.message}
                </p>
              ) : null}
            </div>
          </div>

          <input type="hidden" name="vacancy" value={vacatureTitle} />
          <input
            type="hidden"
            name="page"
            ref={(node) => {
              if (node && typeof window !== "undefined") {
                node.value = `${window.location.pathname}${window.location.search}`;
              }
            }}
          />
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: "none" }}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-10 inline-flex rounded-full bg-foreground px-8 py-4 text-[15px] font-medium leading-none text-background transition-[transform,box-shadow] duration-[240ms] ease-flatwhite hover:scale-[1.02] hover:shadow-[0_0_0_2px_rgba(88,125,254,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:scale-100 disabled:hover:shadow-none"
          >
            {isSubmitting ? "Versturen..." : "Verstuur sollicitatie →"}
          </button>
        </form>
      </div>
    </>
  );
}

async function readApplyResponse(response: Response): Promise<ApplyResponse | null> {
  try {
    return (await response.json()) as ApplyResponse;
  } catch {
    return null;
  }
}
