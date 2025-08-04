import { Card, CardContent } from "@/components/ui/card";
import speedIcon from "@/assets/speed-icon.png";
import supportIcon from "@/assets/support-icon.png";
import reliabilityIcon from "@/assets/reliability-icon.png";

const Features = () => {
  const features = [
    {
      icon: speedIcon,
      title: "Velocidade Extrema",
      description: "Navegue, jogue e assista vídeos sem travamentos com nossa conexão de fibra ótica até 1GB.",
      stats: "Até 1GB"
    },
    {
      icon: reliabilityIcon,
      title: "99.9% de Disponibilidade",
      description: "Conexão estável e confiável 24 horas por dia, 7 dias por semana, com redundância total.",
      stats: "99.9% Uptime"
    },
    {
      icon: supportIcon,
      title: "Suporte Especializado",
      description: "Equipe técnica qualificada disponível 24/7 para resolver qualquer questão rapidamente.",
      stats: "24/7 Suporte"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Por Que Escolher a{" "}
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Fast Connect
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência em internet banda larga com tecnologia de ponta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in-up"
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
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-sm text-muted-foreground">Clientes Ativos</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">99.9%</div>
              <div className="text-sm text-muted-foreground">Disponibilidade</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">1GB</div>
              <div className="text-sm text-muted-foreground">Velocidade Máxima</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte Técnico</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;