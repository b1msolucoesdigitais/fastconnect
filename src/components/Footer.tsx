import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-blue-light rounded-lg flex items-center justify-center">
                <Wifi className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-foreground">Fast Connect</h3>
                <p className="text-xs text-muted-foreground">Internet de Qualidade</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Conectando você ao futuro com fibra ótica de alta velocidade e suporte especializado.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-muted-foreground hover:text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-muted-foreground hover:text-primary-foreground" />
              </div>
              <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Twitter className="w-4 h-4 text-muted-foreground hover:text-primary-foreground" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Início</a></li>
              <li><a href="#planos" className="text-muted-foreground hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#sobre" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Internet Residencial</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Internet Empresarial</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Teste de Velocidade</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Suporte Técnico</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Segunda Via</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">contato@fastconnect.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Rua das Fibras, 123<br />
                  São Paulo - SP, 01234-567
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Fast Connect. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                LGPD
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;