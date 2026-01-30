import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { ArrowLeft, Users, Award, Clock, MessageSquare, Star, TrendingUp, CheckCircle, Zap, Target, Shield, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTA } from '@/components/CTA';
import { useLanguage } from '@/contexts/LanguageContext';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';

const reasonIcons = [Users, Award, Clock, MessageSquare, Star, TrendingUp];

const ValuePage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language, basePath } = useLanguage();
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  const reasons = Array.from({ length: 6 }, (_, i) => {
    const num = i + 1;
    return {
      icon: reasonIcons[i],
      title: t(`whyUs.reason.${num}.title`),
      description: t(`whyUs.reason.${num}.description`),
    };
  });

  const testimonials = Array.from({ length: 3 }, (_, i) => {
    const num = i + 1;
    return {
      name: t(`whyUs.testimonial.${num}.name`),
      company: t(`whyUs.testimonial.${num}.company`),
      text: t(`whyUs.testimonial.${num}.text`),
      rating: 5,
    };
  });

  const seoData = {
    es: {
      title: 'Valor Diferencial | Por qué elegir RCW Innovation Calgary',
      description: 'Descubre por qué somos la agencia de diseño web líder para la comunidad hispana en Calgary. Atención en español, calidad premium, entrega rápida y resultados medibles.',
      keywords: 'agencia diseño web Calgary, por qué elegirnos, valor diferencial RCW Innovation, diseño web español Calgary, servicios premium web',
      canonicalUrl: 'https://www.rcwinnovation.com/es/valor-diferencial',
    },
    en: {
      title: 'Our Value | Why Choose RCW Innovation Calgary',
      description: 'Discover why we are the leading web design agency for the Hispanic community in Calgary. Spanish support, premium quality, fast delivery, and measurable results.',
      keywords: 'Calgary web design agency, why choose us, RCW Innovation value, Spanish web design Calgary, premium web services',
      canonicalUrl: 'https://www.rcwinnovation.com/en/value',
    }
  };

  const currentSeo = seoData[language];

  const extendedDifferentiators = {
    es: [
      {
        icon: Target,
        title: 'Enfoque en Resultados, No Entregables',
        description: 'No vendemos páginas web ni aplicaciones. Diseñamos sistemas digitales que generan conversiones, leads y crecimiento medible para tu negocio.'
      },
      {
        icon: Zap,
        title: 'Tecnología de Vanguardia',
        description: 'Utilizamos las últimas herramientas en IA, automatización y desarrollo web para crear soluciones que te mantienen competitivo en el mercado digital.'
      },
      {
        icon: Shield,
        title: 'Seguridad y Cumplimiento',
        description: 'Implementamos las mejores prácticas de seguridad, NDAs y cumplimiento normativo para proteger tu información y la de tus clientes.'
      },
      {
        icon: Globe,
        title: 'Visión Global, Ejecución Local',
        description: 'Combinamos experiencia internacional con conocimiento profundo del mercado de Calgary para crear soluciones que funcionan en tu contexto específico.'
      }
    ],
    en: [
      {
        icon: Target,
        title: 'Results-Focused, Not Deliverables',
        description: 'We don\'t sell websites or apps. We design digital systems that generate conversions, leads, and measurable growth for your business.'
      },
      {
        icon: Zap,
        title: 'Cutting-Edge Technology',
        description: 'We use the latest tools in AI, automation, and web development to create solutions that keep you competitive in the digital market.'
      },
      {
        icon: Shield,
        title: 'Security and Compliance',
        description: 'We implement best security practices, NDAs, and regulatory compliance to protect your information and that of your customers.'
      },
      {
        icon: Globe,
        title: 'Global Vision, Local Execution',
        description: 'We combine international experience with deep knowledge of the Calgary market to create solutions that work in your specific context.'
      }
    ]
  };

  const metrics = {
    es: [
      { value: '50+', label: 'Proyectos Exitosos', description: 'Para emprendedores y empresas en Calgary y Latinoamérica' },
      { value: '10+', label: 'Años de Experiencia', description: 'En ingeniería, diseño y transformación digital' },
      { value: '2-4', label: 'Semanas de Entrega', description: 'Para proyectos web sin sacrificar calidad' },
      { value: '100%', label: 'Satisfacción', description: 'Clientes que nos recomiendan activamente' }
    ],
    en: [
      { value: '50+', label: 'Successful Projects', description: 'For entrepreneurs and businesses in Calgary and Latin America' },
      { value: '10+', label: 'Years of Experience', description: 'In engineering, design, and digital transformation' },
      { value: '2-4', label: 'Weeks Delivery', description: 'For web projects without sacrificing quality' },
      { value: '100%', label: 'Satisfaction', description: 'Clients who actively recommend us' }
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
        <link rel="alternate" hrefLang="es" href="https://www.rcwinnovation.com/es/valor-diferencial" />
        <link rel="alternate" hrefLang="en" href="https://www.rcwinnovation.com/en/value" />
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
              <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                {t('whyUs.badge')}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
                {t('whyUs.title')}
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto whitespace-pre-line">
                {t('whyUs.descriptionDesktop')}
              </p>
            </motion.div>
          </section>

          {/* Metrics Section */}
          <section className="container-custom mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {metrics[language].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card/50 border border-border/30"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{metric.value}</div>
                  <div className="font-semibold mb-1">{metric.label}</div>
                  <div className="text-sm text-muted-foreground">{metric.description}</div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Core Reasons */}
          <section className="bg-card/30 py-20" ref={ref}>
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12"
              >
                {language === 'es' ? '6 Razones para Elegirnos' : '6 Reasons to Choose Us'}
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-4 p-6 rounded-2xl border border-border/30 bg-background hover:border-accent/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <reason.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{reason.title}</h3>
                      <p className="text-muted-foreground">{reason.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Extended Differentiators */}
          <section className="container-custom py-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              {language === 'es' ? 'Nuestro Enfoque Único' : 'Our Unique Approach'}
            </motion.h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              {language === 'es' 
                ? 'Lo que nos diferencia de otras agencias en Calgary y nos convierte en tu mejor aliado digital.'
                : 'What sets us apart from other agencies in Calgary and makes us your best digital ally.'}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {extendedDifferentiators[language].map((diff, index) => (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <diff.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{diff.title}</h3>
                  <p className="text-muted-foreground">{diff.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-card/30 py-20">
            <div className="container-custom">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12"
              >
                {t('whyUs.testimonials.title')}
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.blockquote
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 rounded-2xl bg-background border border-border/30"
                  >
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                    <footer>
                      <cite className="not-italic">
                        <span className="font-semibold block">{testimonial.name}</span>
                        <span className="text-sm text-muted-foreground">{testimonial.company}</span>
                      </cite>
                    </footer>
                  </motion.blockquote>
                ))}
              </div>
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

export default ValuePage;
