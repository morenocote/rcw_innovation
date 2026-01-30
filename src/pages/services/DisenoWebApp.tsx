import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Globe, Search, ShoppingCart, Smartphone, CreditCard, Gauge, Share2, GraduationCap, Bot } from 'lucide-react';
import serviceWebAppDesign from '@/assets/service-web-app-design.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [Search, ShoppingCart, Smartphone, Gauge, CreditCard, Globe];

const DisenoWebApp = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`webApp.feature.${i + 1}.title`),
    description: t(`webApp.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.webApp[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`webApp.process.${i + 1}.title`),
    description: t(`webApp.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`webApp.faq.${i + 1}.question`),
    answer: t(`webApp.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('webApp.relatedService.1'), href: getServiceHref('branding'), icon: Share2 },
    { title: t('webApp.relatedService.2'), href: getServiceHref('mentoria'), icon: GraduationCap },
    { title: t('webApp.relatedService.3'), href: getServiceHref('automatizaciones'), icon: Bot },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/diseno-web-app'
    : 'https://www.rcwinnovation.com/en/services/web-app-design';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('webApp.title')}
        metaTitle={t('webApp.metaTitle')}
        metaDescription={t('webApp.metaDescription')}
        keywords={t('webApp.keywords')}
        canonicalUrl={canonicalUrl}
        heroImage={serviceWebAppDesign}
        heroImageAlt={t('webApp.heroImageAlt')}
        tag={t('webApp.tag')}
        icon={Globe}
        shortDescription={t('webApp.shortDescription')}
        problemTitle={t('webApp.problemTitle')}
        problemDescription={t('webApp.problemDescription')}
        solutionTitle={t('webApp.solutionTitle')}
        solutionDescription={t('webApp.solutionDescription')}
        features={features}
        benefitsTitle={t('webApp.benefitsTitle')}
        benefits={t('webApp.benefits').split(',')}
        ctaText={t('webApp.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

DisenoWebApp.displayName = 'DisenoWebApp';

export default DisenoWebApp;
