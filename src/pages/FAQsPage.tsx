import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { ArrowLeft, ChevronDown, HelpCircle, MessageCircle, CreditCard, Clock, Shield, Code, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';

const FAQsPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language, basePath } = useLanguage();
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = Array.from({ length: 9 }, (_, i) => {
    const num = i + 1;
    return {
      question: t(`faq.${num}.question`),
      answer: t(`faq.${num}.answer`),
    };
  });

  const seoData = {
    es: {
      title: 'Preguntas Frecuentes | FAQ RCW Innovation Calgary',
      description: 'Respuestas a las preguntas más comunes sobre diseño web, desarrollo de software, automatización con IA, precios, tiempos de entrega y proceso de trabajo.',
      keywords: 'FAQ diseño web Calgary, preguntas frecuentes desarrollo software, precios páginas web Calgary, tiempos entrega web, RCW Innovation FAQ',
      canonicalUrl: 'https://www.rcwinnovation.com/es/preguntas-frecuentes',
    },
    en: {
      title: 'Frequently Asked Questions | FAQ RCW Innovation Calgary',
      description: 'Answers to the most common questions about web design, software development, AI automation, pricing, delivery times, and work process.',
      keywords: 'Calgary web design FAQ, software development questions, Calgary website pricing, web delivery times, RCW Innovation FAQ',
      canonicalUrl: 'https://www.rcwinnovation.com/en/faqs',
    }
  };

  const currentSeo = seoData[language];

  const faqCategories = {
    es: [
      { icon: HelpCircle, title: 'Servicios', description: 'Qué ofrecemos y cómo trabajamos' },
      { icon: CreditCard, title: 'Precios', description: 'Inversión y formas de pago' },
      { icon: Clock, title: 'Tiempos', description: 'Plazos de entrega y procesos' },
      { icon: Shield, title: 'Seguridad', description: 'Protección de datos y propiedad' },
    ],
    en: [
      { icon: HelpCircle, title: 'Services', description: 'What we offer and how we work' },
      { icon: CreditCard, title: 'Pricing', description: 'Investment and payment options' },
      { icon: Clock, title: 'Timelines', description: 'Delivery times and processes' },
      { icon: Shield, title: 'Security', description: 'Data protection and ownership' },
    ]
  };

  const extendedFAQs = {
    es: [
      {
        category: 'Servicios',
        icon: Code,
        items: [
          {
            question: '¿Trabajan con empresas pequeñas o solo corporaciones?',
            answer: 'Trabajamos con empresas de todos los tamaños, desde emprendedores individuales hasta corporaciones. Adaptamos nuestras soluciones y presupuestos a las necesidades y capacidad de cada cliente.'
          },
          {
            question: '¿Pueden rediseñar mi sitio web existente?',
            answer: 'Sí, realizamos rediseños completos de sitios existentes. Analizamos tu sitio actual, identificamos oportunidades de mejora y creamos una nueva versión optimizada para conversión y SEO.'
          },
          {
            question: '¿Ofrecen mantenimiento después del lanzamiento?',
            answer: 'Sí, ofrecemos planes de mantenimiento mensual que incluyen actualizaciones de seguridad, backups, optimización de rendimiento y soporte técnico continuo.'
          }
        ]
      },
      {
        category: 'Tecnología',
        icon: Zap,
        items: [
          {
            question: '¿Qué tecnologías utilizan?',
            answer: 'Utilizamos React, Next.js, Node.js, Python para IA, y bases de datos como PostgreSQL y MongoDB. Elegimos la stack tecnológica según las necesidades específicas de cada proyecto.'
          },
          {
            question: '¿Los sitios son responsive y rápidos?',
            answer: 'Absolutamente. Todos nuestros proyectos están optimizados para móviles y diseñados con rendimiento como prioridad. Garantizamos tiempos de carga rápidos y excelente experiencia en cualquier dispositivo.'
          },
          {
            question: '¿Se integran con sistemas existentes?',
            answer: 'Sí, nos especializamos en integraciones con CRM, ERP, pasarelas de pago, herramientas de marketing y cualquier API que tu negocio necesite.'
          }
        ]
      },
      {
        category: 'Proceso',
        icon: Users,
        items: [
          {
            question: '¿Cómo es la comunicación durante el proyecto?',
            answer: 'Mantenemos comunicación constante a través de reuniones semanales, un tablero de proyecto compartido, y canal directo por WhatsApp o Slack para respuestas rápidas.'
          },
          {
            question: '¿Puedo ver el progreso antes del lanzamiento?',
            answer: 'Sí, recibes acceso a versiones de desarrollo donde puedes ver el progreso en tiempo real y proporcionar feedback en cada etapa del proyecto.'
          },
          {
            question: '¿Qué pasa si quiero cambios después de aprobado el diseño?',
            answer: 'Incluimos rondas de revisión en cada fase. Cambios menores dentro del alcance están incluidos. Cambios significativos se evalúan y presupuestan por separado.'
          }
        ]
      }
    ],
    en: [
      {
        category: 'Services',
        icon: Code,
        items: [
          {
            question: 'Do you work with small businesses or only corporations?',
            answer: 'We work with businesses of all sizes, from individual entrepreneurs to corporations. We adapt our solutions and budgets to each client\'s needs and capacity.'
          },
          {
            question: 'Can you redesign my existing website?',
            answer: 'Yes, we perform complete redesigns of existing sites. We analyze your current site, identify improvement opportunities, and create a new version optimized for conversion and SEO.'
          },
          {
            question: 'Do you offer maintenance after launch?',
            answer: 'Yes, we offer monthly maintenance plans that include security updates, backups, performance optimization, and ongoing technical support.'
          }
        ]
      },
      {
        category: 'Technology',
        icon: Zap,
        items: [
          {
            question: 'What technologies do you use?',
            answer: 'We use React, Next.js, Node.js, Python for AI, and databases like PostgreSQL and MongoDB. We choose the tech stack according to the specific needs of each project.'
          },
          {
            question: 'Are the sites responsive and fast?',
            answer: 'Absolutely. All our projects are mobile-optimized and designed with performance as a priority. We guarantee fast load times and excellent experience on any device.'
          },
          {
            question: 'Do you integrate with existing systems?',
            answer: 'Yes, we specialize in integrations with CRM, ERP, payment gateways, marketing tools, and any API your business needs.'
          }
        ]
      },
      {
        category: 'Process',
        icon: Users,
        items: [
          {
            question: 'How is communication during the project?',
            answer: 'We maintain constant communication through weekly meetings, a shared project board, and direct channel via WhatsApp or Slack for quick responses.'
          },
          {
            question: 'Can I see progress before launch?',
            answer: 'Yes, you receive access to development versions where you can see real-time progress and provide feedback at each stage of the project.'
          },
          {
            question: 'What if I want changes after the design is approved?',
            answer: 'We include revision rounds at each phase. Minor changes within scope are included. Significant changes are evaluated and budgeted separately.'
          }
        ]
      }
    ]
  };

  // Schema.org FAQ markup
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{currentSeo.title}</title>
        <meta name="description" content={currentSeo.description} />
        <meta name="keywords" content={currentSeo.keywords} />
        <link rel="canonical" href={currentSeo.canonicalUrl} />
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/preguntas-frecuentes" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/faqs" />
        <meta property="og:title" content={currentSeo.title} />
        <meta property="og:description" content={currentSeo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentSeo.canonicalUrl} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
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
                {t('faq.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                {t('faq.title')}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                {language === 'es'
                  ? 'Encuentra respuestas detalladas a todas tus preguntas sobre nuestros servicios, proceso de trabajo, precios y más.'
                  : 'Find detailed answers to all your questions about our services, work process, pricing, and more.'}
              </p>
            </motion.div>
          </section>

          {/* Category Overview */}
          <section className="container-custom mb-16">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {faqCategories[language].map((cat, index) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-xl bg-card/50 border border-border/30 text-center"
                >
                  <cat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <div className="font-semibold mb-1">{cat.title}</div>
                  <div className="text-sm text-muted-foreground">{cat.description}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Main FAQs */}
          <section className="bg-card/30 py-20" ref={ref}>
            <div className="container-custom max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12"
              >
                {language === 'es' ? 'Preguntas Principales' : 'Main Questions'}
              </motion.h2>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="rounded-xl overflow-hidden bg-background border border-border/30"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-card/40 transition-colors"
                      aria-expanded={openIndex === index}
                    >
                      <h3 className="font-semibold pr-4">{faq.question}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? 'auto' : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Extended FAQs by Category */}
          <section className="container-custom py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              {language === 'es' ? 'Más Preguntas por Categoría' : 'More Questions by Category'}
            </motion.h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              {language === 'es'
                ? 'Información adicional organizada por temas específicos.'
                : 'Additional information organized by specific topics.'}
            </p>

            <div className="space-y-12">
              {extendedFAQs[language].map((category, catIndex) => (
                <div key={category.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className="w-6 h-6 text-accent" />
                    <h3 className="text-2xl font-bold">{category.category}</h3>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: (catIndex * 0.1) + (itemIndex * 0.05) }}
                        className="p-6 rounded-xl bg-card/50 border border-border/30"
                      >
                        <h4 className="font-semibold mb-3">{item.question}</h4>
                        <p className="text-sm text-muted-foreground">{item.answer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Still Have Questions */}
          <section className="container-custom pb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center"
            >
              <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">
                {language === 'es' ? '¿Tienes más preguntas?' : 'Still have questions?'}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
                {language === 'es'
                  ? 'Estamos aquí para ayudarte. Agenda una llamada y resolvemos todas tus dudas personalmente.'
                  : 'We\'re here to help. Schedule a call and we\'ll personally answer all your questions.'}
              </p>
              <button 
                onClick={() => setIsConsultationOpen(true)}
                className="btn-primary"
              >
                {language === 'es' ? 'Agenda una Llamada' : 'Schedule a Call'}
              </button>
            </motion.div>
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

export default FAQsPage;
