// Configurações centralizadas da FAST Connect
export const config = {
  // Informações de contato
  contact: {
    whatsapp: "5531986947249",
    phone: "553138259149",
    // Formatação para exibição
    whatsappFormatted: "(31) 98694-7249",
    phoneFormatted: "(31) 3825-9149"
  },
  
  // URLs de contato
  urls: {
    phone: "tel:553138259149"
  },
  
  // Mensagens padrão
  messages: {
    plan: (planName: string, basePrice: number, hasCellPlan: boolean = false) => {
      const mobileAddon = hasCellPlan ? 40 : 0;
      const totalPrice = basePrice + mobileAddon;
      const formattedPrice = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;
      
      let message = `Olá! Gostaria de assinar o plano ${planName} por ${formattedPrice}/mês.`;
      if (hasCellPlan) {
        message += `\n\nIncluindo o plano de celular 20GB.`;
      }
      message += `\n\nPodem me ajudar?`;
      return message;
    }
  }
};

// Função para gerar URL do WhatsApp (fora do objeto para evitar referência circular)
export const getWhatsAppUrl = (message: string) => {
  return `https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(message)}`;
};
