import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { ArrowLeft, Search, Palette, Code2, Rocket, TrendingUp, CheckCircle, Clock, Users, FileText, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';

const stepIcons = [Search, Palette, Code2, Rocket, TrendingUp];

const ProcessPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language, basePath } = useLanguage();
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const steps = Array.from({ length: 5 }, (_, i) => {
    const num = i + 1;
    return {
      icon: stepIcons[i],
      title: t(`process.step.${num}.title`),
      description: t(`process.step.${num}.description`),
    };
  });

  const seoData = {
    es: {
      title: 'Proceso de Trabajo | Metodología RCW Innovation Calgary',
      description: 'Conoce nuestro proceso de 5 pasos: Descubrimiento, Diseño, Desarrollo, Implementación y Optimización. Metodología ágil para resultados medibles en 2-12 semanas.',
      keywords: 'proceso desarrollo web Calgary, metodología ágil, fases proyecto software, timeline proyecto web, RCW Innovation proceso',
      canonicalUrl: 'https://www.rcwinnovation.com/es/proceso',
    },
    en: {
      title: 'Work Process | RCW Innovation Calgary Methodology',
      description: 'Discover our 5-step process: Discovery, Design, Development, Implementation, and Optimization. Agile methodology for measurable results in 2-12 weeks.',
      keywords: 'Calgary web development process, agile methodology, software project phases, web project timeline, RCW Innovation process',
      canonicalUrl: 'https://www.rcwinnovation.com/en/process',
    }
  };

  const currentSeo = seoData[language];

  const detailedSteps = {
    es: [
      {
        duration: '1-2 semanas',
        deliverables: ['Análisis de requisitos', 'Estudio de competencia', 'Definición de KPIs', 'Roadmap inicial'],
        description: 'Comenzamos con una inmersión profunda en tu negocio. Entendemos tus objetivos, analizamos tu competencia y definimos métricas claras de éxito. El resultado es un plan de acción personalizado.'
      },
      {
        duration: '1-2 semanas',
        deliverables: ['Wireframes interactivos', 'Diseño UI/UX completo', 'Arquitectura técnica', 'Prototipos clickeables'],
        description: 'Creamos la experiencia visual y la estructura técnica de tu proyecto. Cada diseño está optimizado para conversión y usabilidad, siguiendo las mejores prácticas de UX.'
      },
      {
        duration: '2-6 semanas',
        deliverables: ['Código limpio y documentado', 'Pruebas automatizadas', 'Integraciones API', 'Versiones iterativas'],
        description: 'Implementamos tu proyecto con metodología ágil. Recibes actualizaciones semanales y acceso a versiones de prueba para feedback continuo.'
      },
      {
        duration: '1 semana',
        deliverables: ['Despliegue en producción', 'Configuración de dominios', 'Capacitación del equipo', 'Documentación técnica'],
        description: 'Lanzamos tu proyecto con un proceso de implementación probado. Incluye capacitación para tu equipo y toda la documentación necesaria.'
      },
      {
        duration: 'Continuo',
        deliverables: ['Reportes mensuales de KPIs', 'Ajustes basados en datos', 'Soporte técnico', 'Mejoras incrementales'],
        description: 'El lanzamiento es solo el comienzo. Monitoreamos el rendimiento, analizamos datos y realizamos optimizaciones continuas para maximizar resultados.'
      }
    ],
    en: [
      {
        duration: '1-2 weeks',
        deliverables: ['Requirements analysis', 'Competition study', 'KPI definition', 'Initial roadmap'],
        description: 'We start with a deep dive into your business. We understand your goals, analyze your competition, and define clear success metrics. The result is a personalized action plan.'
      },
      {
        duration: '1-2 weeks',
        deliverables: ['Interactive wireframes', 'Complete UI/UX design', 'Technical architecture', 'Clickable prototypes'],
        description: 'We create the visual experience and technical structure of your project. Every design is optimized for conversion and usability, following UX best practices.'
      },
      {
        duration: '2-6 weeks',
        deliverables: ['Clean, documented code', 'Automated testing', 'API integrations', 'Iterative versions'],
        description: 'We implement your project with agile methodology. You receive weekly updates and access to test versions for continuous feedback.'
      },
      {
        duration: '1 week',
        deliverables: ['Production deployment', 'Domain configuration', 'Team training', 'Technical documentation'],
        description: 'We launch your project with a proven implementation process. Includes training for your team and all necessary documentation.'
      },
      {
        duration: 'Ongoing',
        deliverables: ['Monthly KPI reports', 'Data-driven adjustments', 'Technical support', 'Incremental improvements'],
        description: 'Launch is just the beginning. We monitor performance, analyze data, and make continuous optimizations to maximize results.'
      }
    ]
  };

  const timelineProjects = {
    es: [
      { type: 'Landing Page', time: '2-3 semanas', icon: FileText },
      { type: 'Sitio Web Corporativo', time: '3-4 semanas', icon: Settings },
      { type: 'E-commerce', time: '4-6 semanas', icon: Code2 },
      { type: 'Aplicación Web Completa', time: '6-12 semanas', icon: Rocket },
    ],
    en: [
      { type: 'Landing Page', time: '2-3 weeks', icon: FileText },
      { type: 'Corporate Website', time: '3-4 weeks', icon: Settings },
      { type: 'E-commerce', time: '4-6 weeks', icon: Code2 },
      { type: 'Full Web Application', time: '6-12 weeks', icon: Rocket },
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
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/proceso" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/process" />
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
                {t('process.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                {t('process.title')}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Un proceso transparente, eficiente y probado que garantiza resultados medibles en cada etapa de tu proyecto digital.'
                  : 'A transparent, efficient, and proven process that guarantees measurable results at every stage of your digital project.'}
              </p>
            </motion.div>
          </section>

          {/* Timeline Overview */}
          <section className="container-custom mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-bold text-center mb-8"
            >
              {language === 'es' ? 'Tiempos Estimados por Proyecto' : 'Estimated Timelines by Project'}
            </motion.h2>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {timelineProjects[language].map((project, index) => (
                <motion.div
                  key={project.type}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/30 text-center"
                >
                  <project.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">{project.type}</div>
                  <div className="text-accent font-bold">{project.time}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Detailed Process Steps */}
          <section className="bg-card/30 py-20" ref={ref}>
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-4"
              >
                {language === 'es' ? 'Las 5 Fases de Tu Proyecto' : 'The 5 Phases of Your Project'}
              </motion.h2>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                {language === 'es'
                  ? 'Cada fase está diseñada para maximizar valor y minimizar riesgos. Tú tienes visibilidad completa en todo momento.'
                  : 'Each phase is designed to maximize value and minimize risks. You have complete visibility at all times.'}
              </p>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="grid lg:grid-cols-3 gap-6 p-8 rounded-2xl bg-background border border-border/30"
                  >
                    {/* Step Header */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <span className="text-sm text-primary font-semibold">
                            {language === 'es' ? `Fase ${index + 1}` : `Phase ${index + 1}`}
                          </span>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{detailedSteps[language][index].duration}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-1">
                      <p className="text-muted-foreground">
                        {detailedSteps[language][index].description}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="lg:col-span-1">
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-accent">
                        {language === 'es' ? 'Entregables' : 'Deliverables'}
                      </h4>
                      <ul className="space-y-2">
                        {detailedSteps[language][index].deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Communication Promise */}
          <section className="container-custom py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {language === 'es' ? 'Comunicación Transparente' : 'Transparent Communication'}
                </h2>
                <p className="text-muted-foreground text-lg mb-6">
                  {language === 'es'
                    ? 'No te dejamos esperando. Recibes actualizaciones regulares, acceso a versiones de prueba y un canal directo con tu equipo de proyecto.'
                    : 'We don\'t leave you waiting. You receive regular updates, access to test versions, and a direct channel with your project team.'}
                </p>
                <ul className="space-y-4">
                  {(language === 'es' 
                    ? ['Reuniones semanales de seguimiento', 'Acceso a tablero de proyecto', 'Canal directo por WhatsApp/Slack', 'Demos interactivas cada sprint']
                    : ['Weekly follow-up meetings', 'Access to project board', 'Direct channel via WhatsApp/Slack', 'Interactive demos each sprint']
                  ).map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Users className="w-10 h-10 text-primary" />
                  <h3 className="text-2xl font-bold">
                    {language === 'es' ? 'Tu Equipo Dedicado' : 'Your Dedicated Team'}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  {language === 'es'
                    ? 'Cada proyecto tiene un equipo asignado que conoce tus objetivos y trabaja exclusivamente en tu éxito.'
                    : 'Each project has an assigned team that knows your goals and works exclusively on your success.'}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {(language === 'es'
                    ? ['Project Manager', 'Diseñador UI/UX', 'Desarrollador Senior', 'QA & Testing']
                    : ['Project Manager', 'UI/UX Designer', 'Senior Developer', 'QA & Testing']
                  ).map((role, i) => (
                    <div key={i} className="p-3 rounded-lg bg-background/50 text-center text-sm font-medium">
                      {role}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <CTA onOpenDiagnostic={() => setIsDiagnosticOpen(true)} />
        </main>

        <Footer />

        <DiagnosticModal isOpen={isDiagnosticOpen} onClose={() => setIsDiagnosticOpen(false)} />
        <ConsultationModal isOpen={isConsultationOpen} onClose={() => setIsConsultationOpen(false)} />
      </div>
    </>
  );
};

export default ProcessPage;
