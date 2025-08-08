import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, ArrowRight } from "lucide-react";

const PromoBanner = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative w-full h-[260px] md:h-[320px] lg:h-[360px]"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full container mx-auto px-4 flex items-center">
          <div className="max-w-3xl text-white animate-fade-in-up">
            <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
              <Gift className="w-4 h-4 mr-2" />
              Oferta por Tempo Limitado
            </Badge>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">
              Instalação grátis + 1ª mensalidade com desconto exclusivo
            </h3>
            <p className="mt-3 text-sm md:text-base text-gray-200 max-w-xl">
              Assine agora e tenha sua casa conectada com ultravelocidade. Promoção válida para planos selecionados.
            </p>
            <div className="mt-5">
              <Button size="lg" className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary">
                Quero aproveitar
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -right-24 -bottom-24 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute -right-8 bottom-6 w-40 h-40 bg-brand-blue-light/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default PromoBanner;


