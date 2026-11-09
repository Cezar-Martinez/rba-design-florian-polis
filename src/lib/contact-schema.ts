import { z } from "zod";

export const TIPOS_PROJETO = [
  "Arquitetura residencial",
  "Design de interiores",
  "Projeto comercial",
] as const;

export const contactSchema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  telefone: z
    .string()
    .trim()
    .min(8, "Informe um WhatsApp com DDD")
    .max(30)
    .regex(/^[0-9()+\-\s]+$/, "Telefone inválido"),
  email: z.string().trim().toLowerCase().email("E-mail inválido").max(255),
  tipo: z.enum(TIPOS_PROJETO, { message: "Tipo de projeto inválido" }),
  mensagem: z.string().trim().max(2000, "Mensagem muito longa").default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;

export function parseContact(input: unknown) {
  return contactSchema.safeParse(input);
}
