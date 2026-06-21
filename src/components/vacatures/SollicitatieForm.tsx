"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type BaseSyntheticEvent, useId, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { SlashPill } from "@/components/home/primitives";
import {
  sollicitatieSchema,
  type SollicitatieFormValues,
} from "@/lib/validations/sollicitatie";
import { submitToWeb3Forms } from "@/lib/web3forms";

const inputClass =
  "w-full border-0 border-b border-[rgba(10,10,15,0.18)] bg-transparent px-0 py-3 text-[16px] leading-[1.5] text-foreground outline-none transition-colors placeholder:text-foreground-muted focus:border-accent";
const labelClass =
  "mb-2 block text-sm font-medium leading-[1.5] text-foreground-muted";
const errorClass = "mt-2 text-xs font-medium text-red-700";

type SollicitatieFormProps = {
  vacatureSlug: string;
  vacatureTitle: string;
};

export function SollicitatieForm({
  vacatureSlug,
  vacatureTitle,
}: SollicitatieFormProps) {
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
  } = useForm<SollicitatieFormValues>({
    resolver: zodResolver(sollicitatieSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      vacatureSlug,
      vacatureTitle,
      honeypot: "",
    },
  });

  const onSubmit: SubmitHandler<SollicitatieFormValues> = async (
    values,
    event?: BaseSyntheticEvent,
  ) => {
    const form = event?.currentTarget;
    const honeypot =
      (form instanceof HTMLFormElement
        ? new FormData(form).get("website")?.toString()
        : "") ||
      values.honeypot ||
      "";

    if (honeypot.trim()) {
      setSubmitStatus("success");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setServerError(null);

    const result = await submitToWeb3Forms({
      subject: `Nieuwe sollicitatie: ${vacatureTitle} — ${values.name}`,
      from_name: "Legal Talents Sollicitatie",
      name: values.name,
      email: values.email,
      phone: values.phone,
      linkedin: values.linkedin,
      vacatureSlug,
      vacatureTitle,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      return;
    }

    setServerError(
      "Er ging iets mis. Probeer opnieuw of mail direct naar storm@legal-talents.nl.",
    );
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
          We hebben je sollicitatie voor {vacatureTitle} ontvangen en nemen
          binnen enkele werkdagen contact met je op.
        </p>
      </div>
    );
  }

  return (
    <>
      <SlashPill>/ SOLLICITEREN</SlashPill>
      <h2 className="display-md mt-8">Solliciteer direct</h2>
      <p className="mt-6 max-w-[540px] text-[18px] leading-[1.5] text-foreground-secondary">
        Vul het formulier in. We reageren binnen 5 werkdagen — meestal sneller.
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
              {serverError ??
                "Er ging iets mis. Probeer opnieuw of mail direct naar storm@legal-talents.nl."}
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
                aria-describedby={errors.name ? `${formId}-name-error` : undefined}
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
                LinkedIn-profiel
              </label>
              <input
                id={`${formId}-linkedin`}
                type="url"
                autoComplete="url"
                placeholder="https://www.linkedin.com/in/..."
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
          </div>

          <input type="hidden" {...register("vacatureSlug")} />
          <input type="hidden" {...register("vacatureTitle")} />
          <input type="hidden" {...register("honeypot")} />
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
