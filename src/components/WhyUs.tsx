import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Award, Clock, MessageSquare, Star, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { sectionRoutes } from '@/config/routes';

const reasonIcons = [Users, Award, Clock, MessageSquare, Star, TrendingUp];

export const WhyUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { t, language } = useLanguage();

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

  const descriptionDesktop = t('whyUs.descriptionDesktop');
  const descriptionMobile = t('whyUs.descriptionMobile');

  return (
    <section id="por-que-nosotros" className="section relative overflow-hidden bg-card/30">
      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            {t('whyUs.badge')}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            {t('whyUs.title')}
          </h2>
          
          {/* Mobile Description */}
          <div className="md:hidden text-muted-foreground max-w-xl mx-auto text-sm sm:text-base leading-relaxed whitespace-pre-line px-2 mb-4">
            {descriptionMobile}
          </div>
          
          {/* Desktop Description */}
          <div className="hidden md:block text-muted-foreground max-w-4xl mx-auto text-base lg:text-lg leading-relaxed whitespace-pre-line text-left mb-6">
            {descriptionDesktop}
          </div>

          <Link 
            to={`/${language}/${sectionRoutes.whyUs[language]}`}
            className="inline-flex items-center gap-2 text-accent hover:underline font-medium"
          >
            {language === 'es' ? 'Conoce más sobre nosotros' : 'Learn more about us'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 md:mb-20">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-border/30 bg-card/50 hover:border-accent/30 transition-all duration-300"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">{reason.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 md:mb-10">
            {t('whyUs.testimonials.title')}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="card-premium p-4 sm:p-6"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 sm:mb-6 italic text-sm sm:text-base leading-relaxed">
                  "{testimonial.text}"
                </p>
                <footer>
                  <cite className="not-italic">
                    <span className="font-semibold block text-sm sm:text-base">{testimonial.name}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground">{testimonial.company}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
