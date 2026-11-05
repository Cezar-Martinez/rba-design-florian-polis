import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";
import facade from "@/assets/facade.jpg";
import { Header, Footer, seo } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    ...seo(
      "RBADesign | Arquitetura e Design de Interiores Alto Padrão em Florianópolis",
      "Escritório de arquitetura e design de interiores de alto padrão em Florianópolis e região. Projetos residenciais e comerciais exclusivos, do conceito à entrega.",
      "/",
    ),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "InteriorDesigner",
          name: "RBADesign",
          description: "Arquitetura e design de interiores de alto padrão em Florianópolis e região.",
          areaServed: ["Florianópolis", "São José", "Palhoça", "Biguaçu", "Balneário Camboriú"],
          address: { "@type": "PostalAddress", addressLocality: "Florianópolis", addressRegion: "SC", addressCountry: "BR" },
          sameAs: ["https://www.instagram.com/rbadesign_"],
          priceRange: "$$$$",
        }),
      },
    ],
  }),
  component: Index,
});

const pillars = [
  { n: "01", t: "Escuta", d: "Entendemos sua rotina, seus desejos e a forma como você quer viver cada ambiente." },
  { n: "02", t: "Projeto", d: "Arquitetura, interiores, marcenaria e iluminação pensados em cada detalhe, com imagens 3D realistas." },
  { n: "03", t: "Execução", d: "Acompanhamento de obra e gestão de fornecedores até a entrega das chaves." },
];

function Index() {
  return (
    <div>
      <section className="relative h-screen min-h-[640px] overflow-hidden">
        <img src={hero} alt="Sala de estar de alto padrão com vista para o mar em Florianópolis" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-overlay absolute inset-0" />
        <Header overlay />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-24 text-ink-foreground">
          <p className="eyebrow fade-up">Arquitetura & Interiores · Florianópolis</p>
          <h1 className="fade-up mt-6 max-w-4xl text-5xl leading-[1.05] md:text-8xl">Espaços que traduzem quem você é.</h1>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <Link to="/contato" className="bg-accent px-8 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground transition hover:opacity-90">Solicitar orçamento</Link>
            <Link to="/projetos" className="border border-ink-foreground/60 px-8 py-4 text-xs uppercase tracking-[0.25em] transition hover:bg-ink-foreground hover:text-ink">Ver projetos</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">O escritório</p>
          <h2 className="mt-6 text-4xl md:text-6xl">Alto padrão, com alma e precisão.</h2>
        </div>
        <p className="text-lg leading-relaxed text-muted-foreground">
          A RBADesign cria residências, apartamentos e espaços comerciais exclusivos em Florianópolis e região. Unimos arquitetura contemporânea, materiais nobres e o clima único da Ilha para entregar ambientes atemporais, funcionais e feitos sob medida.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3">
        <img src={facade} alt="Casa contemporânea com piscina de borda infinita em Florianópolis" loading="lazy" width={1280} height={960} className="h-[520px] w-full object-cover md:col-span-2" />
        <img src={kitchen} alt="Cozinha de alto padrão com ilha em mármore e marcenaria ripada" loading="lazy" width={1024} height={1280} className="h-[520px] w-full object-cover" />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-28">
        <p className="eyebrow">Como trabalhamos</p>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.n} className="border-t pt-8">
              <span className="font-display text-5xl text-accent">{p.n}</span>
              <h3 className="mt-4 text-3xl">{p.t}</h3>
              <p className="mt-3 text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          <img src={bedroom} alt="Suíte master com cabeceira em bouclé e iluminação indireta" loading="lazy" width={1024} height={1280} className="h-full max-h-[640px] w-full object-cover" />
          <div className="flex flex-col justify-center px-8 py-20 md:px-16">
            <p className="eyebrow">Seu projeto</p>
            <h2 className="mt-6 text-4xl md:text-5xl">Vamos conversar sobre o seu próximo endereço?</h2>
            <p className="mt-6 opacity-70">Atendimento personalizado em Florianópolis, Jurerê, Santo Antônio de Lisboa, São José, Palhoça e litoral catarinense.</p>
            <Link to="/contato" className="mt-10 self-start bg-accent px-8 py-4 text-xs uppercase tracking-[0.25em] text-accent-foreground hover:opacity-90">Agendar reunião</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
