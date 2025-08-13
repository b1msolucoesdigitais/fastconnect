import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Wifi, RefreshCw, Smartphone } from "lucide-react";

const Streaming = () => {
  const platforms = [
    { 
      name: "Netflix", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
    },
    { 
      name: "Prime Video", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Amazon_Prime_Video_logo.svg"
    },
    { 
      name: "Disney+", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Disney%2B_logo.svg"
    },
    { 
      name: "Max", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
    },
    { 
      name: "Globoplay", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Globoplay_logo.svg/2560px-Globoplay_logo.svg.png"
    },
    { 
      name: "Paramount+", 
      logo: "https://logodownload.org/wp-content/uploads/2021/03/paramount-plus-logo-1.png"
    },
    { 
      name: "YouTube Premium", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
    },
    { 
      name: "Deezer Premium", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg"
    }
  ];

  const benefits = [
    {
      icon: <RefreshCw className="w-6 h-6" />,
      text: "Troque de streaming todo mês sem custo adicional"
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      text: "Assista em todos os dispositivos simultaneamente"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      text: "Conexão estável para streaming sem interrupções"
    }
  ];

  return (
    <section id="streaming" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent)]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl" />
      
      {/* Background Image */}
      <div className="absolute inset-0 opacity-30">
        <img 
          src="/imgs/bg_streaming.png"
          alt="Streaming background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Streaming Premium</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Escolha seu streaming
            </span>
            <br />
            E troque quando quiser!
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Com a Fast Fibra, você tem acesso aos melhores streamings do mercado. 
            Escolha entre Netflix, Disney+, Prime Video, Max e muito mais. 
            A cada mês, troque de plataforma sem custo adicional e aproveite o que há de melhor em entretenimento.
          </p>
        </div>

        {/* Platforms - Novo Layout Compacto */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-16 max-w-5xl mx-auto">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="group cursor-pointer transition-all duration-300 hover:scale-110"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-white rounded-xl sm:rounded-2xl shadow-lg flex items-center justify-center p-2 sm:p-3 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={platform.logo} 
                  alt={`Logo ${platform.name}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Texto "e muito mais..." */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-400 font-medium">
            ...e muito mais!
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
              <div className="text-primary bg-primary/20 p-3 rounded-xl">
                {benefit.icon}
              </div>
              <p className="text-gray-300">{benefit.text}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-6 text-gray-200">
            Streaming flexível com internet de verdade.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8 py-4"
          >
            ASSINAR AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Streaming;