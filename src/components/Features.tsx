import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Headphones } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Ultra velocidade",
      description: "Rápida, estável e sem enrolação. É Fast na rede. É Fast com você.",
      stats: "Fibra 100%",
      image: "/imgs/ultravelocidade.png"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Conexão de verdade",
      description: "Conexão de verdade é aquela que funciona quando você mais precisa.",
      stats: "12 anos",
      image: "/imgs/conexaodeverdade.png"
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Atendimento humanizado",
      description: "Oferecemos um atendimento humanizado, que valoriza cada cliente como único.",
      stats: "8K+ clientes",
      image: "/imgs/atendimento.png"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.08),transparent_50%)]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            A nossa internet é a sua{" "}
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              escolha inteligente
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mais Segura. Mais Estável. Mais Rápida. Mais <strong className="text-primary">FAST!</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-semibold">
                    {feature.stats}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">8K+</div>
              <div className="text-sm text-gray-600">Clientes Ativos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-gray-600">Disponibilidade</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-sm text-gray-600">Anos de Mercado</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-gray-600">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;