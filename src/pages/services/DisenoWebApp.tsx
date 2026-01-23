import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { Globe, Search, ShoppingCart, Smartphone, CreditCard, Gauge, Share2, GraduationCap, Bot } from 'lucide-react';
import serviceWebAppDesign from '@/assets/service-web-app-design.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [Search, ShoppingCart, Smartphone, Gauge, CreditCard, Globe];

const DisenoWebApp = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`webApp.feature.${i + 1}.title`),
    description: t(`webApp.feature.${i + 1}.description`),
    icon: featureIcons[i],
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
    { title: t('webApp.relatedService.1'), href: '/branding-estrategia-redes-sociales-calgary', icon: Share2 },
    { title: t('webApp.relatedService.2'), href: '/mentoria-capacitacion-digital-calgary', icon: GraduationCap },
    { title: t('webApp.relatedService.3'), href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('webApp.title')}
        metaTitle={t('webApp.metaTitle')}
        metaDescription={t('webApp.metaDescription')}
        keywords={t('webApp.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/diseno-web-app-movil-calgary"
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
