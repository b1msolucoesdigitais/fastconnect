import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Check, Zap, Wifi, Users, Smartphone, Gauge, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { config, getWhatsAppUrl } from "@/lib/config";

const Plans = () => {
  const [selectedPlans, setSelectedPlans] = useState<{ [key: string]: boolean }>({});

  const plans = [
    {
      id: "240mb",
      name: "Fast 240MB",
      speed: "240",
      basePrice: 79.90,
      price: "R$ 79,90",
      description: "Ideal para casa",
      features: [
        "Wi-Fi grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      popular: false
    },
    {
      id: "360mb",
      name: "Fast 360MB",
      speed: "360",
      basePrice: 89.90,
      price: "R$ 89,90",
      description: "Para pequenas famílias",
      features: [
        "Wi-Fi grátis",
        "Suporte 24h",
        "Instalação grátis"
      ],
      popular: false
    },
    {
      id: "560mb",
      name: "Fast 560MB",
      speed: "560",
      basePrice: 99.90,
      price: "R$ 99,90",
      description: "Para toda família",
      features: [
        "Wi-Fi grátis",
        "Suporte 24h", 
        "Instalação grátis",
        { logos: ["netflix"] }
      ],
      popular: false
    },
    {
      id: "600mb",
      name: "ULTRA FAST 600MB",
      speed: "600",
      basePrice: 119.90,
      price: "R$ 119,90",
      description: "Tecnologia Mesh",
      features: [
        "Wi-Fi Mesh grátis",
        "2 Roteadores incluídos",
        "Suporte 24h",
        "Instalação grátis",
        { logos: ["netflix", "prime"] }
      ],
      popular: false
    },
    {
      id: "720mb",
      name: "Fast 720MB",
      speed: "720",
      basePrice: 109.90,
      price: "R$ 109,90",
      description: "Alta performance",
      features: [
        "Wi-Fi 6 grátis",
        "Suporte 24h",
        "Instalação grátis",
        { logos: ["netflix", "prime"] }
      ],
      popular: false
    },
    {
      id: "1000mb",
      name: "Fast 1GB",
      speed: "1000",
      basePrice: 159.90,
      price: "R$ 159,90", 
      description: "Ultra performance",
      features: [
        "Wi-Fi 6 grátis",
        "Suporte prioritário 24h",
        "Instalação grátis",
        { logos: ["netflix", "prime", "disney"] }
      ],
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
                      className={`relative group transition-all duration-300 hover:shadow-2xl h-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:border-primary/50`}
                    >

                      
                                                                    <CardHeader className="text-center pb-4">
                         <CardTitle className={`text-2xl font-bold mb-2 text-gray-900`}>
                           {plan.name}
                         </CardTitle>
                        
                        <p className={`mb-4 ${
                          plan.popular ? 'text-blue-100' : 'text-gray-600'
                        }`}>
                          {plan.description}
                        </p>
                        
                        <div className="text-center">
                          <span className={`text-3xl font-bold ${
                            plan.popular ? 'text-white' : 'text-primary'
                          }`}>
                            {plan.speed}MB
                          </span>
                          <p className={`text-sm ${
                            plan.popular ? 'text-blue-100' : 'text-gray-600'
                          }`}>
                            de velocidade
                          </p>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="pt-4 flex flex-col h-full">
                                                 <ul className="space-y-3 mb-6 flex-grow">
                          {plan.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <Check className={`w-5 h-5 mr-3 flex-shrink-0 text-primary`} />
                              {typeof feature === 'string' ? (
                                <span className={`text-gray-700`}>
                                  {feature}
                                </span>
                              ) : feature.logos ? (
                                <div className="flex items-center gap-2">
                                  <span className={`text-sm font-medium text-gray-600`}>
                                    Streamings inclusos:
                                  </span>
                                  <div className="flex gap-1">
                                    {feature.logos.map((logo, logoIndex) => (
                                      <div key={logoIndex}>
                                        {logo === "netflix" && (
                                          <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">N</span>
                                          </div>
                                        )}
                                        {logo === "prime" && (
                                          <div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">P</span>
                                          </div>
                                        )}
                                        {logo === "disney" && (
                                          <div className="w-5 h-5 bg-blue-800 rounded flex items-center justify-center">
                                            <span className="text-white font-bold text-xs">D+</span>
                                          </div>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </li>
                          ))}
                        </ul>

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
                            <span className={`text-4xl font-bold text-gray-900`}>
                              {formatPrice(calculateTotalPrice(plan))}
                            </span>
                            <span className={`text-gray-600`}>
                              /mês
                            </span>
                          </div>
                          
                          <Button 
                            className={`w-full bg-primary text-white hover:bg-primary/90 transition-all duration-300`}
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