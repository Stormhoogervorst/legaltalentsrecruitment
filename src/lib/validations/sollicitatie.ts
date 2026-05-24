import { z } from "zod";

export const acceptedCvTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const maxCvSize = 5 * 1024 * 1024;

const optionalUrl = z
  .string()
  .trim()
  .optional()
  .refine((value) => !value || z.url().safeParse(value).success, {
    message: "Vul een geldige URL in.",
  });

export const sollicitatieSchema = z.object({
  name: z.string().trim().min(2, "Vul minimaal 2 tekens in."),
  email: z.string().trim().email("Vul een geldig e-mailadres in."),
  phone: z.string().trim().min(7, "Vul minimaal 7 tekens in."),
  linkedin: optionalUrl,
  cv: z.instanceof(File).optional(),
  vacatureSlug: z.string().trim().min(1, "Vacature ontbreekt."),
  vacatureTitle: z.string().trim().min(1, "Vacaturetitel ontbreekt."),
  honeypot: z.string().optional(),
});

export const sollicitatieServerSchema = sollicitatieSchema.omit({ cv: true });

export type SollicitatieFormValues = z.input<typeof sollicitatieSchema>;
export type SollicitatieValues = z.infer<typeof sollicitatieServerSchema>;
