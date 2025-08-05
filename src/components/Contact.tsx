import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Entre em{" "}
            <span className="bg-gradient-to-r from-primary to-brand-blue-light bg-clip-text text-transparent">
              Contato
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fale conosco e descubra como podemos melhorar sua conexão com a internet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">
                Fale Conosco Agora
              </h3>
              <p className="text-muted-foreground mb-8">
                Nossa equipe está pronta para atender você e encontrar o melhor plano para suas necessidades.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Telefone</h4>
                  <p className="text-primary font-semibold">(31) 98694-7249</p>
                  <p className="text-sm text-muted-foreground">Seg-Sex: 09:00 às 18:00</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">WhatsApp</h4>
                  <p className="text-primary font-semibold">(31) 98694-7249</p>
                  <p className="text-sm text-muted-foreground">24h online</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">E-mail</h4>
                  <p className="text-primary font-semibold text-sm">contato@fastconnect.net.br</p>
                  <p className="text-sm text-muted-foreground">Resposta em 2h</p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-brand-blue-light/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold mb-2 text-foreground">Endereço</h4>
                  <p className="text-sm text-muted-foreground">
                    Avenida Galiléia, 652, Canaã<br />
                    Ipatinga/MG
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Banner */}
            <Card className="bg-gradient-to-r from-primary/10 to-brand-blue-light/10 border-primary/30">
              <CardContent className="p-6 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
                <h4 className="text-lg font-bold mb-2 text-foreground">
                  Horário de Atendimento
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Seg - Sex: 09:00 às 18:00<br />
                  Sábado: 09:00 às 12h00
                </p>
                <Button className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary">
                  Falar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-6 text-foreground">
                Solicite um Orçamento
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input 
                      placeholder="Seu nome completo"
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input 
                      placeholder="(31) 98694-7249"
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    E-mail
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    CEP
                  </label>
                  <Input 
                    placeholder="00000-000"
                    className="bg-background/50"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Mensagem (opcional)
                  </label>
                  <Textarea 
                    placeholder="Conte-nos sobre suas necessidades de internet..."
                    className="bg-background/50 min-h-[100px]"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg"
                  size="lg"
                >
                  Solicitar Orçamento Gratuito
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Ao enviar, você concorda com nossa política de privacidade
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;