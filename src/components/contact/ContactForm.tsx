"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import {
  type FieldPath,
  type SubmitHandler,
  useForm,
  useWatch,
} from "react-hook-form";
import { submitContactForm } from "@/app/actions/contact";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border-0 border-b border-border-strong bg-transparent px-0 py-3 text-[16px] leading-[1.5] text-foreground outline-none transition-colors placeholder:text-foreground-muted focus:border-foreground";
const labelClass =
  "mb-2 block text-sm font-medium leading-[1.5] text-foreground-muted";
const errorClass = "mt-2 text-xs font-medium text-red-700";

const typeOptions = [
  { value: "kandidaat", label: "Kandidaat" },
  { value: "opdrachtgever", label: "Opdrachtgever" },
  { value: "anders", label: "Anders" },
] as const;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    setError,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      type: "kandidaat",
      message: "",
      honeypot: "",
      website: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedType = useWatch({ control, name: "type" });

  const onSubmit: SubmitHandler<ContactFormValues> = async (values) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const result = await submitContactForm({
      ...values,
      company: values.type === "opdrachtgever" ? values.company : "",
      honeypot: values.website,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitStatus("success");
      return;
    }

    if ("errors" in result && result.errors) {
      Object.entries(result.errors).forEach(([field, messages]) => {
        const message = messages?.[0];

        if (message) {
          setError(field as FieldPath<ContactFormValues>, { message });
        }
      });
    }

    setSubmitStatus("error");
  };

  if (submitStatus === "success") {
    return (
      <div className="rounded-[24px] bg-background-secondary p-8">
        <p className="display-md text-foreground">
          Bedankt — we nemen binnen 24 uur contact op.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {submitStatus === "error" ? (
        <div
          role="alert"
          className="rounded-[16px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700"
        >
          Er ging iets mis. Probeer opnieuw of mail direct naar{" "}
          <a href="mailto:storm@legal-talents.nl" className="underline">
            storm@legal-talents.nl
          </a>
        </div>
      ) : null}

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Naam
        </label>
        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          className={inputClass}
          {...register("name")}
        />
        {errors.name ? (
          <p id="contact-name-error" className={errorClass}>
            {errors.name.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          E-mail
        </label>
        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          className={inputClass}
          {...register("email")}
        />
        {errors.email ? (
          <p id="contact-email-error" className={errorClass}>
            {errors.email.message}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Telefoon
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "contact-phone-error" : undefined}
          className={inputClass}
          {...register("phone")}
        />
        {errors.phone ? (
          <p id="contact-phone-error" className={errorClass}>
            {errors.phone.message}
          </p>
        ) : null}
      </div>

      <fieldset>
        <legend className={labelClass}>Je bent...</legend>
        <div className="flex flex-wrap gap-3">
          {typeOptions.map((option) => (
            <label key={option.value} htmlFor={`contact-type-${option.value}`}>
              <input
                id={`contact-type-${option.value}`}
                type="radio"
                value={option.value}
                className="peer sr-only"
                {...register("type")}
              />
              <span
                className={cn(
                  "inline-flex cursor-pointer rounded-full border border-border-strong px-6 py-3 text-sm font-medium leading-none text-foreground transition-colors",
                  "peer-focus-visible:ring-2 peer-focus-visible:ring-foreground peer-focus-visible:ring-offset-2",
                  selectedType === option.value &&
                    "border-foreground bg-foreground text-background",
                )}
              >
                {option.label}
              </span>
            </label>
          ))}
        </div>
        {errors.type ? (
          <p id="contact-type-error" className={errorClass}>
            {errors.type.message}
          </p>
        ) : null}
      </fieldset>

      {selectedType === "opdrachtgever" ? (
        <div>
          <label htmlFor="contact-company" className={labelClass}>
            Bedrijf
          </label>
          <input
            id="contact-company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={
              errors.company ? "contact-company-error" : undefined
            }
            className={inputClass}
            {...register("company")}
          />
          {errors.company ? (
            <p id="contact-company-error" className={errorClass}>
              {errors.company.message}
            </p>
          ) : null}
        </div>
      ) : null}

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Bericht
        </label>
        <textarea
          id="contact-message"
          rows={4}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={
            errors.message ? "contact-message-error" : undefined
          }
          className={cn(inputClass, "resize-y")}
          {...register("message")}
        />
        {errors.message ? (
          <p id="contact-message-error" className={errorClass}>
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <input type="hidden" {...register("honeypot")} />
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ display: "none" }}
        {...register("website")}
      />

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded-full bg-foreground px-8 py-4 text-[15px] font-medium leading-none text-background transition-transform duration-300 ease-flatwhite hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:scale-100"
      >
        {isSubmitting ? "Versturen..." : "Bericht versturen →"}
      </button>
    </form>
  );
}
