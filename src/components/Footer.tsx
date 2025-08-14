import { Wifi, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_80%,rgba(14,165,233,0.1),transparent)]" />
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-brand-blue-light/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/imgs/logo.png" 
                alt="Fast Connect" 
                className="h-20 w-auto"
              />
            </div>
            <p className="text-sm text-gray-300">
              Conectando você ao futuro com fibra ótica de alta velocidade e suporte especializado.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-colors cursor-pointer">
                <Facebook className="w-4 h-4 text-gray-300 hover:text-white" />
              </div>
              <div className="w-8 h-8 bg-white/10 border border-white/20 rounded-lg flex items-center justify-center hover:bg-white/20 hover:border-white/40 transition-colors cursor-pointer">
                <Instagram className="w-4 h-4 text-gray-300 hover:text-white" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="text-gray-300 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#planos" className="text-gray-300 hover:text-primary transition-colors">Planos</a></li>
              <li><a href="#sobre" className="text-gray-300 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-primary transition-colors">Contato</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Área do Cliente</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Serviços</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Internet Residencial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Internet Empresarial</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Teste de Velocidade</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Suporte Técnico</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Segunda Via</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Contato</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-gray-300">(31) 98694-7249</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-gray-300">contato@fastconnect.net.br</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-300">
                  Avenida Galiléia, 652, Canaã<br />
                  Ipatinga/MG
                </span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-gray-300">
                  Seg - Sex: 09:00 às 18:00<br />
                  Sábado: 09:00 às 12h00
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © 2025 Fast Connect. Todos os direitos reservados.
            </p>
            <div className="flex text-sm">
              Criado com 💙 por &nbsp;<a href="#" className="text-gray-400 hover:text-primary transition-colors">GiZ Digital</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;