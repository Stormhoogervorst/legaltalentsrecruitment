import { z } from "zod";

export const contactTypes = ["kandidaat", "opdrachtgever", "anders"] as const;

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Vul minimaal 2 tekens in."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  phone: z.string().trim().optional(),
  company: z.string().trim().optional(),
  type: z.enum(contactTypes, {
    error: "Kies wat van toepassing is.",
  }),
  message: z.string().trim().min(10, "Vul minimaal 10 tekens in."),
  honeypot: z.string().optional(),
  website: z.string().optional(),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormValues = z.infer<typeof contactFormSchema>;
