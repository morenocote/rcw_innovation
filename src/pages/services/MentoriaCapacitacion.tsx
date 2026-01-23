import { forwardRef } from 'react';
import { ServicePageLayout } from '@/components/ServicePageLayout';
import { GraduationCap, Users, Video, BookOpen, Target, Award, Globe, Share2, Bot } from 'lucide-react';
import serviceMentoringTraining from '@/assets/service-mentoring-training.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { serviceTranslations } from '@/i18n/serviceTranslations';

const featureIcons = [Target, Users, BookOpen, Video, Target, Award];

const MentoriaCapacitacion = forwardRef<HTMLDivElement>((_, ref) => {
  const { language } = useLanguage();
  const t = (key: string) => serviceTranslations[language][key as keyof typeof serviceTranslations['es']] || key;

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`mentoria.feature.${i + 1}.title`),
    description: t(`mentoria.feature.${i + 1}.description`),
    icon: featureIcons[i],
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
    { title: t('mentoria.relatedService.1'), href: '/diseno-web-app-movil-calgary', icon: Globe },
    { title: t('mentoria.relatedService.2'), href: '/branding-estrategia-redes-sociales-calgary', icon: Share2 },
    { title: t('mentoria.relatedService.3'), href: '/automatizaciones-ia-operaciones-calgary', icon: Bot },
  ];

  return (
    <div ref={ref}>
      <ServicePageLayout
        title={t('mentoria.title')}
        metaTitle={t('mentoria.metaTitle')}
        metaDescription={t('mentoria.metaDescription')}
        keywords={t('mentoria.keywords')}
        canonicalUrl="https://www.rcwinnovation.com/mentoria-capacitacion-digital-calgary"
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
