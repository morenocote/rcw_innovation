import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Brain, MessageSquare, Clock, DollarSign, Users, TrendingUp, Bot, Database, Code2 } from 'lucide-react';
import serviceAgentsAi from '@/assets/service-agents-ai.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [Clock, DollarSign, Users, TrendingUp, Brain, MessageSquare];

const AgentesIA = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`agentesIA.feature.${i + 1}.title`),
    description: t(`agentesIA.feature.${i + 1}.description`),
    icon: featureIcons[i],
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
    { title: t('agentesIA.relatedService.1'), href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
    { title: t('agentesIA.relatedService.2'), href: '/sistemas-gestion-operaciones-calgary', icon: Database },
    { title: t('agentesIA.relatedService.3'), href: '/diseno-software-medida-premium-calgary', icon: Code2 },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('agentesIA.title')}
        metaTitle={t('agentesIA.metaTitle')}
        metaDescription={t('agentesIA.metaDescription')}
        keywords={t('agentesIA.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/creacion-agentes-ia-inteligencia-calgary"
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
