import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export const INSTAGRAM = "https://www.instagram.com/rbadesign_";

const nav = [
  { to: "/projetos", label: "Projetos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/sobre", label: "Sobre" },
  { to: "/contato", label: "Contato" },
] as const;

export function Header({ overlay = false }: { overlay?: boolean }) {
  return (
    <header className={`${overlay ? "absolute text-ink-foreground" : "relative text-foreground border-b"} inset-x-0 top-0 z-20`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-2xl tracking-wide">
          RBA<span className="text-accent">Design</span>
        </Link>
        <nav className="hidden gap-10 text-xs uppercase tracking-[0.25em] md:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="opacity-80 transition hover:opacity-100" activeProps={{ className: "opacity-100 text-accent" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link to="/contato" className="border border-current px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition hover:bg-accent hover:border-accent hover:text-accent-foreground">
          Agende
        </Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">RBA<span className="text-accent">Design</span></p>
          <p className="mt-2 font-display text-lg text-accent">Raphael Bortoluzzi Assayag</p>
          <p className="mt-4 max-w-xs text-sm opacity-70">Arquitetura e design de interiores de alto padrão em Florianópolis e região.</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-4">Atendimento</p>
          <p>Florianópolis · Jurerê · Santo Antônio de Lisboa · Palhoça · São José · Balneário Camboriú</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-4">Contato</p>
          <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="block opacity-80 hover:opacity-100">Instagram @rbadesign_</a>
          <Link to="/contato" className="mt-2 block opacity-80 hover:opacity-100">Solicitar orçamento</Link>
        </div>
      </div>
      <p className="border-t border-ink-foreground/10 py-6 text-center text-xs opacity-50">© {new Date().getFullYear()} RBADesign — Arquitetura & Interiores</p>
    </footer>
  );
}

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-6 text-5xl md:text-7xl">{title}</h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">{text}</p>
    </section>
  );
}

export function seo(title: string, description: string, path: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
