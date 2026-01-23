import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Database, LayoutDashboard, Users, Shield, TrendingUp, BarChart3, Bot, Code2, Brain, Award, Leaf, HardHat } from 'lucide-react';
import { motion } from 'framer-motion';
import serviceErpSystems from '@/assets/service-erp-systems.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [LayoutDashboard, Users, Shield, TrendingUp, BarChart3, Database];
const isoIcons = [Award, Leaf, HardHat];
const isoColors = ['primary', 'accent', 'primary'];

const SistemasGestion = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const isoStandards = Array.from({ length: 3 }, (_, i) => ({
    icon: isoIcons[i],
    title: t(`sistemas.iso.${i + 1}.title`),
    subtitle: t(`sistemas.iso.${i + 1}.subtitle`),
    description: t(`sistemas.iso.${i + 1}.description`),
    colorClass: isoColors[i],
  }));

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`sistemas.feature.${i + 1}.title`),
    description: t(`sistemas.feature.${i + 1}.description`),
    icon: featureIcons[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`sistemas.process.${i + 1}.title`),
    description: t(`sistemas.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`sistemas.faq.${i + 1}.question`),
    answer: t(`sistemas.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('sistemas.relatedService.1'), href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
    { title: t('sistemas.relatedService.2'), href: '/diseno-software-medida-premium-calgary', icon: Code2 },
    { title: t('sistemas.relatedService.3'), href: '/creacion-agentes-ia-inteligencia-calgary', icon: Brain },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('sistemas.title')}
        metaTitle={t('sistemas.metaTitle')}
        metaDescription={t('sistemas.metaDescription')}
        keywords={t('sistemas.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/sistemas-gestion-operaciones-calgary"
        heroImage={serviceErpSystems}
        heroImageAlt={t('sistemas.heroImageAlt')}
        tag={t('sistemas.tag')}
        icon={Database}
        shortDescription={t('sistemas.shortDescription')}
        problemTitle={t('sistemas.problemTitle')}
        problemDescription={t('sistemas.problemDescription')}
        solutionTitle={t('sistemas.solutionTitle')}
        solutionDescription={t('sistemas.solutionDescription')}
        customSection={
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  {t('sistemas.isoSection.badge')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {t('sistemas.isoSection.title')}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {t('sistemas.isoSection.subtitle')}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                {isoStandards.map((standard, index) => (
                  <motion.div
                    key={standard.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${standard.colorClass === 'accent' ? 'from-accent/20 to-accent/5' : 'from-primary/20 to-primary/5'} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`} />
                    <div className={`relative bg-card/80 backdrop-blur-sm p-6 lg:p-8 rounded-3xl border ${standard.colorClass === 'accent' ? 'border-accent/20 hover:border-accent/40' : 'border-primary/20 hover:border-primary/40'} h-full transition-all duration-300`}>
                      <div className={`w-14 h-14 lg:w-16 lg:h-16 ${standard.colorClass === 'accent' ? 'bg-accent/10 group-hover:bg-accent/20' : 'bg-primary/10 group-hover:bg-primary/20'} rounded-2xl flex items-center justify-center mb-6 transition-colors`}>
                        <standard.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${standard.colorClass === 'accent' ? 'text-accent' : 'text-primary'}`} />
                      </div>
                      <div className="mb-4">
                        <h3 className="text-xl lg:text-2xl font-bold text-primary">{standard.title}</h3>
                        <p className="text-sm font-medium text-muted-foreground">{standard.subtitle}</p>
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                        {standard.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mt-12 text-center"
              >
                <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-8 py-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl border border-primary/20">
                  <Shield className="w-8 h-8 text-primary" />
                  <div className="text-center sm:text-left">
                    <h4 className="font-bold text-lg">{t('sistemas.hseq.title')}</h4>
                    <p className="text-sm text-muted-foreground">{t('sistemas.hseq.subtitle')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        }
        features={features}
        benefitsTitle={t('sistemas.benefitsTitle')}
        benefits={t('sistemas.benefits').split(',')}
        ctaText={t('sistemas.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

SistemasGestion.displayName = 'SistemasGestion';

export default SistemasGestion;
