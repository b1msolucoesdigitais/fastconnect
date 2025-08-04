import { Button } from "@/components/ui/button";
import { Phone, Mail, Wifi } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-blue-light rounded-lg flex items-center justify-center">
              <Wifi className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Fast Connect</h1>
              <p className="text-xs text-muted-foreground">Internet de Qualidade</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">
              Início
            </a>
            <a href="#planos" className="text-foreground hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex flex-col text-right">
              <div className="flex items-center space-x-1 text-sm text-primary">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@fastconnect.com</span>
              </div>
            </div>
            <Button className="bg-gradient-to-r from-primary to-brand-blue-light hover:from-brand-blue-dark hover:to-primary transition-all duration-300 shadow-lg hover:shadow-xl">
              Assine Já
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;