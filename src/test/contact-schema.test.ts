import { describe, expect, it } from "vitest";

import { parseContact, TIPOS_PROJETO } from "@/lib/contact-schema";

const valid = {
  nome: "Maria Souza",
  telefone: "(48) 99999-1234",
  email: "Maria@Exemplo.com.br",
  tipo: "Design de interiores",
  mensagem: "Apartamento em Jurerê, 180m2.",
};

describe("contact form validation", () => {
  it("accepts a complete request and normalizes the e-mail to lowercase", () => {
    const result = parseContact(valid);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.email).toBe("maria@exemplo.com.br");
      expect(result.data.tipo).toBe("Design de interiores");
    }
  });

  it("rejects a name shorter than two characters", () => {
    expect(parseContact({ ...valid, nome: "M" }).success).toBe(false);
  });

  it("rejects a missing WhatsApp", () => {
    expect(parseContact({ ...valid, telefone: "" }).success).toBe(false);
  });

  it("rejects an e-mail without an @", () => {
    expect(parseContact({ ...valid, email: "maria.exemplo" }).success).toBe(false);
  });

  it("accepts only the three project types the form offers", () => {
    expect(TIPOS_PROJETO).toEqual([
      "Arquitetura residencial",
      "Design de interiores",
      "Projeto comercial",
    ]);
    expect(parseContact({ ...valid, tipo: "Reforma de garagem" }).success).toBe(false);
  });

  it("rejects a message longer than 2000 characters", () => {
    expect(parseContact({ ...valid, mensagem: "a".repeat(2001) }).success).toBe(false);
  });

  it("allows an empty message", () => {
    const result = parseContact({ ...valid, mensagem: "" });
    expect(result.success).toBe(true);
  });
});
