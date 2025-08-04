import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Tv, Smartphone, Monitor, Wifi } from "lucide-react";

const Streaming = () => {
  const platforms = [
    { name: "Netflix", icon: "🎬" },
    { name: "Amazon Prime", icon: "📺" },
    { name: "Disney+", icon: "🏰" },
    { name: "YouTube", icon: "📽️" },
    { name: "Spotify", icon: "🎵" },
    { name: "Twitch", icon: "🎮" }
  ];

  const benefits = [
    {
      icon: <Wifi className="w-6 h-6" />,
      text: "Sem quedas, sem buffering, sem estresse"
    },
    {
      icon: <Monitor className="w-6 h-6" />,
      text: "Assista em todos os dispositivos ao mesmo tempo"
    },
    {
      icon: <Play className="w-6 h-6" />,
      text: "Compatível com todas as plataformas"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/20 text-primary border border-primary/30 px-4 py-2 rounded-full mb-6">
            <Play className="w-4 h-4" />
            <span className="text-sm font-medium">Streaming Premium</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Streaming sem travar?
            </span>
            <br />
            Só com Fast Fibra.
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Assista ao que você ama com ultravelocidade, estabilidade real e zero interrupção. 
            Com a Fast, sua maratona de filmes, séries, esportes ou lives acontece em alta performance — 
            imagem perfeita, som limpo e conexão estável do início ao fim.
          </p>
        </div>

        {/* Platforms */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-16 max-w-2xl mx-auto">
          {platforms.map((platform, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <CardContent className="p-4 text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {platform.icon}
                </div>
                <p className="text-xs text-gray-300">{platform.name}</p>
              </CardContent>
            </Card>
          ))}
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

        {/* Device Icons */}
        <div className="flex justify-center items-center gap-8 mb-12">
          <div className="text-center group">
            <Tv className="w-12 h-12 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm text-gray-400">Smart TV</p>
          </div>
          <div className="text-center group">
            <Smartphone className="w-12 h-12 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm text-gray-400">Celular</p>
          </div>
          <div className="text-center group">
            <Monitor className="w-12 h-12 mx-auto mb-2 text-primary group-hover:scale-110 transition-transform duration-300" />
            <p className="text-sm text-gray-400">Computador</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-6 text-gray-200">
            Streaming de verdade pede internet de verdade.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8 py-4"
          >
            SEJA FAST!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Streaming;