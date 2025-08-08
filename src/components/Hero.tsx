import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, ShieldCheck, Headphones, MapPin, Gauge, Wifi } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/20 px-3 py-1.5 rounded-full mb-6 text-sm">
              <Zap className="w-4 h-4" /> Fibra 100% óptica
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900">
              Internet rápida, estável e <span className="text-brand-blue">sem surpresa</span> no fim do mês
            </h1>

            <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-xl">
              Chega de travar na hora do jogo, da reunião ou do streaming. A FAST CONNECT entrega performance de verdade com suporte humano e instalações ágeis.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#planos">
                <Button size="lg" className="px-6">
                  Ver planos
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </a>
              <a href="#cobertura">
                <Button variant="outline" size="lg" className="px-6">
                  Checar cobertura
                  <MapPin className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Anti-queda e baixa latência</div>
              <div className="flex items-center gap-2"><Headphones className="w-4 h-4 text-primary" /> Suporte 7 dias/semana</div>
            </div>
          </div>

          {/* Right: image card */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5 bg-white">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                  alt="Família conectada"
                  className="w-full h-[340px] md:h-[420px] object-cover"
                />
                {/* Pills */}
                <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4 px-4 pb-2">
                  <div className="px-5 py-2 rounded-xl bg-white shadow border text-sm text-gray-700">Ping 4 ms</div>
                  <div className="px-5 py-2 rounded-xl bg-white shadow border text-sm text-gray-700">+900 Mbps</div>
                  <div className="px-5 py-2 rounded-xl bg-white shadow border text-sm text-gray-700">Wi‑Fi 6</div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 blur-3xl opacity-50 bg-[radial-gradient(circle_at_70%_30%,hsla(197,100%,51%,0.25),transparent_45%)]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;