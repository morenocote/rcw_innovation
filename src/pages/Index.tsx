import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Clients } from '@/components/Clients';
import { Services } from '@/components/Services';
import { Metrics } from '@/components/Metrics';
import { Projects } from '@/components/Projects';
import { WhyUs } from '@/components/WhyUs';
import { AboutUs } from '@/components/AboutUs';
import { JoinTeam } from '@/components/JoinTeam';
import { Process } from '@/components/Process';
import { FAQ } from '@/components/FAQ';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

import { ElevenLabsWidget } from '@/components/ElevenLabsWidget';
import { Chatbot } from '@/components/Chatbot';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const { language } = useLanguage();

  const seoData = {
    es: {
      title: 'Diseño de Páginas Web en Calgary | RCW Innovation Canadá',
      description: 'Líder en desarrollo web en Calgary y Colombia. Servicios de software a medida, automatización con IA, diseño web profesional y transformación digital con visión global e innovación.',
      keywords: 'diseño web Calgary, marketing digital Calgary, desarrollo de software Calgary, automatización con IA, ERP CRM Calgary, transformación digital, RCW Innovation, páginas web Calgary, landing pages Calgary, agentes IA Calgary',
      locale: 'es_CA',
      canonicalUrl: 'https://www.rcwinnovation.com/es',
    },
    en: {
      title: 'Web Design in Calgary | RCW Innovation Canada',
      description: 'Leader in web development in Calgary and Colombia. Custom software services, AI automation, professional web design and digital transformation with global vision and innovation.',
      keywords: 'web design Calgary, digital marketing Calgary, software development Calgary, AI automation, ERP CRM Calgary, digital transformation, RCW Innovation, websites Calgary, landing pages Calgary, AI agents Calgary',
      locale: 'en_CA',
      canonicalUrl: 'https://www.rcwinnovation.com/en',
    }
  };

  const currentSeo = seoData[language];

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentSeo.title}</title>
        <meta 
          name="description" 
          content={currentSeo.description} 
        />
        <meta name="keywords" content={currentSeo.keywords} />
        <meta name="author" content="RCW Innovation Inc" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={currentSeo.canonicalUrl} />
        
        {/* Alternate language links for SEO */}
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.rcwinnovation.com/es" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:url" content={currentSeo.canonicalUrl} />
        <meta property="og:locale" content={currentSeo.locale} />
        <meta property="og:site_name" content="RCW Innovation Inc" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSeo.title} />
        <meta name="twitter:description" content={currentSeo.description} />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#0a0d14" />
      </Helmet>

      <SchemaMarkup />

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
        
        <main>
          <Hero 
            onOpenDiagnostic={() => setIsDiagnosticOpen(true)} 
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />
          <Clients />
          <Services onOpenConsultation={() => setIsConsultationOpen(true)} onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
          <Metrics />
          <Projects />
          <WhyUs />
          <AboutUs />
          <JoinTeam />
          <Process />
          <FAQ />
          <CTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        </main>

        <Footer />

        {/* Floating Elements */}
        <ElevenLabsWidget />
        <Chatbot onOpenConsultation={() => setIsConsultationOpen(true)} />
        
        {/* Modals */}
        <DiagnosticModal 
          isOpen={isDiagnosticOpen} 
          onClose={() => setIsDiagnosticOpen(false)} 
        />
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
        />
      </div>
    </>
  );
};

export default Index;
