import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Page, PageIntro, seo, INSTAGRAM } from "@/components/site";

export const Route = createFileRoute("/contato")({
  head: () => seo("Contato e Orçamento | RBADesign Florianópolis", "Solicite um orçamento de projeto de arquitetura ou design de interiores de alto padrão em Florianópolis e região.", "/contato"),
  component: Contato,
});

const field = "w-full border-b bg-transparent py-3 outline-none transition focus:border-accent";

function Contato() {
  const [sent, setSent] = useState(false);
  return (
    <Page>
      <PageIntro eyebrow="Fale conosco" title="Vamos começar" text="Conte um pouco sobre o seu projeto. Retornamos em até 1 dia útil." />
      <section className="mx-auto grid max-w-6xl gap-16 px-6 pb-28 md:grid-cols-[2fr_1fr]">
        {sent ? (
          <p className="font-display text-3xl">Obrigado! Em breve entraremos em contato.</p>
        ) : (
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="grid gap-8 md:grid-cols-2">
            <input required name="nome" placeholder="Nome" aria-label="Nome" className={field} />
            <input required name="telefone" placeholder="WhatsApp" aria-label="WhatsApp" className={field} />
            <input required type="email" name="email" placeholder="E-mail" aria-label="E-mail" className={`${field} md:col-span-2`} />
            <select name="tipo" aria-label="Tipo de projeto" className={`${field} md:col-span-2`}>
              <option>Arquitetura residencial</option>
              <option>Design de interiores</option>
              <option>Projeto comercial</option>
            </select>
            <textarea name="mensagem" rows={4} placeholder="Conte sobre o seu projeto" aria-label="Mensagem" className={`${field} md:col-span-2`} />
            <button className="bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-accent md:col-span-2 md:justify-self-start">Enviar mensagem</button>
          </form>
        )}
        <aside className="space-y-8 text-sm">
          <div><p className="eyebrow mb-2">Instagram</p><a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="text-lg hover:text-accent">@rbadesign_</a></div>
          <div><p className="eyebrow mb-2">Região</p><p className="text-lg">Florianópolis e Grande Florianópolis, SC</p></div>
        </aside>
      </section>
    </Page>
  );
}
