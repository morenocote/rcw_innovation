import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Bot, Workflow, Clock, DollarSign, Link2, TrendingUp, Brain, Database, Code2, Headphones } from 'lucide-react';
import serviceAutomationAi from '@/assets/service-automation-ai.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [Workflow, Clock, DollarSign, Link2, TrendingUp, Headphones];

const AutomatizacionesIA = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`automatizaciones.feature.${i + 1}.title`),
    description: t(`automatizaciones.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.automatizaciones[i],
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
    { title: t('automatizaciones.relatedService.1'), href: getServiceHref('agentesIA'), icon: Brain },
    { title: t('automatizaciones.relatedService.2'), href: getServiceHref('sistemasGestion'), icon: Database },
    { title: t('automatizaciones.relatedService.3'), href: getServiceHref('software'), icon: Code2 },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/automatizaciones-ia'
    : 'https://www.rcwinnovation.com/en/services/ai-automations';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('automatizaciones.title')}
        metaTitle={t('automatizaciones.metaTitle')}
        metaDescription={t('automatizaciones.metaDescription')}
        keywords={t('automatizaciones.keywords')}
        canonicalUrl={canonicalUrl}
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
