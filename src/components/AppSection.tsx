import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Smartphone, 
  BarChart3, 
  CreditCard, 
  Headphones, 
  Settings, 
  Bell,
  Download,
  LogIn,
  Menu,
  CheckCircle
} from "lucide-react";

const AppSection = () => {
  const features = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "Acompanhe o consumo de internet em tempo real"
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      text: "Gere boletos, consulte faturas e pague com facilidade"
    },
    {
      icon: <Headphones className="w-5 h-5" />,
      text: "Solicite suporte técnico e acompanhe chamados"
    },
    {
      icon: <Settings className="w-5 h-5" />,
      text: "Altere seu plano ou atualize seus dados cadastrais"
    },
    {
      icon: <Bell className="w-5 h-5" />,
      text: "Receba comunicados e novidades em primeira mão"
    }
  ];

  const steps = [
    {
      icon: <Download className="w-6 h-6" />,
      title: "Baixe o app",
      description: "Na Play Store (Android) ou App Store (iOS) buscando por Fast Fibra"
    },
    {
      icon: <LogIn className="w-6 h-6" />,
      title: "Faça login",
      description: "Com seu CPF ou CNPJ e a senha cadastrada"
    },
    {
      icon: <Menu className="w-6 h-6" />,
      title: "Navegue pelo menu",
      description: "Para acessar os serviços disponíveis"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Pronto!",
      description: "Tudo o que você precisa em um só lugar"
    }
  ];

  return (
    <section id="app" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.1),transparent)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-brand-blue-light/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2 text-base">
              <Smartphone className="w-4 h-4 mr-2" />
              Aplicativo
            </Badge>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
                Fast Fibra
              </span>
              <br />
              na palma da sua mão
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Mais controle, mais praticidade, mais autonomia
            </p>
            
            <p className="text-gray-400 mb-12 leading-relaxed">
              Com o aplicativo da Fast Fibra, você tem acesso a todos os serviços em poucos cliques — 
              direto do seu celular. É mais comodidade para sua rotina e agilidade no atendimento.
            </p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-primary/50 transition-all duration-300">
                  <div className="text-primary bg-primary/20 p-2 rounded-lg flex-shrink-0">
                    {feature.icon}
                  </div>
                  <p className="text-gray-300 text-sm">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl text-lg px-8 py-4"
              >
                SEJA FAST!
              </Button>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-400">
                  Seguro, rápido e fácil de usar
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Steps */}
          <div className="relative">
            {/* Background phone mockup */}
            <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-full blur-3xl opacity-50" />
            
            <Card className="bg-white/10 backdrop-blur border-white/20 relative z-10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center text-white">
                  Como usar? Passo a passo:
                </h3>
                
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <div className="text-primary">
                          {step.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors">
                          {step.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="absolute left-6 mt-12 w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <p className="text-center text-gray-300 mb-4">
                    Se ainda não tem, baixe agora e descubra como é simples ter sua Fast Fibra sempre com você!
                  </p>
                  
                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    {/* Google Play Store */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-white"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-400">Disponível no</div>
                          <div className="text-xs font-semibold">Google Play</div>
                        </div>
                      </div>
                    </Button>

                    {/* Apple App Store */}
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 text-white"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                        </svg>
                        <div className="text-left">
                          <div className="text-xs text-gray-400">Baixe na</div>
                          <div className="text-xs font-semibold">App Store</div>
                        </div>
                      </div>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;