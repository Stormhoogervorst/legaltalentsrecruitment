import { z } from "zod";
import {
  CV_REQUIRED,
  CV_TOO_LARGE,
  CV_WRONG_TYPE,
  GDPR_REQUIRED,
  MAX_CV_BYTES,
} from "@/lib/apply/constants";
import { clientCvError } from "@/lib/apply/cv";
import { isHttpUrl, normalizeLinkedIn } from "@/lib/apply/linkedin";

const linkedinField = z
  .string()
  .trim()
  .max(500, "Dit veld is te lang.")
  .refine((value) => !value || isHttpUrl(normalizeLinkedIn(value)), {
    message: "Vul een geldige URL in.",
  });

export const sollicitatieFieldsSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Vul minimaal 2 tekens in.")
    .max(200, "Dit veld is te lang."),
  email: z
    .string()
    .trim()
    .max(320, "Dit veld is te lang.")
    .email("Vul een geldig e-mailadres in."),
  phone: z
    .string()
    .trim()
    .min(1, "Vul een telefoonnummer in.")
    .max(40, "Dit veld is te lang.")
    .refine((value) => /\d/.test(value), "Vul een telefoonnummer in."),
  linkedin: linkedinField,
  vacancy: z
    .string()
    .trim()
    .min(1, "Vacature ontbreekt.")
    .max(300, "Dit veld is te lang."),
  page: z
    .string()
    .trim()
    .min(1, "Pagina ontbreekt.")
    .max(500, "Dit veld is te lang."),
  gdprConsent: z.boolean().refine((value) => value === true, {
    message: GDPR_REQUIRED,
  }),
});

const cvField = z
  .custom<FileList>(
    (value) => typeof FileList !== "undefined" && value instanceof FileList,
    { message: CV_REQUIRED },
  )
  .refine((files) => files.length > 0, CV_REQUIRED)
  .refine((files) => {
    const file = files[0];
    return Boolean(file) && clientCvError(file) !== CV_WRONG_TYPE;
  }, CV_WRONG_TYPE)
  .refine((files) => {
    const file = files[0];
    return Boolean(file) && file.size <= MAX_CV_BYTES;
  }, CV_TOO_LARGE);

export const sollicitatieSchema = sollicitatieFieldsSchema
  .omit({ page: true })
  .extend({
    cv: cvField,
    honeypot: z.string().optional(),
  });

export const sollicitatieServerSchema = sollicitatieFieldsSchema;

export type SollicitatieFormValues = z.input<typeof sollicitatieSchema>;
export type SollicitatieValues = z.infer<typeof sollicitatieServerSchema>;
