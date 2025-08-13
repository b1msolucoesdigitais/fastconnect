import { getWhatsAppUrl } from "@/lib/config";

const PromoBanner = () => {
  const handleWhatsAppOffer = () => {
    const message = `Olá! Quero aproveitar essa oferta especial! Plano 600MB + Streaming inclusos + Wi-Fi 6, Por apenas R$ 149,90/mês.

Podem me ajudar?`;
    
    const whatsappUrl = getWhatsAppUrl(message);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative w-full bg-[#00aadd] py-8">
      <div className="container mx-auto px-4 flex justify-center">
        <a 
          href="#" 
          onClick={handleWhatsAppOffer}
          className="block cursor-pointer transition-transform hover:scale-[1.02]"
        >
          <img
            src="/imgs/oferta/oferta_tempolimitado.png"
            alt="Oferta por tempo limitado - FAST Connect - Clique para falar no WhatsApp"
            className="w-[1400px] h-[360px] object-contain"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;


