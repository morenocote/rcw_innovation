import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { GraduationCap, Users, Video, BookOpen, Target, Award, Globe, Share2, Bot } from 'lucide-react';
import serviceMentoringTraining from '@/assets/service-mentoring-training.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';
import { serviceRoutes } from '@/config/routes';
import { serviceFeatureImages } from '@/config/featureImages';

const featureIcons = [Target, Users, BookOpen, Video, Target, Award];

const MentoriaCapacitacion = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  // Helper to get localized service path
  const getServiceHref = (key: string) => {
    const route = serviceRoutes.find(r => r.key === key);
    return route ? `/${language}/${route[language]}` : `/${language}`;
  };

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`mentoria.feature.${i + 1}.title`),
    description: t(`mentoria.feature.${i + 1}.description`),
    icon: featureIcons[i],
    image: serviceFeatureImages.mentoria[i],
  }));

  const processSteps = Array.from({ length: 5 }, (_, i) => ({
    title: t(`mentoria.process.${i + 1}.title`),
    description: t(`mentoria.process.${i + 1}.description`),
  }));

  const faqs = Array.from({ length: 5 }, (_, i) => ({
    question: t(`mentoria.faq.${i + 1}.question`),
    answer: t(`mentoria.faq.${i + 1}.answer`),
  }));

  const relatedServices = [
    { title: t('mentoria.relatedService.1'), href: getServiceHref('webApp'), icon: Globe },
    { title: t('mentoria.relatedService.2'), href: getServiceHref('branding'), icon: Share2 },
    { title: t('mentoria.relatedService.3'), href: getServiceHref('automatizaciones'), icon: Bot },
  ];

  // Canonical URL based on language
  const canonicalUrl = language === 'es' 
    ? 'https://www.rcwinnovation.com/es/servicios/mentoria-capacitacion'
    : 'https://www.rcwinnovation.com/en/services/mentoring-training';

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('mentoria.title')}
        metaTitle={t('mentoria.metaTitle')}
        metaDescription={t('mentoria.metaDescription')}
        keywords={t('mentoria.keywords')}
        canonicalUrl={canonicalUrl}
        heroImage={serviceMentoringTraining}
        heroImageAlt={t('mentoria.heroImageAlt')}
        tag={t('mentoria.tag')}
        icon={GraduationCap}
        shortDescription={t('mentoria.shortDescription')}
        problemTitle={t('mentoria.problemTitle')}
        problemDescription={t('mentoria.problemDescription')}
        solutionTitle={t('mentoria.solutionTitle')}
        solutionDescription={t('mentoria.solutionDescription')}
        features={features}
        benefitsTitle={t('mentoria.benefitsTitle')}
        benefits={t('mentoria.benefits').split(',')}
        ctaText={t('mentoria.ctaText')}
        processSteps={processSteps}
        faqs={faqs}
        relatedServices={relatedServices}
      />
    </div>
  );
});

MentoriaCapacitacion.displayName = 'MentoriaCapacitacion';

export default MentoriaCapacitacion;
