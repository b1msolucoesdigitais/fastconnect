import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Básico",
      speed: "100 MB",
      price: "49,90",
      originalPrice: "69,90",
      features: [
        "100 MB de velocidade",
        "WiFi grátis incluso",
        "Suporte técnico",
        "Instalação gratuita"
      ],
      popular: false,
      color: "border-border"
    },
    {
      name: "Família",
      speed: "300 MB",
      price: "79,90",
      originalPrice: "99,90",
      features: [
        "300 MB de velocidade",
        "WiFi 5G incluso",
        "Suporte prioritário",
        "Instalação gratuita",
        "Roteador premium",
        "Netflix por 6 meses"
      ],
      popular: true,
      color: "border-primary shadow-lg shadow-primary/20"
    },
    {
      name: "Ultra",
      speed: "600 MB",
      price: "129,90",
      originalPrice: "159,90",
      features: [
        "600 MB de velocidade",
        "WiFi 6 mesh incluso",
        "Suporte VIP 24/7",
        "Instalação gratuita",
        "Roteador mesh premium",
        "Netflix + Amazon Prime",
        "IP fixo gratuito"
      ],
      popular: false,
      color: "border-border"
    },
    {
      name: "Giga",
      speed: "1 GB",
      price: "199,90",
      originalPrice: "249,90",
      features: [
        "1 GB de velocidade",
        "WiFi 6E mesh premium",
        "Suporte dedicado 24/7",
        "Instalação express",
        "Sistema mesh completo",
        "Todos os streamings",
        "IP fixo + VPN",
        "Backup 4G"
      ],
      popular: false,
      color: "border-brand-blue-light"
    }
  ];

  return (
    <section id="planos" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Escolha o{" "}
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Plano Ideal
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Planos flexíveis para todas as necessidades, com fibra ótica e tecnologia de ponta
          </p>
          
          {/* Promotional Banner */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary/20 to-brand-blue-light/20 border border-primary/30 rounded-full px-6 py-3 mb-8">
            <Star className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Promoção: 3 meses com 50% de desconto
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group hover:scale-105 transition-all duration-300 ${plan.color} ${
                plan.popular ? 'bg-gradient-to-b from-primary/5 to-brand-blue-light/5' : 'bg-card/50 backdrop-blur-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-brand-blue-light text-primary-foreground px-4 py-1 shadow-lg">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-bold text-foreground">
                  {plan.name}
                </CardTitle>
                <div className="space-y-2">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 text-primary" />
                    <span className="text-2xl font-bold text-primary">{plan.speed}</span>
                  </div>
                  <div className="space-y-1">
                    {plan.originalPrice && (
                      <div className="text-sm text-muted-foreground line-through">
                        R$ {plan.originalPrice}/mês
                      </div>
                    )}
                    <div className="text-3xl font-bold text-foreground">
                      R$ <span className="text-primary">{plan.price}</span>
                      <span className="text-lg text-muted-foreground">/mês</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary shadow-lg' 
                      : 'bg-secondary hover:bg-secondary/80'
                  } transition-all duration-300`}
                  variant={plan.popular ? "default" : "secondary"}
                >
                  Assinar Agora
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Instalação gratuita • Sem fidelidade
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Todos os planos incluem WiFi grátis, suporte técnico e garantia de velocidade
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center space-x-1 text-primary">
              <Check className="w-4 h-4" />
              <span>Sem taxa de instalação</span>
            </span>
            <span className="flex items-center space-x-1 text-primary">
              <Check className="w-4 h-4" />
              <span>Sem fidelidade</span>
            </span>
            <span className="flex items-center space-x-1 text-primary">
              <Check className="w-4 h-4" />
              <span>Garantia de velocidade</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;