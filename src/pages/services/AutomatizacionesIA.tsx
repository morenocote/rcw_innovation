import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Bot, Workflow, Clock, DollarSign, Link2, TrendingUp, Brain, Database, Code2, Headphones } from 'lucide-react';
import serviceAutomationAi from '@/assets/service-automation-ai.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [Workflow, Clock, DollarSign, Link2, TrendingUp, Headphones];

const AutomatizacionesIA = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`automatizaciones.feature.${i + 1}.title`),
    description: t(`automatizaciones.feature.${i + 1}.description`),
    icon: featureIcons[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`automatizaciones.process.${i + 1}.title`),
    description: t(`automatizaciones.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`automatizaciones.faq.${i + 1}.question`),
    answer: t(`automatizaciones.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('automatizaciones.relatedService.1'), href: '/creacion-agentes-ia-inteligencia-calgary', icon: Brain },
    { title: t('automatizaciones.relatedService.2'), href: '/sistemas-gestion-operaciones-calgary', icon: Database },
    { title: t('automatizaciones.relatedService.3'), href: '/diseno-software-medida-premium-calgary', icon: Code2 },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('automatizaciones.title')}
        metaTitle={t('automatizaciones.metaTitle')}
        metaDescription={t('automatizaciones.metaDescription')}
        keywords={t('automatizaciones.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/automatizaciones-ia-operaciones-calgary"
        heroImage={serviceAutomationAi}
        heroImageAlt={t('automatizaciones.heroImageAlt')}
        tag={t('automatizaciones.tag')}
        icon={Bot}
        shortDescription={t('automatizaciones.shortDescription')}
        problemTitle={t('automatizaciones.problemTitle')}
        problemDescription={t('automatizaciones.problemDescription')}
        solutionTitle={t('automatizaciones.solutionTitle')}
        solutionDescription={t('automatizaciones.solutionDescription')}
        features={features}
        benefitsTitle={t('automatizaciones.benefitsTitle')}
        benefits={t('automatizaciones.benefits').split(',')}
        ctaText={t('automatizaciones.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

AutomatizacionesIA.displayName = 'AutomatizacionesIA';

export default AutomatizacionesIA;
