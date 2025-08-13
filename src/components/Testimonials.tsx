import { Card, CardContent } from "@/components/ui/card";
import { Star, Users, Award, Zap } from "lucide-react";

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
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-200 to-cyan-300 rounded-full opacity-20 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-10 blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 border border-blue-200 px-4 py-2 rounded-full mb-6">
            <Users className="w-4 h-4" />
            <span className="text-sm font-medium">Depoimentos Reais</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Quem é Fast
            </span>
            <br />
            <span className="text-gray-800">recomenda.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais de <span className="font-bold text-blue-600">8.000 clientes satisfeitos</span> no Vale do Aço
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((t, i) => (
            <Card key={i} className="bg-white/80 backdrop-blur border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="w-16 h-16 rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all"
                    />
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg text-gray-800">{t.name}</p>
                    <p className="text-sm text-blue-600 font-medium">{t.city}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur rounded-2xl px-8 py-6 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-semibold">Conexão ativa</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-semibold">4.9/5 avaliação</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-3">
              <Zap className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700 font-semibold">Suporte 24/7</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">8.000+</div>
            <div className="text-gray-600">Clientes Ativos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
            <div className="text-gray-600">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Avaliação</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;


