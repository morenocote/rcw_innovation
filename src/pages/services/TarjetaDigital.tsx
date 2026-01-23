import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { CreditCard, QrCode, Smartphone, RefreshCw, Users, Share2, Globe, Code2 } from 'lucide-react';
import serviceDigitalCard from '@/assets/service-digital-card.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [QrCode, Smartphone, RefreshCw, Users, Share2, Smartphone];

const TarjetaDigital = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`tarjeta.feature.${i + 1}.title`),
    description: t(`tarjeta.feature.${i + 1}.description`),
    icon: featureIcons[i],
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
    { title: t('tarjeta.relatedService.1'), href: '/diseno-web-app-movil-calgary', icon: Globe },
    { title: t('tarjeta.relatedService.2'), href: '/branding-estrategia-redes-sociales-calgary', icon: Share2 },
    { title: t('tarjeta.relatedService.3'), href: '/diseno-software-medida-premium-calgary', icon: Code2 },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('tarjeta.title')}
        metaTitle={t('tarjeta.metaTitle')}
        metaDescription={t('tarjeta.metaDescription')}
        keywords={t('tarjeta.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/tarjeta-digital-profesional-calgary"
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
