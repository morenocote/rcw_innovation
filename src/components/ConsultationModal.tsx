import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, User, Mail, Phone, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/ceo@rcwinnovation.com';

export const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    interest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const interestOptions = language === 'es' 
    ? [
        'Página web nueva',
        'Rediseño de sitio existente',
        'Landing page',
        'Tienda en línea',
        'SEO y marketing digital',
        'Otro',
      ]
    : [
        'New website',
        'Existing site redesign',
        'Landing page',
        'Online store',
        'SEO and digital marketing',
        'Other',
      ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.interest) {
      toast.error(language === 'es' ? 'Por favor completa los campos requeridos' : 'Please complete the required fields');
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: language === 'es' 
            ? `Nueva solicitud de asesoría - ${formData.name}` 
            : `New consultation request - ${formData.name}`,
          _replyto: formData.email || 'info@rcwinnovation.com',
          Nombre: formData.name,
          Email: formData.email || (language === 'es' ? 'No proporcionado' : 'Not provided'),
          Teléfono: formData.phone,
          Negocio: formData.business || (language === 'es' ? 'No especificado' : 'Not specified'),
          Interés: formData.interest,
          Idioma: language === 'es' ? 'Español' : 'English',
          Fecha: new Date().toLocaleString(language === 'es' ? 'es-CO' : 'en-CA'),
        }),
      });

      if (response.ok) {
        toast.success(language === 'es' 
          ? '¡Mensaje enviado! Te contactaremos pronto.' 
          : 'Message sent! We will contact you soon.');
        
        // Save to localStorage
        localStorage.setItem('rcw_consultation_data', JSON.stringify({
          ...formData,
          submittedAt: new Date().toISOString(),
        }));

        setFormData({ name: '', email: '', phone: '', business: '', interest: '' });
        onClose();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      toast.error(language === 'es' 
        ? 'Error al enviar. Por favor intenta de nuevo.' 
        : 'Error sending. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const labels = {
    title: language === 'es' ? 'Asesoría' : 'Consultation',
    subtitle: language === 'es' ? 'Completa tus datos y te contactaremos pronto' : 'Fill in your details and we will contact you soon',
    name: language === 'es' ? 'Nombre completo *' : 'Full name *',
    namePlaceholder: language === 'es' ? 'Tu nombre' : 'Your name',
    email: language === 'es' ? 'Correo electrónico' : 'Email',
    emailPlaceholder: language === 'es' ? 'tu@email.com' : 'you@email.com',
    phone: language === 'es' ? 'Teléfono *' : 'Phone *',
    phonePlaceholder: '+1 (587) 000-0000',
    business: language === 'es' ? 'Nombre del negocio' : 'Business name',
    businessPlaceholder: language === 'es' ? 'Tu empresa o negocio' : 'Your company or business',
    interest: language === 'es' ? '¿En qué estás interesado? *' : 'What are you interested in? *',
    submit: language === 'es' ? 'Quiero asesoría' : 'I want a consultation',
    processing: language === 'es' ? 'Enviando...' : 'Sending...',
    disclaimer: language === 'es' ? 'Tu información será enviada de forma segura a nuestro equipo' : 'Your information will be securely sent to our team',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md glass-strong rounded-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="relative p-4 sm:p-6 pb-4 border-b border-border/30">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted/50 transition-colors"
                aria-label={language === 'es' ? 'Cerrar modal' : 'Close modal'}
              >
                <X className="w-5 h-5" />
              </button>

              <h2 className="text-xl md:text-2xl font-bold pr-8">
                {language === 'es' ? 'Agenda tu' : 'Schedule your'} <span className="text-gradient-gold">{labels.title}</span>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                {labels.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-primary" />
                  {labels.name}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={labels.namePlaceholder}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  {labels.email}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={labels.emailPlaceholder}
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  {labels.phone}
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={labels.phonePlaceholder}
                  required
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Business */}
              <div className="space-y-2">
                <Label htmlFor="business" className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-primary" />
                  {labels.business}
                </Label>
                <Input
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  placeholder={labels.businessPlaceholder}
                  className="bg-muted/30 border-border/50 focus:border-primary"
                />
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <Label className="text-sm">{labels.interest}</Label>
                <div className="grid grid-cols-2 gap-2">
                  {interestOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setFormData(prev => ({ ...prev, interest: option }))}
                      className={`p-2 text-xs rounded-lg border transition-all ${
                        formData.interest === option
                          ? 'border-primary bg-primary/20 text-foreground'
                          : 'border-border/50 bg-muted/20 text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-gold py-6 text-base font-semibold mt-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Send className="w-5 h-5" />
                    </motion.div>
                    {labels.processing}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    {labels.submit}
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                {labels.disclaimer}
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
