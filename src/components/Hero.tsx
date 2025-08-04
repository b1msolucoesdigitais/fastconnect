import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-background/70" />
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
            Velocidade Até 1GB
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              ULTRAVELOCIDADE
            </span>
            <br />
            de verdade
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Para você assistir, jogar, trabalhar e navegar com potência máxima — sem travar, sem cair, sem limite. 
            <strong className="text-primary">SEJA FAST!</strong>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-foreground">
              <Zap className="w-5 h-5 text-primary" />
              <span>Velocidade Garantida</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>100% Fibra Ótica</span>
            </div>
            <div className="flex items-center space-x-2 text-foreground">
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
              Ver Planos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-4"
            >
              Teste de Velocidade
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Mais de 50.000 clientes satisfeitos
            </p>
            <div className="flex justify-center items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-xs text-yellow-900">★</span>
                </div>
              ))}
              <span className="text-sm text-foreground ml-2">4.9/5 Avaliação</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;