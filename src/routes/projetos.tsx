import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import kitchen from "@/assets/kitchen.jpg";
import bedroom from "@/assets/bedroom.jpg";
import facade from "@/assets/facade.jpg";
import { Page, PageIntro, seo, INSTAGRAM } from "@/components/site";

export const Route = createFileRoute("/projetos")({
  head: () => seo("Projetos | RBADesign Arquitetura Florianópolis", "Portfólio de projetos residenciais de alto padrão da RBADesign: casas, apartamentos e interiores em Florianópolis e região.", "/projetos"),
  component: Projetos,
});

const items = [
  { img: facade, t: "Residência Mirante", l: "Cacupé, Florianópolis", w: 1280, h: 960 },
  { img: hero, t: "Casa Horizonte", l: "Jurerê Internacional", w: 1920, h: 1088 },
  { img: kitchen, t: "Apartamento Travertino", l: "Beira-Mar Norte", w: 1024, h: 1280 },
  { img: bedroom, t: "Suíte Linho", l: "Santo Antônio de Lisboa", w: 1024, h: 1280 },
];

function Projetos() {
  return (
    <Page>
      <PageIntro eyebrow="Portfólio" title="Projetos" text="Uma seleção de residências e interiores assinados pela RBADesign." />
      <section className="mx-auto grid max-w-7xl gap-x-6 gap-y-16 px-6 pb-24 md:grid-cols-2">
        {items.map((p) => (
          <figure key={p.t} className="group">
            <div className="overflow-hidden">
              <img src={p.img} alt={`${p.t} — projeto RBADesign em ${p.l}`} loading="lazy" width={p.w} height={p.h} className="h-[560px] w-full object-cover transition duration-700 group-hover:scale-105" />
            </div>
            <figcaption className="mt-5 flex items-baseline justify-between">
              <h2 className="text-3xl">{p.t}</h2>
              <span className="text-sm text-muted-foreground">{p.l}</span>
            </figcaption>
          </figure>
        ))}
      </section>
      <p className="pb-24 text-center">
        <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" className="border-b border-accent pb-1 text-sm uppercase tracking-[0.2em]">Veja mais no Instagram</a>
      </p>
    </Page>
  );
}
