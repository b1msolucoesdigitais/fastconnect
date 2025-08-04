import { Card, CardContent } from "@/components/ui/card";
import speedIcon from "@/assets/speed-icon.png";
import supportIcon from "@/assets/support-icon.png";
import reliabilityIcon from "@/assets/reliability-icon.png";

const Features = () => {
  const features = [
    {
      icon: speedIcon,
      title: "Ultra velocidade",
      description: "Rápida, estável e sem enrolação. É Fast na rede. É Fast com você.",
      stats: "Fibra 100%"
    },
    {
      icon: reliabilityIcon,
      title: "Conexão de verdade",
      description: "Conexão de verdade é aquela que funciona quando você mais precisa.",
      stats: "12 anos"
    },
    {
      icon: supportIcon,
      title: "Atendimento humanizado",
      description: "Oferecemos um atendimento humanizado, que valoriza cada cliente como único.",
      stats: "8K+ clientes"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
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
              className="group bg-white border border-gray-200 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-12 h-12 object-contain"
                    />
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