import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Share2, 
  Bot, 
  Brain, 
  Database, 
  CreditCard, 
  Globe, 
  GraduationCap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

import serviceSoftwareCustom from '@/assets/service-software-custom.jpg';
import serviceBrandingSocial from '@/assets/service-branding-social.jpg';
import serviceAutomationAi from '@/assets/service-automation-ai.jpg';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';
import serviceErpSystems from '@/assets/service-erp-systems.jpg';
import serviceDigitalCard from '@/assets/service-digital-card.jpg';
import serviceWebAppDesign from '@/assets/service-web-app-design.jpg';
import serviceMentoringTraining from '@/assets/service-mentoring-training.jpg';

const serviceIcons = [Code2, Share2, Bot, Brain, Database, CreditCard, Globe, GraduationCap];

const serviceImages = [
  serviceSoftwareCustom,
  serviceBrandingSocial,
  serviceAutomationAi,
  serviceAgentsAi,
  serviceErpSystems,
  serviceDigitalCard,
  serviceWebAppDesign,
  serviceMentoringTraining,
];

const serviceHrefs = [
  '/diseno-software-medida-premium-calgary',
  '/branding-estrategia-redes-sociales-calgary',
  '/automatizaciones-ia-operaciones-calgary',
  '/creacion-agentes-ia-inteligencia-calgary',
  '/sistemas-gestion-operaciones-calgary',
  '/tarjeta-digital-profesional-calgary',
  '/diseno-web-app-movil-calgary',
  '/mentoria-capacitacion-digital-calgary',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

interface ServicesProps {
  onOpenConsultation: () => void;
  onOpenDiagnostic: () => void;
}

export const Services = ({ onOpenConsultation, onOpenDiagnostic }: ServicesProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, basePath, language } = useLanguage();

  const services = Array.from({ length: 8 }, (_, i) => {
    const num = i + 1;
    return {
      icon: serviceIcons[i],
      title: t(`service.${num}.title`),
      tag: t(`service.${num}.tag`),
      description: t(`service.${num}.description`),
      features: t(`service.${num}.features`).split(','),
      image: serviceImages[i],
      imageAlt: t(`service.${num}.title`) + ' - Calgary',
      href: serviceHrefs[i],
    };
  });

  return (
    <section id="servicios" className="section relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">
            {t('services.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t('services.title')}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={itemVariants}
              className="card-premium group cursor-pointer overflow-hidden"
            >
              <Link to={`${basePath}${service.href}`} className="block h-full">
                {/* Service Image */}
                <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  {/* Tag positioned on image */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-4">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Click indicator */}
                <div className="pt-4 border-t border-border/50">
                  <span className="text-sm text-primary group-hover:underline flex items-center gap-1">
                    {t('services.viewMore')}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
