import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Juliana Costa",
      city: "Ipatinga/MG",
      text:
        "Nunca mais tive problemas com travamentos. Atendimento super rápido quando precisei.",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Marcelo Andrade",
      city: "Timóteo/MG",
      text:
        "Instalação no mesmo dia e velocidade entrega o que promete. Recomendo!",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop",
    },
    {
      name: "Aline Barbosa",
      city: "Coronel Fabriciano/MG",
      text:
        "Uso para trabalho e streaming. Conexão estável e sem quedas.",
      rating: 5,
      photo:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.1),transparent)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-brand-blue-light/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Quem é Fast
            </span>
            <br />
            recomenda.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Mais de 8.000 clientes satisfeitos no Vale do Aço
          </p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto relative z-10">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/10 backdrop-blur border-white/20 hover:border-primary/40 transition-colors group hover:bg-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary/60 transition-all"
                  />
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-gray-300">{t.city}</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-4">"{t.text}"</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-full px-6 py-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-gray-300">Conexão ativa</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm text-gray-300">4.9/5 avaliação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


