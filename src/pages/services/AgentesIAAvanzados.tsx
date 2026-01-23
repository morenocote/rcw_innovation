import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Brain, MessageSquare, Eye, TrendingUp, Shield, Zap, Bot, Database, Code2 } from 'lucide-react';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [MessageSquare, Eye, TrendingUp, Shield, Zap, Brain];

const AgentesIAAvanzados = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`agentesAvanzados.feature.${i + 1}.title`),
    description: t(`agentesAvanzados.feature.${i + 1}.description`),
    icon: featureIcons[i],
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
    { title: t('agentesAvanzados.relatedService.1'), href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
    { title: t('agentesAvanzados.relatedService.2'), href: '/sistemas-gestion-operaciones-calgary', icon: Database },
    { title: t('agentesAvanzados.relatedService.3'), href: '/diseno-software-medida-premium-calgary', icon: Code2 },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('agentesAvanzados.title')}
        metaTitle={t('agentesAvanzados.metaTitle')}
        metaDescription={t('agentesAvanzados.metaDescription')}
        keywords={t('agentesAvanzados.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/agentes-ia-avanzados-calgary"
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
