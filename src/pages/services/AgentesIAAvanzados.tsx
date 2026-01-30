import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Brain, MessageSquare, Eye, TrendingUp, Shield, Zap, Bot, Database, Code2 } from 'lucide-react';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [MessageSquare, Eye, TrendingUp, Shield, Zap, Brain];

const AgentesIAAvanzados = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`agentesAvanzados.feature.${i + 1}.title`),
    description: t(`agentesAvanzados.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.agentesIAAvanzados[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`agentesAvanzados.process.${i + 1}.title`),
    description: t(`agentesAvanzados.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`agentesAvanzados.faq.${i + 1}.question`),
    answer: t(`agentesAvanzados.faq.${i + 1}.answer`),
  }));

  const pricingPlans = Array.from({ length: 3 }, (_, i) => ({
    name: t(`agentesAvanzados.plan.${i + 1}.name`),
    description: t(`agentesAvanzados.plan.${i + 1}.description`),
    price: t(`agentesAvanzados.plan.${i + 1}.price`),
    features: t(`agentesAvanzados.plan.${i + 1}.features`).split(','),
    capacity: t(`agentesAvanzados.plan.${i + 1}.capacity`),
    setup: t(`agentesAvanzados.plan.${i + 1}.setup`),
    extraLanguage: t(`agentesAvanzados.plan.${i + 1}.extraLanguage`),
    highlighted: i === 1,
  }));

  const relatedServices = [
    { title: t('agentesAvanzados.relatedService.1'), href: getServiceHref('automatizaciones'), icon: Bot },
    { title: t('agentesAvanzados.relatedService.2'), href: getServiceHref('sistemasGestion'), icon: Database },
    { title: t('agentesAvanzados.relatedService.3'), href: getServiceHref('software'), icon: Code2 },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/agentes-ia-avanzados'
    : 'https://www.rcwinnovation.com/en/services/advanced-ai-agents';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('agentesAvanzados.title')}
        metaTitle={t('agentesAvanzados.metaTitle')}
        metaDescription={t('agentesAvanzados.metaDescription')}
        keywords={t('agentesAvanzados.keywords')}
        canonicalUrl={canonicalUrl}
        heroImage={serviceAgentsAi}
        heroImageAlt={t('agentesAvanzados.heroImageAlt')}
        tag={t('agentesAvanzados.tag')}
        icon={Brain}
        shortDescription={t('agentesAvanzados.shortDescription')}
        introSection={{ 
          title: t('agentesAvanzados.intro.title'), 
          description: t('agentesAvanzados.intro.description') 
        }}
        capabilities={t('agentesAvanzados.capabilities').split(',')}
        applications={t('agentesAvanzados.applications').split(',')}
        features={features}
        benefitsTitle={t('agentesAvanzados.benefitsTitle')}
        benefits={t('agentesAvanzados.benefits').split(',')}
        ctaText={t('agentesAvanzados.ctaText')}
        pricingPlans={pricingPlans}
        technologies={t('agentesAvanzados.technologies').split(',')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

AgentesIAAvanzados.displayName = 'AgentesIAAvanzados';

export default AgentesIAAvanzados;
