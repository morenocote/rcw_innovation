import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, Palette, Code2, Rocket, TrendingUp } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const stepIcons = [Search, Palette, Code2, Rocket, TrendingUp];

export const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const steps = Array.from({ length: 5 }, (_, i) => {
    const num = i + 1;
    return {
      icon: stepIcons[i],
      title: t(`process.step.${num}.title`),
      description: t(`process.step.${num}.description`),
    };
  });

  return (
    <section id="proceso" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t('process.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t('process.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative text-center group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {/* Step Number Circle with loading animation */}
                <div className="relative z-10 w-16 h-16 mx-auto mb-4">
                  {/* Progress ring background */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-border/30"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="30"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="188.5"
                      strokeDashoffset="188.5"
                      className="text-primary transition-all duration-700 ease-out group-hover:stroke-dashoffset-0"
                      style={{ strokeDashoffset: 'var(--progress-offset, 188.5)' }}
                    />
                  </svg>
                  {/* Inner circle */}
                  <div className="absolute inset-1 rounded-full bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
                    <step.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Step Number Badge */}
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-muted text-muted-foreground text-xs font-bold flex items-center justify-center z-20 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {index + 1}
                </span>

                <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
