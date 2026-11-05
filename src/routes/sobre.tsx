import { createFileRoute } from "@tanstack/react-router";
import facade from "@/assets/facade.jpg";
import { Page, PageIntro, seo } from "@/components/site";

export const Route = createFileRoute("/sobre")({
  head: () => seo("Sobre a RBADesign | Arquiteto Raphael Bortoluzzi Assayag", "Conheça a RBADesign, escritório de arquitetura e interiores de alto padrão liderado por Raphael Bortoluzzi Assayag em Florianópolis.", "/sobre"),
  component: Sobre,
});

const values = ["Atendimento exclusivo e próximo", "Transparência em prazos e investimentos", "Materiais nobres e fornecedores de confiança", "Projetos atemporais, pensados para durar"];

function Sobre() {
  return (
    <Page>
      <PageIntro eyebrow="Quem somos" title="Sobre a RBADesign" text="Arquitetura e interiores com assinatura autoral, criados para o estilo de vida da Ilha." />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 pb-28 md:grid-cols-2 md:items-center">
        <img src={facade} alt="Projeto residencial RBADesign em Florianópolis" loading="lazy" width={1280} height={960} className="h-[520px] w-full object-cover" />
        <div>
          <p className="eyebrow">Raphael Bortoluzzi Assayag</p>
          <h2 className="mt-6 text-4xl">Cada projeto começa por você.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            À frente da RBADesign, Raphael conduz cada projeto de forma pessoal — da primeira conversa à entrega. O escritório nasceu em Florianópolis com o propósito de criar ambientes sofisticados, acolhedores e integrados à paisagem.
          </p>
          <ul className="mt-10 space-y-4">
            {values.map((v) => (
              <li key={v} className="flex gap-4 border-b pb-4"><span className="text-accent">—</span>{v}</li>
            ))}
          </ul>
        </div>
      </section>
    </Page>
  );
}
