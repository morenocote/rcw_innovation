import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Calendar, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Chatbot } from '@/components/Chatbot';
import { DiagnosticModal } from '@/components/DiagnosticModal';
import { ConsultationModal } from '@/components/ConsultationModal';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ProblemSolutionJourney } from '@/components/ProblemSolutionJourney';
interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  capacity?: string;
  setup?: string;
  extraLanguage?: string;
  highlighted?: boolean;
}

interface ServicePageLayoutProps {
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  canonicalUrl?: string;
  heroImage: string;
  heroImageAlt: string;
  tag: string;
  icon: LucideIcon;
  shortDescription: string;
  problemTitle?: string;
  problemDescription?: string;
  solutionTitle?: string;
  solutionDescription?: string;
  features: ServiceFeature[];
  benefits: string[];
  benefitsTitle?: string;
  processSteps: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedServices: { title: string; href: string; icon: LucideIcon }[];
  ctaText?: string;
  pricingPlans?: PricingPlan[];
  technologies?: string[];
  applications?: string[];
  introSection?: {
    title: string;
    description: string;
  };
  capabilities?: string[];
  customSection?: React.ReactNode;
}

export const ServicePageLayout = ({
  title,
  metaTitle,
  metaDescription,
  keywords,
  canonicalUrl,
  heroImage,
  heroImageAlt,
  tag,
  icon: Icon,
  shortDescription,
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
  features,
  benefits,
  benefitsTitle = "Beneficios de trabajar con nosotros",
  processSteps,
  faqs,
  relatedServices,
  ctaText = "Solicita tu diagnóstico en español",
  pricingPlans,
  technologies,
  applications,
  introSection,
  capabilities,
  customSection,
}: ServicePageLayoutProps) => {
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const { t, language, getLocalizedPath } = useLanguage();
  const location = useLocation();

  // Scroll to top when navigating to this page
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <html lang={language} />
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="RCW Innovation Inc" />
        <meta name="robots" content="index, follow" />
        {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:locale" content={language === 'en' ? 'en_CA' : 'es_CA'} />
        <meta property="og:site_name" content="RCW Innovation Inc" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header onOpenConsultation={() => setIsConsultationOpen(true)} />
        
        <main>
          {/* Hero Section */}
          <section className="pt-32 pb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            
            <div className="container-custom relative z-10">
              {/* Breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <Link 
                  to={getLocalizedPath('/')} 
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {t('servicePage.backToHome')}
                </Link>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="inline-block px-4 py-2 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-6">
                    {tag}
                  </span>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                    {title}
                  </h1>
                  
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8">
                    {shortDescription}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button 
                      onClick={() => setIsConsultationOpen(true)}
                      className="btn-gold gap-2 text-sm sm:text-base md:text-lg py-5 sm:py-6 w-full sm:w-auto"
                    >
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                      {t('servicePage.requestAdvisory')}
                    </Button>
                    <Button 
                      onClick={() => setIsDiagnosticOpen(true)}
                      variant="outline"
                      className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-5 sm:py-6 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                      {t('servicePage.consulting')}
                    </Button>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
                    <img 
                      src={heroImage} 
                      alt={heroImageAlt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Introduction Section (for pages with intro) */}
          {introSection && (
            <section className="py-20 bg-card/30">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="max-w-4xl mx-auto text-center"
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-8">
                    {introSection.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {introSection.description}
                  </p>
                </motion.div>
              </div>
            </section>
          )}

          {/* Problem / Solution Journey */}
          {(problemTitle && problemDescription && solutionTitle && solutionDescription) && (
            <ProblemSolutionJourney
              problemTitle={problemTitle}
              problemDescription={problemDescription}
              solutionTitle={solutionTitle}
              solutionDescription={solutionDescription}
            />
          )}

          {/* Capabilities Section (for AI pages) */}
          {capabilities && capabilities.length > 0 && (
            <section className="py-20">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                    {t('servicePage.capabilities')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    {t('servicePage.aiCapabilities')}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {capabilities.map((capability, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass p-6 rounded-xl flex items-center gap-4"
                    >
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                      <span className="font-medium">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Applications Section */}
          {applications && applications.length > 0 && (
            <section className="py-20 bg-card/30">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {t('servicePage.applications')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    {t('servicePage.aiApplications')}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {applications.map((application, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass p-6 rounded-xl flex items-center gap-4"
                    >
                      <Zap className="w-6 h-6 text-accent flex-shrink-0" />
                      <span className="font-medium">{application}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Custom Section */}
          {customSection && customSection}

          {/* Features Grid */}
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  {t('servicePage.features')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  {t('servicePage.featuresTitle')}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="glass-strong rounded-2xl group hover:border-primary/30 transition-all duration-300 overflow-hidden"
                  >
                    {/* Feature Image */}
                    {feature.image && (
                      <div className="relative h-36 overflow-hidden">
                        <img 
                          src={feature.image} 
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <feature.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 bg-card/30">
            <div className="container-custom">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                    {t('servicePage.advantages')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8">
                    {benefitsTitle}
                  </h2>
                  
                  <ul className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="glass-strong p-8 rounded-3xl"
                >
                  <h3 className="text-2xl font-bold mb-6">{t('servicePage.readyToStart')}</h3>
                  <p className="text-muted-foreground mb-8">
                    {ctaText}
                  </p>
                  <Button 
                    onClick={() => setIsConsultationOpen(true)}
                    className="w-full btn-gold gap-2 py-6"
                  >
                    {t('servicePage.scheduleAdvisory')}
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          {pricingPlans && pricingPlans.length > 0 && (
            <section className="py-20">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
                >
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                    {t('servicePage.plans')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    {t('servicePage.aiAgentsPlans')}
                  </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                  {pricingPlans.map((plan, index) => (
                    <motion.div
                      key={plan.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`glass-strong p-8 rounded-3xl relative ${plan.highlighted ? 'border-primary/50 ring-2 ring-primary/20' : ''}`}
                    >
                      {plan.highlighted && (
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                          {t('servicePage.mostPopular')}
                        </div>
                      )}
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                      <div className="text-4xl font-bold text-primary mb-6">
                        {plan.price}
                        <span className="text-lg text-muted-foreground font-normal">{t('servicePage.perMonth')}</span>
                      </div>
                      
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {(plan.capacity || plan.setup || plan.extraLanguage) && (
                        <div className="pt-4 border-t border-border/50 space-y-2 text-sm text-muted-foreground">
                          {plan.capacity && <p><strong>{t('servicePage.capacity')}:</strong> {plan.capacity}</p>}
                          {plan.setup && <p><strong>{t('servicePage.setup')}:</strong> {plan.setup}</p>}
                          {plan.extraLanguage && <p><strong>{t('servicePage.extraLanguage')}:</strong> {plan.extraLanguage}</p>}
                        </div>
                      )}

                      <Button 
                        onClick={() => setIsConsultationOpen(true)}
                        className={`w-full mt-6 ${plan.highlighted ? 'btn-gold' : ''}`}
                        variant={plan.highlighted ? 'default' : 'outline'}
                      >
                        {t('servicePage.selectPlan')}
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Technologies */}
          {technologies && technologies.length > 0 && (
            <section className="py-20 bg-card/30">
              <div className="container-custom">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-12"
                >
                  <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                    {t('servicePage.techStack')}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold mt-4">
                    {t('servicePage.techUsed')}
                  </h2>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="px-6 py-3 glass rounded-full font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Process Steps */}
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-primary text-sm font-semibold tracking-wider uppercase">
                  {t('servicePage.methodology')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  {t('servicePage.howWeDoIt')}
                </h2>
              </motion.div>

              <div className="max-w-4xl mx-auto">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex gap-6 mb-8 last:mb-0"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center">
                        {index + 1}
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-2" />
                      )}
                    </div>
                    <div className="pt-2">
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-20 bg-card/30">
            <div className="container-custom max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <span className="text-accent text-sm font-semibold tracking-wider uppercase">
                  {t('servicePage.faq')}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mt-4">
                  {t('servicePage.faqTitle')}
                </h2>
              </motion.div>

              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="glass rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-card/40 transition-colors"
                    >
                      <h3 className="font-semibold pr-4">{faq.question}</h3>
                      <motion.div
                        animate={{ rotate: openFaqIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="w-5 h-5 text-primary rotate-90" />
                      </motion.div>
                    </button>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaqIndex === index ? 'auto' : 0,
                        opacity: openFaqIndex === index ? 1 : 0,
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

          {/* Final CTA */}
          <section className="py-20">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-strong p-12 rounded-3xl text-center max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {ctaText}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('servicePage.ctaDescription')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    onClick={() => setIsConsultationOpen(true)}
                    className="btn-gold gap-2 text-lg py-6 px-8"
                  >
                    <Calendar className="w-5 h-5" />
                    {t('servicePage.scheduleAdvisory')}
                  </Button>
                  <Button 
                    onClick={() => setIsDiagnosticOpen(true)}
                    variant="outline"
                    className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6 px-8"
                  >
                    <Zap className="w-5 h-5" />
                    {t('servicePage.diagnosticExpress')}
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-20 bg-card/30">
            <div className="container-custom">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold">
                  {t('servicePage.relatedServices')}
                </h2>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedServices.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={getLocalizedPath(service.href)}
                      className="block glass p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <span className="text-sm text-primary mt-2 inline-flex items-center gap-1">
                        {t('servicePage.viewMore')} <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <Chatbot />
        
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
