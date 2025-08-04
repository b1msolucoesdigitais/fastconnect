import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Wifi, Users } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      name: "Fast 200MB",
      speed: "200",
      price: "R$ 79,90",
      description: "Ideal para casa",
      features: [
        "Download até 200MB",
        "Upload até 100MB", 
        "Wi-Fi grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      icon: <Wifi className="w-6 h-6" />,
      popular: false
    },
    {
      name: "Fast 500MB",
      speed: "500", 
      price: "R$ 119,90",
      description: "Para toda família",
      features: [
        "Download até 500MB",
        "Upload até 250MB",
        "Wi-Fi grátis",
        "Suporte 24h", 
        "Instalação grátis",
        "Netflix incluso"
      ],
      icon: <Users className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Fast 1GB",
      speed: "1000",
      price: "R$ 159,90", 
      description: "Ultra performance",
      features: [
        "Download até 1GB",
        "Upload até 500MB",
        "Wi-Fi 6 grátis",
        "Suporte prioritário 24h",
        "Instalação grátis",
        "Netflix + Prime Video"
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: false
    }
  ];

  return (
    <section id="planos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            Escolha seu{" "}
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              plano ideal
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Os melhores planos, os maiores benefícios e a internet impecável
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative group transition-all duration-300 hover:shadow-2xl ${
                plan.popular 
                  ? 'border-2 border-primary shadow-lg scale-105' 
                  : 'border border-gray-200 hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1">
                  Mais Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-primary to-brand-blue-light text-white' 
                    : 'bg-gradient-to-br from-primary/10 to-brand-blue-light/10 text-primary'
                }`}>
                  {plan.icon}
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </CardTitle>
                
                <p className="text-gray-600 mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                
                <div className="text-center">
                  <span className="text-3xl font-bold text-primary">{plan.speed}MB</span>
                  <p className="text-sm text-gray-600">de velocidade</p>
                </div>
              </CardHeader>
              
              <CardContent className="pt-4">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary'
                      : 'bg-gray-900 hover:bg-gray-800'
                  } transition-all duration-300`}
                  size="lg"
                >
                  Assinar Agora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Todos os planos incluem Clube Certo e aplicativo Fast Fibra
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Ver todos os benefícios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Plans;