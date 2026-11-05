import { createFileRoute } from "@tanstack/react-router";
import { Page, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/servicos")({
  head: () => seo("Serviços de Arquitetura e Interiores | RBADesign Florianópolis", "Projeto arquitetônico residencial, design de interiores, marcenaria, luminotécnico e acompanhamento de obra de alto padrão em Florianópolis.", "/servicos"),
  component: Servicos,
});

const services = [
  { t: "Projeto arquitetônico", d: "Casas e residências de alto padrão, do estudo de implantação ao projeto executivo e aprovação." },
  { t: "Design de interiores", d: "Apartamentos e casas com layout, revestimentos, mobiliário e decoração sob medida." },
  { t: "Marcenaria e detalhamento", d: "Peças exclusivas desenhadas para cada ambiente, com detalhamento técnico preciso." },
  { t: "Projeto luminotécnico", d: "Iluminação que valoriza a arquitetura e cria atmosferas para cada momento." },
  { t: "Visualização 3D", d: "Imagens realistas para você enxergar o resultado antes da obra começar." },
  { t: "Acompanhamento de obra", d: "Gestão de fornecedores e visitas técnicas para garantir fidelidade ao projeto." },
];

function Servicos() {
  return (
    <Page>
      <PageIntro eyebrow="O que fazemos" title="Serviços" text="Soluções completas em arquitetura e interiores para quem busca exclusividade e tranquilidade." />
      <section className="mx-auto grid max-w-7xl gap-px bg-border px-0 pb-0 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={s.t} className="bg-background p-10">
            <span className="font-display text-4xl text-accent">{String(i + 1).padStart(2, "0")}</span>
            <h2 className="mt-4 text-3xl">{s.t}</h2>
            <p className="mt-3 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
      <div className="h-24" />
    </Page>
  );
}
