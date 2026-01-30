import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Sparkles, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  hasFormLink?: boolean;
}

interface ChatbotProps {
  onOpenConsultation?: () => void;
}

const siteInfo = {
  es: {
    servicios: 'Ofrecemos diseño web profesional, landing pages de alta conversión, sitios web corporativos, SEO y posicionamiento local, desarrollo a medida, y diseño mobile-first. Todos nuestros proyectos incluyen diseño responsive, optimización SEO básica, y soporte en español.',
    precios: 'Nuestros proyectos comienzan desde $1,500 CAD para landing pages y desde $3,000 CAD para sitios web corporativos completos. El precio final depende de las funcionalidades específicas. Ofrecemos una consulta para darte un presupuesto personalizado.',
    tiempo: 'Una landing page puede estar lista en 1-2 semanas. Un sitio web corporativo generalmente toma 3-4 semanas. Proyectos más complejos pueden tomar 6-8 semanas.',
    contacto: 'Puedes contactarnos por WhatsApp al +1 (587) 896-1997, por email a info@rcwinnovation.com, o solicitar una consulta directamente en nuestra web. Estamos ubicados en Calgary, Alberta.',
    empresa: 'RCW Innovation Inc es una empresa de diseño y desarrollo web en Calgary especializada en la comunidad hispana. Ofrecemos atención 100% en español, calidad premium, entrega rápida, y soporte local.',
    garantia: 'Ofrecemos garantía de satisfacción del 100%. Trabajamos contigo hasta que estés completamente satisfecho. Además, incluimos 30 días de ajustes después del lanzamiento.',
    proceso: 'Nuestro proceso incluye: 1) Consulta inicial, 2) Estrategia personalizada, 3) Diseño y prototipos, 4) Desarrollo, 5) Lanzamiento, y 6) Soporte continuo.',
    moreInfo: '¡Por supuesto! Para obtener información más detallada y personalizada, te invito a completar nuestro formulario de consulta. Un experto te contactará pronto. 👇',
  },
  en: {
    servicios: 'We offer professional web design, high-conversion landing pages, corporate websites, SEO and local positioning, custom development, and mobile-first design. All our projects include responsive design, basic SEO optimization, and Spanish support.',
    precios: 'Our projects start from $1,500 CAD for landing pages and from $3,000 CAD for complete corporate websites. The final price depends on specific features. We offer a consultation for a personalized quote.',
    tiempo: 'A landing page can be ready in 1-2 weeks. A corporate website generally takes 3-4 weeks. More complex projects may take 6-8 weeks.',
    contacto: 'You can contact us by WhatsApp at +1 (587) 896-1997, by email at info@rcwinnovation.com, or request a consultation directly on our website. We are located in Calgary, Alberta.',
    empresa: 'RCW Innovation Inc is a web design and development company in Calgary specialized in the Hispanic community. We offer 100% Spanish attention, premium quality, fast delivery, and local support.',
    garantia: 'We offer a 100% satisfaction guarantee. We work with you until you are completely satisfied. Plus, we include 30 days of adjustments after launch.',
    proceso: 'Our process includes: 1) Initial consultation, 2) Personalized strategy, 3) Design and prototypes, 4) Development, 5) Launch, and 6) Ongoing support.',
    moreInfo: 'Of course! For more detailed and personalized information, I invite you to complete our consultation form. An expert will contact you soon. 👇',
  }
};

export const Chatbot = ({ onOpenConsultation }: ChatbotProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: t('chatbot.greeting'),
      isBot: true,
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const info = siteInfo[language];

  const quickResponses = [
    { label: t('chatbot.prices'), keyword: 'precios' },
    { label: t('chatbot.time'), keyword: 'tiempo' },
    { label: t('chatbot.contact'), keyword: 'contacto' },
    { label: t('chatbot.services'), keyword: 'servicios' },
    { label: t('chatbot.moreInfo'), keyword: 'masinfo' },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Lock body scroll when chatbot is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Update greeting when language changes
  useEffect(() => {
    setMessages([
      {
        id: '1',
        text: t('chatbot.greeting'),
        isBot: true,
      },
    ]);
  }, [language, t]);

  const getBotResponse = (input: string): { text: string; hasFormLink?: boolean } => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('masinfo') || lowerInput.includes('más info') || lowerInput.includes('more info') || lowerInput.includes('formulario') || lowerInput.includes('form')) {
      return { text: info.moreInfo, hasFormLink: true };
    }
    if (lowerInput.includes('precio') || lowerInput.includes('costo') || lowerInput.includes('cuanto') || lowerInput.includes('cuánto') || lowerInput.includes('price') || lowerInput.includes('cost')) {
      return { text: info.precios };
    }
    if (lowerInput.includes('tiempo') || lowerInput.includes('demora') || lowerInput.includes('tarda') || lowerInput.includes('entrega') || lowerInput.includes('time') || lowerInput.includes('delivery')) {
      return { text: info.tiempo };
    }
    if (lowerInput.includes('contacto') || lowerInput.includes('telefono') || lowerInput.includes('teléfono') || lowerInput.includes('email') || lowerInput.includes('whatsapp') || lowerInput.includes('contact') || lowerInput.includes('phone')) {
      return { text: info.contacto };
    }
    if (lowerInput.includes('servicio') || lowerInput.includes('ofrecen') || lowerInput.includes('hacen') || lowerInput.includes('service') || lowerInput.includes('offer')) {
      return { text: info.servicios };
    }
    if (lowerInput.includes('empresa') || lowerInput.includes('quienes') || lowerInput.includes('quiénes') || lowerInput.includes('sobre') || lowerInput.includes('company') || lowerInput.includes('about')) {
      return { text: info.empresa };
    }
    if (lowerInput.includes('garantia') || lowerInput.includes('garantía') || lowerInput.includes('satisfaccion') || lowerInput.includes('satisfacción') || lowerInput.includes('guarantee') || lowerInput.includes('warranty')) {
      return { text: info.garantia };
    }
    if (lowerInput.includes('proceso') || lowerInput.includes('como trabajan') || lowerInput.includes('cómo trabajan') || lowerInput.includes('pasos') || lowerInput.includes('process') || lowerInput.includes('how') || lowerInput.includes('steps')) {
      return { text: info.proceso };
    }
    if (lowerInput.includes('hola') || lowerInput.includes('buenas') || lowerInput.includes('hey') || lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return { text: t('chatbot.greeting') };
    }
    
    const defaultResponse = language === 'es'
      ? 'Gracias por tu mensaje. Para respuestas personalizadas, te recomiendo usar el botón "📋 Más información" o contactarnos directamente. ¿Te gustaría saber sobre nuestros servicios, precios o tiempos de entrega?'
      : 'Thank you for your message. For personalized responses, I recommend using the "📋 More info" button or contacting us directly. Would you like to know about our services, prices, or delivery times?';
    
    return { text: defaultResponse };
  };

  const handleSend = (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(messageText);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        isBot: true,
        hasFormLink: response.hasFormLink,
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleOpenForm = () => {
    setIsOpen(false);
    onOpenConsultation?.();
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? 'Cerrar chatbot' : 'Abrir chatbot'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Bot className="w-7 h-7 text-primary-foreground" />
        )}
      </motion.button>

      {/* Chat Panel with Responsive Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay for mobile - clicking closes chatbot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 z-40 md:hidden"
              aria-hidden="true"
            />
            
            {/* Chat Panel - Responsive */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="
                fixed z-50 glass-strong rounded-2xl overflow-hidden shadow-2xl
                flex flex-col
                
                /* Mobile: full-width with safe margins, anchored to bottom */
                inset-x-3 bottom-3 max-h-[85vh]
                
                /* Tablet (768px+): fixed width, bottom-right corner */
                md:inset-auto md:bottom-44 md:right-6 md:w-[420px] md:max-h-[80vh]
                
                /* Desktop (1024px+): slightly larger */
                lg:w-[480px] lg:max-h-[75vh]
              "
            >
              {/* Header */}
              <div className="bg-primary p-4 flex items-center gap-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-primary-foreground">{t('chatbot.title')}</h3>
                  <p className="text-xs text-primary-foreground/70">{t('chatbot.status')}</p>
                </div>
                {/* Close button - always visible */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/30 transition-colors"
                  aria-label="Cerrar chatbot"
                >
                  <X className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>

              {/* Messages - scrollable area */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-0">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 ${
                        message.isBot
                          ? 'bg-muted text-foreground rounded-tl-sm'
                          : 'bg-primary text-primary-foreground rounded-tr-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    {message.hasFormLink && (
                      <motion.button
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        onClick={handleOpenForm}
                        className="mt-2 flex items-center gap-2 px-4 py-2.5 min-h-[44px] bg-accent text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/90 transition-colors"
                      >
                        <FileText className="w-4 h-4" />
                        {language === 'es' ? 'Abrir Formulario de Consulta' : 'Open Consultation Form'}
                      </motion.button>
                    )}
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Responses - tap-friendly */}
              <div className="px-4 pb-2 flex flex-wrap gap-2 shrink-0">
                {quickResponses.map((qr) => (
                  <button
                    key={qr.keyword}
                    onClick={() => handleSend(qr.keyword)}
                    className="text-xs px-3 py-2 min-h-[36px] rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  >
                    {qr.label}
                  </button>
                ))}
              </div>

              {/* Input - tap-friendly */}
              <div className="p-4 border-t border-border/30 shrink-0">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={t('chatbot.placeholder')}
                    className="flex-1 bg-muted rounded-xl px-4 py-3 min-h-[48px] text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    aria-label="Escribe tu mensaje"
                  />
                  <button
                    onClick={() => handleSend()}
                    className="w-12 h-12 min-w-[48px] min-h-[48px] rounded-xl bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors"
                    aria-label="Enviar mensaje"
                  >
                    <Send className="w-5 h-5 text-primary-foreground" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
