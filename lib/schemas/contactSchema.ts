import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Imię musi mieć minimum 2 znaki")
    .max(100, "Imię jest za długie"),
  phone: z
    .string()
    .min(9, "Numer telefonu musi mieć minimum 9 znaków")
    .max(20, "Numer telefonu jest za długi"),
  service: z.enum(["landing", "business", "pro", "other"]),
  message: z
    .string()
    .min(5, "Wiadomość musi mieć minimum 5 znaków")
    .max(2000, "Wiadomość jest za długa"),
  website: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
