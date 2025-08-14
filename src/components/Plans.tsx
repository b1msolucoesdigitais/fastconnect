import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Zap, Wifi, Users, Smartphone, Gauge, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { config, getWhatsAppUrl } from "@/lib/config";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Plans = () => {
  const [selectedPlans, setSelectedPlans] = useState<{ [key: string]: boolean }>({});

  // Logos dos serviços
  const serviceLogos = {
    ubook: {
      url: "https://cdn-production.frankfurtrights.com/Content/Upload/CompanyLogos/6893.png",
      name: "Ubook - Livros digitais e audiolivros"
    },
    deezer: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
      name: "Deezer - Música e podcasts"
    },
    looke: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Globoplay_logo.svg/2560px-Globoplay_logo.svg.png",
      name: "Looke - Filmes e séries"
    },
    sky: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Globoplay_logo.svg/2560px-Globoplay_logo.svg.png",
      name: "SKY com Globo - TV ao vivo e streaming"
    },
    max: {
      url: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
      name: "MAX (HBO) - Filmes e séries premium"
    },
    kaspersky: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Kaspersky_logo.svg/1280px-Kaspersky_logo.svg.png",
      name: "Kaspersky - Antivírus e segurança"
    },
    "clube-certo": {
      url: "https://clubecerto.com.br/images/empresas/logo/clubecerto.png",
      name: "Clube Certo - Benefícios exclusivos"
    },
    noping: {
      url: "https://cdn-comparador.minhaconexao.com.br/cms/2022/08/08/62f11d6307947no_ping_fundo_branco_logo.png",
      name: "Noping - Redução de ping para games"
    }
  };

  const plans = [
    {
      id: "fast-essencial-1",
      name: "FAST ESSENCIAL I",
      speed: "300",
      basePrice: 79.90,
      price: "R$ 79,90",
      description: "Wi-Fi 5",
      features: [
        "Wi-Fi 5 grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      popular: false
    },
    {
      id: "fast-essencial-2",
      name: "FAST ESSENCIAL II",
      speed: "450",
      basePrice: 89.90,
      price: "R$ 89,90",
      description: "Wi-Fi 5",
      features: [
        "Wi-Fi 5 grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      popular: false
    },
    {
      id: "fast-casa-conectada",
      name: "FAST CASA CONECTADA",
      speed: "500",
      basePrice: 109.90,
      price: "R$ 109,90",
      description: "Wi-Fi 6 Mesh Incluso",
      features: [
        "Wi-Fi 6 Mesh grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      popular: false
    },
    {
      id: "fast-music-1",
      name: "FAST MUSIC I",
      speed: "450",
      basePrice: 99.90,
      price: "R$ 99,90",
      description: "Ubook + Deezer",
      features: [
        "Wi-Fi 5 grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      logos: ["ubook", "deezer"],
      popular: false
    },
    {
      id: "fast-music-2",
      name: "FAST MUSIC II",
      speed: "600",
      basePrice: 119.90,
      price: "R$ 119,90",
      description: "Ubook + Deezer + Kaspersky + Clube Certo",
      features: [
        "Kaspersky Antivírus",
        "Clube Certo",
        "Wi-Fi 6 grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      logos: ["ubook", "deezer", "kaspersky", "clube-certo"],
      popular: false
    },
    {
      id: "fast-streaming-1",
      name: "FAST STREAMING I",
      speed: "450",
      basePrice: 104.90,
      price: "R$ 104,90",
      description: "Ubook + SKY com Globo + Clube Certo",
      features: [
        "Clube Certo",
        "Wi-Fi 5 grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      logos: ["ubook", "sky", "clube-certo"],
      popular: false
    },
    {
      id: "fast-streaming-2",
      name: "FAST STREAMING II",
      speed: "600",
      basePrice: 149.90,
      price: "R$ 149,90",
      description: "Ubook + Looke + SKY com Globo + MAX",
      features: [
        "Wi-Fi 6 grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      logos: ["ubook", "looke", "sky", "max"],
      popular: false
    },
    {
      id: "fast-premium",
      name: "FAST PREMIUM",
      speed: "850",
      basePrice: 224.90,
      price: "R$ 224,90",
      description: "Pacote Completo + Wi-Fi 6 Mesh",
      features: [
        "Kaspersky + Clube Certo",
        "Wi-Fi 6 Mesh grátis",
        "Suporte prioritário 24h",
        "Instalação grátis"
      ],
      logos: ["ubook", "deezer", "looke", "kaspersky", "sky", "max", "clube-certo"],
      popular: true
    },
    {
      id: "fast-gamer",
      name: "FAST GAMER",
      speed: "850",
      basePrice: 139.90,
      price: "R$ 139,90",
      description: "Ubook + Noping + IP Fixo",
      features: [
        "Noping (Redução de Ping)",
        "IP Fixo dedicado",
        "Wi-Fi 6 grátis",
        "Suporte especializado 24h",
        "Instalação grátis"
      ],
      logos: ["ubook", "noping"],
      popular: false
    }
  ];

  const handlePlanToggle = (planId: string) => {
    setSelectedPlans(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  const calculateTotalPrice = (plan: any) => {
    const basePrice = plan.basePrice;
    const mobileAddon = selectedPlans[plan.id] ? 40 : 0;
    return basePrice + mobileAddon;
  };

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  const handleWhatsAppSignup = (plan: any) => {
    const basePrice = plan.basePrice;
    const hasCellPlan = selectedPlans[plan.id] || false;
    const message = config.messages.plan(plan.name, basePrice, hasCellPlan);
    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  // Embla Carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    containScroll: 'trimSnaps',
    slidesToScroll: 1,
    loop: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="embla overflow-hidden" ref={emblaRef}>
            <div className="embla__container flex">
              {plans.map((plan, index) => (
                <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-2 sm:px-3 lg:px-4">
                  <div className="p-2 sm:p-3 lg:p-4">
                    <Card 
                      className={`relative group transition-all duration-300 hover:shadow-2xl h-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-primary/50 ${
                        plan.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
                      }`}
                    >

                      
                                                                    <CardHeader className="text-center pb-4">
                         <CardTitle className="text-2xl font-bold mb-2 text-gray-900">
                           {plan.name}
                         </CardTitle>
                        
                        <p className="mb-4 text-gray-600">
                          {plan.description}
                        </p>
                        
                        <div className="text-center">
                          <span className="text-3xl font-bold text-primary">
                            {plan.speed}MB
                          </span>
                          <p className="text-sm text-gray-600">
                            de velocidade
                          </p>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-4 flex flex-col h-full">
                                                                         <ul className="space-y-3 mb-6 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <Check className="w-5 h-5 mr-3 flex-shrink-0 text-primary" />
                              <span className="text-gray-700">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Streaming Logos */}
                        {plan.logos && plan.logos.length > 0 && (
                          <div className="mb-6 p-4 bg-white/60 rounded-lg border border-blue-200">
                            <p className="text-sm font-medium text-gray-600 mb-3 text-center">
                              Serviços inclusos:
                            </p>
                            <TooltipProvider>
                              <div className="flex flex-wrap justify-center gap-2">
                                {plan.logos.map((logo, logoIndex) => (
                                  <Tooltip key={logoIndex}>
                                    <TooltipTrigger asChild>
                                      <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center p-1 cursor-pointer hover:shadow-md transition-shadow duration-200">
                                        <img 
                                          src={serviceLogos[logo as keyof typeof serviceLogos].url} 
                                          alt={serviceLogos[logo as keyof typeof serviceLogos].name}
                                          className="w-full h-full object-contain"
                                        />
                                      </div>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{serviceLogos[logo as keyof typeof serviceLogos].name}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                            </TooltipProvider>
                          </div>
                        )}

                        {/* Mobile Plan Checkbox */}
                        <div className={`mb-6 p-4 rounded-lg border bg-white/60 border-blue-200`}>
                          <div className="flex items-center space-x-3">
                            <Checkbox 
                              id={`mobile-${plan.id}`}
                              checked={selectedPlans[plan.id] || false}
                              onCheckedChange={() => handlePlanToggle(plan.id)}
                              className="text-primary"
                            />
                            <label 
                              htmlFor={`mobile-${plan.id}`}
                              className={`flex items-center space-x-2 text-sm font-medium cursor-pointer text-gray-700`}
                            >
                              <Smartphone className={`w-4 h-4 text-primary`} />
                              <span>+1 Plano de celular 20GB</span>
                            </label>
                          </div>
                        </div>

                        {/* Price and Button Section */}
                        <div className="space-y-4">
                          <div className="text-center">
                            <span className="text-4xl font-bold text-gray-900">
                              {formatPrice(calculateTotalPrice(plan))}
                            </span>
                            <span className="text-gray-600">
                              /mês
                            </span>
                          </div>
                          
                          <Button 
                            className="w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300"
                            size="lg"
                            onClick={() => handleWhatsAppSignup(plan)}
                          >
                            Assinar Agora
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Custom Navigation Buttons */}
          <button
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 bg-white/95 border-2 border-primary text-primary hover:bg-white shadow-lg rounded-full p-3 z-10"
            onClick={scrollPrev}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 bg-white/95 border-2 border-primary text-primary hover:bg-white shadow-lg rounded-full p-3 z-10"
            onClick={scrollNext}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          

        </div>

      </div>
    </section>
  );
};

export default Plans;