import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useRef } from "react";

const Hero = () => {

  const slides = [
    {
      title: "ULTRAVELOCIDADE",
      subtitle: "de verdade",
      description: "Para você assistir, jogar, trabalhar e navegar com potência máxima — sem travar, sem cair, sem limite.",
      cta: "SEJA FAST!",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      badge: "Velocidade Até 1GB"
    },
    {
      title: "CONEXÃO",
      subtitle: "de verdade",
      description: "Conexão de verdade é aquela que funciona quando você mais precisa. Rápida, estável e sem enrolação.",
      cta: "Ver Planos",
      image: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      badge: "100% Fibra Ótica"
    },
    {
      title: "STREAMING",
      subtitle: "sem travar",
      description: "Assista ao que você ama com ultravelocidade, estabilidade real e zero interrupção.",
      cta: "Conhecer Benefícios",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
      badge: "Sem Buffering"
    }
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <Carousel
        className="w-full h-screen"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-screen flex items-center justify-center">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className="absolute inset-0 bg-black/50" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-float" style={{ animationDelay: '0s' }} />
                  <div className="absolute top-40 right-20 w-3 h-3 bg-brand-blue-light rounded-full animate-float" style={{ animationDelay: '2s' }} />
                  <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-float" style={{ animationDelay: '4s' }} />
                  <div className="absolute bottom-20 right-1/3 w-2.5 h-2.5 bg-brand-blue-light rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>

                {/* Content */}
                <div className="relative z-10 container mx-auto px-4 py-20 text-center">
                  <div className="max-w-4xl mx-auto animate-fade-in-up">
                    {/* Badge */}
                    <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2">
                      <Zap className="w-4 h-4 mr-2" />
                      {slide.badge}
                    </Badge>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                      <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                      <br />
                      {slide.subtitle}
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-6 mb-10">
                      <div className="flex items-center space-x-2 text-white">
                        <Zap className="w-5 h-5 text-primary" />
                        <span>Velocidade Garantida</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <Shield className="w-5 h-5 text-primary" />
                        <span>100% Fibra Ótica</span>
                      </div>
                      <div className="flex items-center space-x-2 text-white">
                        <Clock className="w-5 h-5 text-primary" />
                        <span>Suporte 24/7</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow text-lg px-8 py-4"
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 text-lg px-8 py-4"
                      >
                        Teste de Velocidade
                      </Button>
                    </div>

                    {/* Trust Signals */}
                    <div className="mt-12 text-center">
                      <p className="text-sm text-gray-300 mb-4">
                        Mais de 8.000 clientes satisfeitos no Vale do Aço
                      </p>
                      <div className="flex justify-center items-center space-x-2">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-xs text-yellow-900">★</span>
                          </div>
                        ))}
                        <span className="text-sm text-white ml-2">4.9/5 Avaliação</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
        <CarouselNext className="right-4 bg-white/20 border-white/30 text-white hover:bg-white/30" />
      </Carousel>
    </section>
  );
};

export default Hero;