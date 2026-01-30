import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Lightbulb, Target, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onOpenConsultation: () => void;
}

const glowAnimation = {
  animate: {
    textShadow: [
      '0 0 20px rgba(212, 175, 55, 0)',
      '0 0 40px rgba(212, 175, 55, 0.3)',
      '0 0 60px rgba(212, 175, 55, 0.5)',
      '0 0 40px rgba(212, 175, 55, 0.3)',
      '0 0 20px rgba(212, 175, 55, 0)',
    ],
  },
};

export const Hero = ({ onOpenDiagnostic, onOpenConsultation }: HeroProps) => {
  const { t } = useLanguage();
  
  const words1 = t('hero.title.words1').split(',');
  const words2 = t('hero.title.words2').split(',');

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
        animate={{ backgroundPosition: ['0px 0px', '100px 100px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-accent/40 rounded-full"
          style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
          animate={{ y: [0, -100, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2, ease: 'easeInOut' }}
        />
      ))}

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="w-4 h-4 text-accent" />
            </motion.div>
            <span className="text-sm text-muted-foreground relative z-10">{t('hero.badge')}</span>
          </motion.div>

          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            {words1.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              className="text-gradient-gold inline-block relative mr-[0.25em]"
              initial={{ opacity: 0, scale: 0.5, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0, ...glowAnimation.animate }}
              transition={{ 
                opacity: { delay: 0.5, duration: 0.5 },
                scale: { delay: 0.5, duration: 0.6, type: 'spring', stiffness: 100 },
                y: { delay: 0.5, duration: 0.5 },
                textShadow: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
              }}
            >
              {t('hero.title.highlight')}
              <motion.span
                className="absolute -inset-2 bg-accent/10 rounded-lg blur-xl -z-10"
                animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.span>
            {words2.map((word, i) => (
              <motion.span
                key={`p2-${i}`}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: 40, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.08, ease: [0.6, -0.05, 0.01, 0.99] }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16"
          >
            <button onClick={onOpenConsultation} className="btn-gold flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto min-h-[48px]">
              {t('hero.cta.consultation')}
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={onOpenDiagnostic} className="btn-glass flex items-center justify-center gap-2 w-full sm:w-auto min-h-[48px]">
              <Zap className="w-5 h-5 text-primary" />
              {t('hero.cta.diagnostic')}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
          >
            <div className="glass p-4 sm:p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('hero.card.innovation')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('hero.card.innovationDesc')}</p>
            </div>
            
            <div className="glass p-4 sm:p-6 rounded-2xl text-left hover:border-accent/30 transition-all duration-300">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('hero.card.strategy')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('hero.card.strategyDesc')}</p>
            </div>
            
            <div className="glass p-4 sm:p-6 rounded-2xl text-left hover:border-primary/30 transition-all duration-300 sm:col-span-2 md:col-span-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{t('hero.card.results')}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">{t('hero.card.resultsDesc')}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};