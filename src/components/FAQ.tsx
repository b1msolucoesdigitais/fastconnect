import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const FAQ = () => {
  const items = [
    {
      q: "Qual a diferença entre os planos?",
      a: "A velocidade e os benefícios inclusos variam conforme o plano. Todos são fibra ótica e incluem suporte 24/7.",
    },
    {
      q: "Tem taxa de instalação?",
      a: "Instalação é grátis em campanhas vigentes. Confirme a elegibilidade ao assinar.",
    },
    {
      q: "Qual o prazo de instalação?",
      a: "Em média 24 a 48h após confirmação, dependendo da disponibilidade na região.",
    },
    {
      q: "Posso fazer portabilidade do meu número fixo?",
      a: "Sim, nossa equipe orienta todo o processo de portabilidade quando aplicável.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Dúvidas Frequentes</Badge>
          <h2 className="text-3xl md:text-5xl font-bold">Tudo o que você precisa saber</h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {items.map((it, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left">{it.q}</AccordionTrigger>
                <AccordionContent>{it.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;


