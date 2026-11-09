import { createServerFn } from "@tanstack/react-start";

import { parseContact } from "./contact-schema";

// Minimum gap between two submissions from the same e-mail address.
const COOLDOWN_MS = 2 * 60 * 1000;

export type ContactResult =
  | { ok: true }
  | { ok: false; error: "invalid" | "too_soon" | "save_failed" };

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => input)
  .handler(async ({ data }): Promise<ContactResult> => {
    const parsed = parseContact(data);
    if (!parsed.success) return { ok: false, error: "invalid" };

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    const since = new Date(Date.now() - COOLDOWN_MS).toISOString();
    const { count } = await supabaseAdmin
      .from("contact_submissions")
      .select("id", { count: "exact", head: true })
      .eq("email", parsed.data.email)
      .gte("created_at", since);

    if (count && count > 0) return { ok: false, error: "too_soon" };

    const { error } = await supabaseAdmin.from("contact_submissions").insert({
      nome: parsed.data.nome,
      telefone: parsed.data.telefone,
      email: parsed.data.email,
      tipo_projeto: parsed.data.tipo,
      mensagem: parsed.data.mensagem,
    });

    if (error) {
      console.error("[contact] failed to store submission:", error.message);
      return { ok: false, error: "save_failed" };
    }

    return { ok: true };
  });
