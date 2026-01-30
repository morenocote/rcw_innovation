import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Brain, MessageSquare, Clock, DollarSign, Users, TrendingUp, Bot, Database, Code2 } from 'lucide-react';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [Clock, DollarSign, Users, TrendingUp, Brain, MessageSquare];

const AgentesIA = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`agentesIA.feature.${i + 1}.title`),
    description: t(`agentesIA.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.agentesIA[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`agentesIA.process.${i + 1}.title`),
    description: t(`agentesIA.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`agentesIA.faq.${i + 1}.question`),
    answer: t(`agentesIA.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('agentesIA.relatedService.1'), href: getServiceHref('automatizaciones'), icon: Bot },
    { title: t('agentesIA.relatedService.2'), href: getServiceHref('sistemasGestion'), icon: Database },
    { title: t('agentesIA.relatedService.3'), href: getServiceHref('software'), icon: Code2 },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/agentes-ia'
    : 'https://www.rcwinnovation.com/en/services/ai-agents';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('agentesIA.title')}
        metaTitle={t('agentesIA.metaTitle')}
        metaDescription={t('agentesIA.metaDescription')}
        keywords={t('agentesIA.keywords')}
        canonicalUrl={canonicalUrl}
        heroImage={serviceAgentsAi}
        heroImageAlt={t('agentesIA.heroImageAlt')}
        tag={t('agentesIA.tag')}
        icon={Brain}
        shortDescription={t('agentesIA.shortDescription')}
        problemTitle={t('agentesIA.problemTitle')}
        problemDescription={t('agentesIA.problemDescription')}
        solutionTitle={t('agentesIA.solutionTitle')}
        solutionDescription={t('agentesIA.solutionDescription')}
        features={features}
        benefitsTitle={t('agentesIA.benefitsTitle')}
        benefits={t('agentesIA.benefits').split(',')}
        ctaText={t('agentesIA.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

AgentesIA.displayName = 'AgentesIA';

export default AgentesIA;
