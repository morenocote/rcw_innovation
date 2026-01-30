import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, ExternalLink, ArrowLeft, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';

import projectServiciosLatinos from '@/assets/project-servicios-latinos.jpg';
import projectAiChatbot from '@/assets/project-ai-chatbot.jpg';
import projectEcommerce from '@/assets/project-ecommerce.jpg';
import projectErpDashboard from '@/assets/project-erp-dashboard.jpg';

const projectImages = [projectServiciosLatinos, projectAiChatbot, projectEcommerce, projectErpDashboard];
const projectResults = ['#1', '2.8×', '+38%', '-31%'];
const projectLinks = ['https://servicioslatinoscanada.com/', undefined, undefined, undefined];

const ProjectsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language, basePath } = useLanguage();
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const projects = Array.from({ length: 4 }, (_, i) => {
    const num = i + 1;
    return {
      image: projectImages[i],
      title: t(`project.${num}.title`),
      description: t(`project.${num}.description`),
      result: projectResults[i],
      resultLabel: t(`project.${num}.resultLabel`),
      tags: t(`project.${num}.tags`).split(','),
      link: projectLinks[i],
    };
  });

  const projectAlts = {
    es: [
      'Marketplace Servicios Latinos Canadá - Primera plataforma web para la comunidad hispana en Calgary',
      'Suite de automatización con inteligencia artificial para atención al cliente y ventas',
      'E-commerce headless con SEO técnico avanzado para maximizar ventas orgánicas',
      'Plataforma de gestión empresarial con dashboards en tiempo real y control de permisos'
    ],
    en: [
      'Servicios Latinos Canada Marketplace - First web platform for Hispanic community in Calgary',
      'AI automation suite for customer service and sales integration',
      'Headless e-commerce with advanced technical SEO for organic sales optimization',
      'Enterprise management platform with real-time dashboards and role-based permissions'
    ]
  };

  const seoData = {
    es: {
      title: 'Proyectos y Casos de Éxito | RCW Innovation Calgary',
      description: 'Descubre nuestros proyectos exitosos: marketplaces, automatización con IA, e-commerce y sistemas de gestión. Soluciones digitales que generan resultados reales para empresas en Calgary.',
      keywords: 'proyectos web Calgary, casos de éxito diseño web, portfolio desarrollo software, automatización IA Calgary, marketplace hispano Canadá',
      canonicalUrl: 'https://www.rcwinnovation.com/es/proyectos',
    },
    en: {
      title: 'Projects and Success Stories | RCW Innovation Calgary',
      description: 'Discover our successful projects: marketplaces, AI automation, e-commerce and management systems. Digital solutions that generate real results for Calgary businesses.',
      keywords: 'Calgary web projects, web design success stories, software development portfolio, AI automation Calgary, Hispanic marketplace Canada',
      canonicalUrl: 'https://www.rcwinnovation.com/en/projects',
    }
  };

  const currentSeo = seoData[language];

  const caseStudyDetails = {
    es: [
      {
        challenge: 'La comunidad latina en Canadá carecía de una plataforma centralizada para encontrar servicios profesionales en español.',
        solution: 'Desarrollamos el primer marketplace bilingüe que conecta a profesionales hispanos con la comunidad.',
        results: ['Primera plataforma de su tipo en Canadá', 'Más de 500 proveedores registrados', 'Cobertura en Calgary y expansión nacional']
      },
      {
        challenge: 'Los tiempos de respuesta al cliente superaban las 24 horas, causando pérdida de leads.',
        solution: 'Implementamos agentes de IA integrados con CRM para respuesta automática 24/7.',
        results: ['Respuesta inmediata 24/7', '2.8x más conversiones', 'Reducción del 60% en carga operativa']
      },
      {
        challenge: 'Baja visibilidad orgánica y dependencia de publicidad pagada para generar ventas.',
        solution: 'Arquitectura headless con SEO técnico desde el diseño y analítica avanzada.',
        results: ['+38% ingresos orgánicos', 'Top 3 en keywords principales', 'Reducción de costos de adquisición']
      },
      {
        challenge: 'Procesos manuales dispersos sin visibilidad centralizada ni control de permisos.',
        solution: 'Sistema ERP personalizado con dashboards en tiempo real y roles granulares.',
        results: ['-31% tiempos operativos', 'Visibilidad completa de KPIs', 'Escalabilidad garantizada']
      }
    ],
    en: [
      {
        challenge: 'The Latino community in Canada lacked a centralized platform to find professional services in Spanish.',
        solution: 'We developed the first bilingual marketplace connecting Hispanic professionals with the community.',
        results: ['First platform of its kind in Canada', 'Over 500 registered providers', 'Coverage in Calgary with national expansion']
      },
      {
        challenge: 'Customer response times exceeded 24 hours, causing lead loss.',
        solution: 'We implemented AI agents integrated with CRM for 24/7 automatic response.',
        results: ['Immediate 24/7 response', '2.8x more conversions', '60% reduction in operational load']
      },
      {
        challenge: 'Low organic visibility and dependence on paid advertising to generate sales.',
        solution: 'Headless architecture with technical SEO from design and advanced analytics.',
        results: ['+38% organic revenue', 'Top 3 in main keywords', 'Reduced acquisition costs']
      },
      {
        challenge: 'Scattered manual processes without centralized visibility or permission control.',
        solution: 'Custom ERP system with real-time dashboards and granular roles.',
        results: ['-31% operational times', 'Complete KPI visibility', 'Guaranteed scalability']
      }
    ]
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <link rel="canonical" href={currentSeo.canonicalUrl} />
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/proyectos" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/projects" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSeo.canonicalUrl} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main className="pt-32">
          {/* Hero Section */}
          <section className="container-custom mb-16">
            <Link 
              to={basePath} 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {language === 'es' ? 'Volver al inicio' : 'Back to home'}
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                {t('projects.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                {t('projects.title')}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                {language === 'es' 
                  ? 'Conoce en detalle cómo hemos ayudado a empresas en Calgary y Latinoamérica a transformar sus procesos, aumentar conversiones y escalar sus operaciones con tecnología a medida.'
                  : 'Learn in detail how we have helped companies in Calgary and Latin America transform their processes, increase conversions, and scale their operations with custom technology.'}
              </p>
            </motion.div>
          </section>

          {/* Detailed Projects */}
          <section className="container-custom" ref={ref}>
            <div className="space-y-24">
              {projects.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="grid lg:grid-cols-2 gap-12 items-center"
                >
                  {/* Image */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative overflow-hidden rounded-2xl">
                      <img 
                        src={project.image} 
                        alt={projectAlts[language][index]}
                        className="w-full h-80 lg:h-96 object-cover"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      
                      {/* Result Badge */}
                      <div className="absolute bottom-6 left-6 p-4 rounded-xl bg-accent/10 border border-accent/20 backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <ArrowUpRight className="w-5 h-5 text-accent" />
                          <span className="text-2xl font-bold text-accent">{project.result}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{project.resultLabel}</p>
                      </div>

                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute top-6 right-6 p-3 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors backdrop-blur-sm"
                          aria-label={`Visitar ${project.title}`}
                        >
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
                    <p className="text-muted-foreground text-lg mb-6">{project.description}</p>

                    {/* Case Study Details */}
                    <div className="space-y-6">
                      <div className="p-4 rounded-xl bg-card/50 border border-border/30">
                        <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-2">
                          {language === 'es' ? 'El Desafío' : 'The Challenge'}
                        </h3>
                        <p className="text-foreground">{caseStudyDetails[language][index].challenge}</p>
                      </div>

                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                        <h3 className="font-semibold text-sm text-primary uppercase tracking-wider mb-2">
                          {language === 'es' ? 'Nuestra Solución' : 'Our Solution'}
                        </h3>
                        <p className="text-foreground">{caseStudyDetails[language][index].solution}</p>
                      </div>

                      <div>
                        <h3 className="font-semibold text-sm text-accent uppercase tracking-wider mb-3">
                          {language === 'es' ? 'Resultados' : 'Results'}
                        </h3>
                        <ul className="space-y-2">
                          {caseStudyDetails[language][index].results.map((result, i) => (
                            <li key={i} className="flex items-center gap-2 text-muted-foreground">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <div className="mt-24">
            <CTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
          </div>
        </main>

        <Footer />

        <DiagnosticModal isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
        <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      </div>
    </>
  );
};

export default ProjectsPage;
