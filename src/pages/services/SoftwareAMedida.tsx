import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Code2, Layers, Shield, Gauge, Link2, Headphones, Bot, Database, Brain } from 'lucide-react';
import serviceSoftwareCustom from '@/assets/service-software-custom.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [Gauge, Shield, Bot, Layers, Link2, Headphones];

const SoftwareAMedida = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`software.feature.${i + 1}.title`),
    description: t(`software.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.software[i],
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
    { title: t('software.relatedService.1'), href: getServiceHref('automatizaciones'), icon: Bot },
    { title: t('software.relatedService.2'), href: getServiceHref('sistemasGestion'), icon: Database },
    { title: t('software.relatedService.3'), href: getServiceHref('agentesIA'), icon: Brain },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/software-a-medida'
    : 'https://www.rcwinnovation.com/en/services/custom-software';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('software.title')}
        metaTitle={t('software.metaTitle')}
        metaDescription={t('software.metaDescription')}
        keywords={t('software.keywords')}
        canonicalUrl={canonicalUrl}
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
