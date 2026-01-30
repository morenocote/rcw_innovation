import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, Phone, Mail, MapPin, Clock, MessageCircle, Calendar, Send, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const { t, language, basePath } = useLanguage();
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const seoData = {
    es: {
      title: 'Contacto | RCW Innovation Calgary Alberta',
      description: 'Contáctanos para diseño web, desarrollo de software y automatización con IA en Calgary. Atención en español. Respuesta en menos de 24 horas.',
      keywords: 'contacto RCW Innovation, agencia web Calgary, consultoría digital Calgary, diseño web español Calgary, contactar desarrolladores Calgary',
      canonicalUrl: 'https://www.rcwinnovation.com/es/contacto',
    },
    en: {
      title: 'Contact | RCW Innovation Calgary Alberta',
      description: 'Contact us for web design, software development, and AI automation in Calgary. Spanish support available. Response within 24 hours.',
      keywords: 'RCW Innovation contact, Calgary web agency, Calgary digital consulting, Spanish web design Calgary, contact Calgary developers',
      canonicalUrl: 'https://www.rcwinnovation.com/en/contact',
    }
  };

  const currentSeo = seoData[language];

  const contactMethods = {
    es: [
      { icon: Phone, title: 'Teléfono', value: '+1 (587) 896-1997', href: 'tel:+15878961997', description: 'Lun-Vie 9am-6pm MST' },
      { icon: Mail, title: 'Email', value: 'info@rcwinnovation.com', href: 'mailto:info@rcwinnovation.com', description: 'Respuesta en 24h' },
      { icon: MessageCircle, title: 'WhatsApp', value: 'Chat directo', href: 'https://wa.me/15878961997', description: 'Respuesta inmediata' },
      { icon: MapPin, title: 'Ubicación', value: 'Calgary, Alberta', href: null, description: 'Canadá' },
    ],
    en: [
      { icon: Phone, title: 'Phone', value: '+1 (587) 896-1997', href: 'tel:+15878961997', description: 'Mon-Fri 9am-6pm MST' },
      { icon: Mail, title: 'Email', value: 'info@rcwinnovation.com', href: 'mailto:info@rcwinnovation.com', description: 'Response within 24h' },
      { icon: MessageCircle, title: 'WhatsApp', value: 'Direct chat', href: 'https://wa.me/15878961997', description: 'Immediate response' },
      { icon: MapPin, title: 'Location', value: 'Calgary, Alberta', href: null, description: 'Canada' },
    ]
  };

  const services = {
    es: [
      'Diseño Web / Landing Page',
      'Desarrollo de Software a Medida',
      'Automatización con IA',
      'Agentes de IA',
      'Sistemas de Gestión (ERP/CRM)',
      'Branding y Redes Sociales',
      'Tarjeta Digital Profesional',
      'Mentoría y Capacitación',
      'Otro'
    ],
    en: [
      'Web Design / Landing Page',
      'Custom Software Development',
      'AI Automation',
      'AI Agents',
      'Management Systems (ERP/CRM)',
      'Branding and Social Media',
      'Professional Digital Card',
      'Mentoring and Training',
      'Other'
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build WhatsApp message
    const message = language === 'es'
      ? `Hola, soy ${formData.name} de ${formData.company || 'N/A'}. Me interesa: ${formData.service}. ${formData.message}`
      : `Hello, I'm ${formData.name} from ${formData.company || 'N/A'}. I'm interested in: ${formData.service}. ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/15878961997?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: language === 'es' ? '¡Mensaje preparado!' : 'Message prepared!',
      description: language === 'es' 
        ? 'Te redirigimos a WhatsApp para enviar tu mensaje.'
        : 'Redirecting you to WhatsApp to send your message.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const whyContact = {
    es: [
      'Asesoría inicial sin costo ni compromiso',
      'Respuesta garantizada en menos de 24 horas',
      'Comunicación 100% en español',
      'Propuestas personalizadas para tu negocio',
    ],
    en: [
      'Free initial consultation with no commitment',
      'Guaranteed response within 24 hours',
      '100% Spanish support available',
      'Customized proposals for your business',
    ]
  };

  // Schema.org LocalBusiness markup
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RCW Innovation Inc",
    "image": "https://www.rcwinnovation.com/logo.png",
    "telephone": "+1-587-896-1997",
    "email": "info@rcwinnovation.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "Alberta",
      "addressCountry": "CA"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "url": "https://www.rcwinnovation.com"
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <link rel="canonical" href={currentSeo.canonicalUrl} />
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/contacto" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/contact" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSeo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(contactSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main className="pt-24 sm:pt-32 pb-16 sm:pb-20">
          {/* Hero Section */}
          <section className="container-custom mb-12 sm:mb-16">
            <Link 
              to={basePath} 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                {language === 'es' ? 'Contacto' : 'Contact'}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6">
                {language === 'es' ? 'Hablemos de tu Proyecto' : "Let's Talk About Your Project"}
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Estamos listos para escucharte y ayudarte a transformar tu visión en una solución digital exitosa. Contáctanos hoy.'
                  : "We're ready to listen and help you transform your vision into a successful digital solution. Contact us today."}
              </p>
            </motion.div>
          </section>

          {/* Contact Methods */}
          <section className="container-custom mb-12 sm:mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {contactMethods[language].map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {method.href ? (
                    <a
                      href={method.href}
                      target={method.href.startsWith('http') ? '_blank' : undefined}
                      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block p-4 sm:p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all text-center h-full min-h-[120px] sm:min-h-[140px]"
                    >
                      <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                      <div className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{method.title}</div>
                      <div className="text-primary font-medium text-xs sm:text-sm mb-0.5 sm:mb-1 break-all">{method.value}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{method.description}</div>
                    </a>
                  ) : (
                    <div className="p-4 sm:p-6 rounded-xl bg-card/50 border border-border/30 text-center h-full min-h-[120px] sm:min-h-[140px]">
                      <method.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                      <div className="font-semibold mb-0.5 sm:mb-1 text-sm sm:text-base">{method.title}</div>
                      <div className="text-primary font-medium text-xs sm:text-sm mb-0.5 sm:mb-1">{method.value}</div>
                      <div className="text-[10px] sm:text-xs text-muted-foreground">{method.description}</div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main Content Grid */}
          <section className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-card/50 border border-border/30"
              >
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {language === 'es' ? 'Envíanos un Mensaje' : 'Send Us a Message'}
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        {language === 'es' ? 'Nombre completo *' : 'Full name *'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                        placeholder={language === 'es' ? 'Tu nombre' : 'Your name'}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        {language === 'es' ? 'Email *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        {language === 'es' ? 'Teléfono' : 'Phone'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                        {language === 'es' ? 'Empresa' : 'Company'}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                        placeholder={language === 'es' ? 'Tu empresa' : 'Your company'}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      {language === 'es' ? 'Servicio de interés *' : 'Service of interest *'}
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors text-sm"
                    >
                      <option value="">{language === 'es' ? 'Selecciona un servicio' : 'Select a service'}</option>
                      {services[language].map(service => (
                        <option key={service} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2">
                      {language === 'es' ? 'Cuéntanos sobre tu proyecto *' : 'Tell us about your project *'}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none text-sm"
                      placeholder={language === 'es' 
                        ? 'Describe tu proyecto, objetivos y cualquier detalle relevante...'
                        : 'Describe your project, goals, and any relevant details...'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Send className="w-5 h-5" />
                    {language === 'es' ? 'Enviar vía WhatsApp' : 'Send via WhatsApp'}
                  </button>
                </form>
              </motion.div>

              {/* Right Side Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Why Contact Us */}
                <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20">
                  <h3 className="text-xl font-bold mb-6">
                    {language === 'es' ? '¿Por qué contactarnos?' : 'Why contact us?'}
                  </h3>
                  <ul className="space-y-4">
                    {whyContact[language].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Actions */}
                <div className="p-8 rounded-2xl bg-card/50 border border-border/30">
                  <h3 className="text-xl font-bold mb-6">
                    {language === 'es' ? 'Acciones Rápidas' : 'Quick Actions'}
                  </h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => setIsConsultationOpen(true)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl bg-background border border-border/30 hover:border-primary/30 transition-all text-left"
                    >
                      <Calendar className="w-10 h-10 text-primary" />
                      <div>
                        <div className="font-semibold">{language === 'es' ? 'Agendar Asesoría' : 'Schedule Consultation'}</div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'es' ? 'Reserva una llamada con nuestro equipo' : 'Book a call with our team'}
                        </div>
                      </div>
                    </button>

                    <button
                      onClick={() => setIsDiagnosticOpen(true)}
                      className="w-full flex items-center gap-4 p-4 rounded-xl bg-background border border-border/30 hover:border-accent/30 transition-all text-left"
                    >
                      <Clock className="w-10 h-10 text-accent" />
                      <div>
                        <div className="font-semibold">{language === 'es' ? 'Diagnóstico Express' : 'Express Diagnostic'}</div>
                        <div className="text-sm text-muted-foreground">
                          {language === 'es' ? 'Obtén un análisis rápido de tu situación' : 'Get a quick analysis of your situation'}
                        </div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Office Hours */}
                <div className="p-8 rounded-2xl bg-card/50 border border-border/30">
                  <h3 className="text-xl font-bold mb-4">
                    {language === 'es' ? 'Horario de Atención' : 'Office Hours'}
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>{language === 'es' ? 'Lunes a Viernes: 9:00 AM - 6:00 PM (MST)' : 'Monday to Friday: 9:00 AM - 6:00 PM (MST)'}</p>
                    <p>{language === 'es' ? 'Sábados: Con cita previa' : 'Saturdays: By appointment'}</p>
                    <p className="text-sm mt-4 text-primary">
                      {language === 'es' 
                        ? '* WhatsApp disponible 24/7 para mensajes'
                        : '* WhatsApp available 24/7 for messages'}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />

        <DiagnosticModal isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
        <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      </div>
    </>
  );
};

export default ContactPage;
