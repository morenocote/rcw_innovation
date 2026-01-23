import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { TrendingUp, Zap, DollarSign, Server } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const metricIcons = [TrendingUp, Zap, DollarSign, Server];

export const Metrics = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t } = useLanguage();

  const metrics = Array.from({ length: 4 }, (_, i) => {
    const num = i + 1;
    return {
      icon: metricIcons[i],
      value: t(`metric.${num}.value`),
      label: t(`metric.${num}.label`),
      description: t(`metric.${num}.description`),
    };
  });

  return (
    <section className="py-20 relative overflow-hidden bg-card/30">
      <div className="absolute inset-0 bg-gradient-radial from-accent/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            {t('metrics.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t('metrics.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('metrics.subtitle')}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong p-8 rounded-2xl text-center group hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <metric.icon className="w-8 h-8 text-accent" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
