import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, ShoppingBag, Heart, GraduationCap, Sparkles, Star } from "lucide-react";

const ClubeCerto = () => {
  const benefits = [
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Descontos exclusivos",
      description: "Em lojas, serviços e estabelecimentos parceiros",
      image: "/imgs/clube_certo/descontos_exclusivos.png"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Saúde e bem-estar",
      description: "Vantagens em saúde, educação, estética e lazer",
      image: "/imgs/clube_certo/saude-bemestar.png"
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Ofertas especiais",
      description: "Ofertas exclusivas direto no aplicativo",
      image: "/imgs/clube_certo/ofertas_especiais.png"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Acesso antecipado",
      description: "Novidades antecipadas e condições especiais",
      image: "/imgs/clube_certo/acesso_antecipado.png"
    }
  ];

  return (
    <section id="clube-certo" className="py-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.08),transparent_50%)]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-2 text-base">
            <Sparkles className="w-4 h-4 mr-2" />
            Benefícios Exclusivos
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Clube Certo
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Benefícios reais para quem é cliente Fast Fibra
          </p>
          
          <p className="text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">
            Aqui, conexão de qualidade vem acompanhada de vantagens exclusivas. 
            Ao ser assinante Fast Fibra, você passa a fazer parte do Clube Certo — 
            um programa de benefícios pensado para valorizar o seu dia a dia.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group bg-white border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in-up overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="relative overflow-hidden">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-[150px] object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                  style={{ width: '320px', maxWidth: '100%' }}
                />
              </div>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/10 to-brand-blue-light/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 -mt-8 relative z-10 bg-white shadow-lg">
                  <div className="text-primary">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Box */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/5 via-white to-brand-blue-light/5 border-2 border-primary/20 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-2xl" />
            <CardContent className="p-8 text-center relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Gift className="w-8 h-8 text-primary" />
                <span className="text-2xl font-bold text-gray-900">
                  E o melhor: sem custo adicional
                </span>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                É só ser cliente Fast Fibra e aproveitar!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8 py-4"
                >
                  SEJA FAST!
                </Button>
                <p className="text-sm text-gray-500">
                  *Consultar planos
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClubeCerto;