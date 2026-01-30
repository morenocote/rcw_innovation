import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { CreditCard, QrCode, Smartphone, RefreshCw, Users, Share2, Globe, Code2 } from 'lucide-react';
import serviceDigitalCard from '@/assets/service-digital-card.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [QrCode, Smartphone, RefreshCw, Users, Share2, Smartphone];

const TarjetaDigital = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`tarjeta.feature.${i + 1}.title`),
    description: t(`tarjeta.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.tarjetaDigital[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`tarjeta.process.${i + 1}.title`),
    description: t(`tarjeta.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`tarjeta.faq.${i + 1}.question`),
    answer: t(`tarjeta.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('tarjeta.relatedService.1'), href: getServiceHref('webApp'), icon: Globe },
    { title: t('tarjeta.relatedService.2'), href: getServiceHref('branding'), icon: Share2 },
    { title: t('tarjeta.relatedService.3'), href: getServiceHref('software'), icon: Code2 },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/tarjeta-digital'
    : 'https://www.rcwinnovation.com/en/services/digital-business-card';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('tarjeta.title')}
        metaTitle={t('tarjeta.metaTitle')}
        metaDescription={t('tarjeta.metaDescription')}
        keywords={t('tarjeta.keywords')}
        canonicalUrl={canonicalUrl}
        heroImage={serviceDigitalCard}
        heroImageAlt={t('tarjeta.heroImageAlt')}
        tag={t('tarjeta.tag')}
        icon={CreditCard}
        shortDescription={t('tarjeta.shortDescription')}
        problemTitle={t('tarjeta.problemTitle')}
        problemDescription={t('tarjeta.problemDescription')}
        solutionTitle={t('tarjeta.solutionTitle')}
        solutionDescription={t('tarjeta.solutionDescription')}
        features={features}
        benefitsTitle={t('tarjeta.benefitsTitle')}
        benefits={t('tarjeta.benefits').split(',')}
        ctaText={t('tarjeta.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

TarjetaDigital.displayName = 'TarjetaDigital';

export default TarjetaDigital;
