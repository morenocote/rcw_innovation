import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Code2, Layers, Shield, Gauge, Link2, Headphones, Bot, Database, Brain } from 'lucide-react';
import serviceSoftwareCustom from '@/assets/service-software-custom.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [Gauge, Shield, Bot, Layers, Link2, Headphones];

const SoftwareAMedida = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`software.feature.${i + 1}.title`),
    description: t(`software.feature.${i + 1}.description`),
    icon: featureIcons[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`software.process.${i + 1}.title`),
    description: t(`software.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`software.faq.${i + 1}.question`),
    answer: t(`software.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('software.relatedService.1'), href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
    { title: t('software.relatedService.2'), href: '/sistemas-gestion-operaciones-calgary', icon: Database },
    { title: t('software.relatedService.3'), href: '/creacion-agentes-ia-inteligencia-calgary', icon: Brain },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('software.title')}
        metaTitle={t('software.metaTitle')}
        metaDescription={t('software.metaDescription')}
        keywords={t('software.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/diseno-software-medida-premium-calgary"
        heroImage={serviceSoftwareCustom}
        heroImageAlt={t('software.heroImageAlt')}
        tag={t('software.tag')}
        icon={Code2}
        shortDescription={t('software.shortDescription')}
        problemTitle={t('software.problemTitle')}
        problemDescription={t('software.problemDescription')}
        solutionTitle={t('software.solutionTitle')}
        solutionDescription={t('software.solutionDescription')}
        features={features}
        benefitsTitle={t('software.benefitsTitle')}
        benefits={t('software.benefits').split(',')}
        ctaText={t('software.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

SoftwareAMedida.displayName = 'SoftwareAMedida';

export default SoftwareAMedida;
