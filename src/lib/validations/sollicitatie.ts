import { z } from "zod";

const linkedinUrl = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || z.url().safeParse(value).success, {
    message: "Vul een geldige URL in.",
  })
  .refine((value) => !value || value.toLowerCase().includes("linkedin.com"), {
    message: "Vul een geldige LinkedIn-URL in.",
  });

export const sollicitatieSchema = z.object({
  name: z.string().trim().min(2, "Vul minimaal 2 tekens in."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  phone: z.string().trim().min(7, "Vul minimaal 7 tekens in."),
  linkedin: linkedinUrl,
  vacatureSlug: z.string().trim().min(1, "Vacature ontbreekt."),
  vacatureTitle: z.string().trim().min(1, "Vacaturetitel ontbreekt."),
  honeypot: z.string().optional(),
});

export const sollicitatieServerSchema = sollicitatieSchema;

export type SollicitatieFormValues = z.input<typeof sollicitatieSchema>;
export type SollicitatieValues = z.infer<typeof sollicitatieServerSchema>;
