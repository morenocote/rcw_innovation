import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { 
  Share2, 
  Palette, 
  TrendingUp, 
  Users, 
  FileText, 
  Target,
  Globe,
  GraduationCap,
  Code2
} from 'lucide-react';
import serviceBrandingSocial from '@/assets/service-branding-social.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [Palette, Target, FileText, TrendingUp, Users, Share2];

const BrandingRedesSociales = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`branding.feature.${i + 1}.title`),
    description: t(`branding.feature.${i + 1}.description`),
    icon: featureIcons[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`branding.process.${i + 1}.title`),
    description: t(`branding.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`branding.faq.${i + 1}.question`),
    answer: t(`branding.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('branding.relatedService.1'), href: '/diseno-web-app-movil-calgary', icon: Globe },
    { title: t('branding.relatedService.2'), href: '/mentoria-capacitacion-digital-calgary', icon: GraduationCap },
    { title: t('branding.relatedService.3'), href: '/diseno-software-medida-premium-calgary', icon: Code2 },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('branding.title')}
        metaTitle={t('branding.metaTitle')}
        metaDescription={t('branding.metaDescription')}
        keywords={t('branding.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/branding-estrategia-redes-sociales-calgary"
        heroImage={serviceBrandingSocial}
        heroImageAlt={t('branding.heroImageAlt')}
        tag={t('branding.tag')}
        icon={Share2}
        shortDescription={t('branding.shortDescription')}
        problemTitle={t('branding.problemTitle')}
        problemDescription={t('branding.problemDescription')}
        solutionTitle={t('branding.solutionTitle')}
        solutionDescription={t('branding.solutionDescription')}
        features={features}
        benefitsTitle={t('branding.benefitsTitle')}
        benefits={t('branding.benefits').split(',')}
        ctaText={t('branding.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

BrandingRedesSociales.displayName = 'BrandingRedesSociales';

export default BrandingRedesSociales;
