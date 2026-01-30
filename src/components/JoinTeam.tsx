import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Briefcase, Sparkles, Users, Rocket, TrendingUp, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const benefitIcons = [Rocket, Users, TrendingUp, Sparkles];

export const JoinTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');
  const { toast } = useToast();
  const { t } = useLanguage();

  const benefits = Array.from({ length: 4 }, (_, i) => {
    const num = i + 1;
    return {
      icon: benefitIcons[i],
      title: t(`joinTeam.benefit.${num}.title`),
      description: t(`joinTeam.benefit.${num}.description`),
    };
  });

  const handleApply = (position: string) => {
    setSelectedPosition(position);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('joinTeam.toast.title'),
      description: t('joinTeam.toast.description'),
    });
    setIsModalOpen(false);
  };

  return (
    <section id="trabaja-con-nosotros" className="py-16 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/3 -right-48 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            {t('joinTeam.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            {t('joinTeam.title')} <span className="text-primary">{t('joinTeam.titleHighlight')}</span>{t('joinTeam.titleEnd')}
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto">
            {t('joinTeam.subtitle')}
          </p>
        </motion.div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{benefit.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm">{benefit.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Application Options */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto"
        >
          {/* General Application */}
          <div className="p-5 sm:p-8 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Briefcase className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('joinTeam.professional')}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
              {t('joinTeam.professionalDesc')}
            </p>
            <Button
              size="lg"
              className="w-full min-h-[48px]"
              onClick={() => handleApply(t('joinTeam.professional'))}
            >
              {t('joinTeam.applyProfessional')}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Volunteer Application */}
          <div className="p-5 sm:p-8 bg-card/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-accent/30 hover:border-accent/50 transition-all duration-300 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{t('joinTeam.volunteer')}</h3>
            <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
              {t('joinTeam.volunteerDesc')}
            </p>
            <Button
              size="lg"
              className="w-full bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent/70 text-accent-foreground shadow-glow-gold min-h-[48px]"
              onClick={() => handleApply(t('joinTeam.volunteer'))}
            >
              {t('joinTeam.applyVolunteer')}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-[95vw] max-w-md mx-auto max-h-[90vh] overflow-hidden flex flex-col p-4 sm:p-6">
          <DialogHeader className="flex-shrink-0 pb-2">
            <DialogTitle className="text-lg sm:text-xl">{t('joinTeam.modal.title')} {selectedPosition}</DialogTitle>
            <DialogDescription className="text-sm">
              {t('joinTeam.modal.subtitle')}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto space-y-3 sm:space-y-4 pr-1">
            {/* Row 1: Name & Email on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="name" className="text-sm">{t('joinTeam.form.name')}</Label>
                <Input id="name" placeholder={t('joinTeam.form.namePlaceholder')} required className="h-9 sm:h-10" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="email" className="text-sm">{t('joinTeam.form.email')}</Label>
                <Input id="email" type="email" placeholder={t('joinTeam.form.emailPlaceholder')} required className="h-9 sm:h-10" />
              </div>
            </div>
            {/* Row 2: Phone & City on desktop, stacked on mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-sm">{t('joinTeam.form.phone')}</Label>
                <Input id="phone" type="tel" placeholder={t('joinTeam.form.phonePlaceholder')} required className="h-9 sm:h-10" />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="city" className="text-sm">{t('joinTeam.form.city')}</Label>
                <Input id="city" placeholder={t('joinTeam.form.cityPlaceholder')} required className="h-9 sm:h-10" />
              </div>
            </div>
            {/* LinkedIn */}
            <div className="space-y-1.5">
              <Label htmlFor="linkedin" className="text-sm">{t('joinTeam.form.linkedin')}</Label>
              <Input id="linkedin" placeholder={t('joinTeam.form.linkedinPlaceholder')} className="h-9 sm:h-10" />
            </div>
            {/* Message */}
            <div className="space-y-1.5">
              <Label htmlFor="message" className="text-sm">{t('joinTeam.form.message')}</Label>
              <Textarea
                id="message"
                placeholder={t('joinTeam.form.messagePlaceholder')}
                rows={3}
                className="min-h-[80px] sm:min-h-[100px] resize-none"
              />
            </div>
            {/* Submit Button */}
            <div className="pt-2 pb-1">
              <Button type="submit" className="w-full h-10 sm:h-11">
                {t('joinTeam.form.submit')}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
