import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Lightbulb, TrendingUp, Target, ChevronRight, ArrowDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProblemSolutionJourneyProps {
  problemTitle: string;
  problemDescription: string;
  solutionTitle: string;
  solutionDescription: string;
}

export const ProblemSolutionJourney = ({
  problemTitle,
  problemDescription,
  solutionTitle,
  solutionDescription,
}: ProblemSolutionJourneyProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const { t } = useLanguage();

  const steps = [
    {
      icon: Target,
      title: t('servicePage.problemSolution.step1'),
      description: problemDescription.split('.').slice(0, 1).join('.') + '.',
      color: 'text-muted-foreground',
      bgColor: 'bg-muted/20',
      borderColor: 'border-muted/40',
    },
    {
      icon: AlertTriangle,
      title: t('servicePage.problemSolution.step2'),
      description: problemDescription.split('.').slice(1).join('.').trim() || problemTitle,
      color: 'text-destructive',
      bgColor: 'bg-destructive/10',
      borderColor: 'border-destructive/30',
    },
    {
      icon: Lightbulb,
      title: t('servicePage.problemSolution.step3'),
      description: solutionDescription.split('.').slice(0, 2).join('.') + '.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/30',
    },
    {
      icon: TrendingUp,
      title: t('servicePage.problemSolution.step4'),
      description: solutionDescription.split('.').slice(2).join('.').trim() || solutionTitle,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
      borderColor: 'border-primary/30',
    },
  ];

  return (
    <section className="py-20 bg-card/30 overflow-hidden">
      <div className="container-custom">
        {/* Mobile View - Vertical Timeline */}
        <div className="md:hidden">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mb-8"
          >
            {t('servicePage.problemSolution.clickToExplore')}
          </motion.p>
          
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveStep(activeStep === index ? -1 : index)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 ${
                    activeStep === index 
                      ? `${step.bgColor} ${step.borderColor}` 
                      : 'bg-card/50 border-border/50 hover:border-border'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className={`text-xs font-semibold tracking-wider uppercase ${step.color}`}>
                          {t('servicePage.problemSolution.step' + (index + 1))}
                        </span>
                        <ChevronRight className={`w-5 h-5 transition-transform ${activeStep === index ? 'rotate-90' : ''}`} />
                      </div>
                      <h3 className="font-semibold mt-1">{step.title}</h3>
                    </div>
                  </div>
                  
                  <AnimatePresence>
                    {activeStep === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground mt-4 pt-4 border-t border-border/30">
                          {step.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
                
                {index < steps.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown className="w-5 h-5 text-muted-foreground/50" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop View - Interactive Journey */}
        <div className="hidden md:block">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mb-12"
          >
            {t('servicePage.problemSolution.clickToExplore')}
          </motion.p>

          {/* Progress Line */}
          <div className="relative mb-16">
            <div className="absolute top-6 left-0 right-0 h-1 bg-border/30 rounded-full" />
            <motion.div 
              className="absolute top-6 left-0 h-1 bg-gradient-to-r from-muted-foreground via-destructive via-accent to-primary rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeStep + 1) * 25}%` }}
              transition={{ duration: 0.5 }}
            />
            
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className="flex flex-col items-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div 
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeStep >= index 
                        ? `${step.bgColor} ring-4 ring-offset-2 ring-offset-background ${step.borderColor.replace('border', 'ring')}`
                        : 'bg-card border-2 border-border group-hover:border-primary/50'
                    }`}
                  >
                    <step.icon className={`w-5 h-5 transition-colors ${activeStep >= index ? step.color : 'text-muted-foreground'}`} />
                  </div>
                  <span className={`mt-4 text-sm font-medium transition-colors ${activeStep === index ? step.color : 'text-muted-foreground'}`}>
                    {step.title}
                  </span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className={`max-w-3xl mx-auto p-8 lg:p-10 rounded-3xl border-2 transition-colors ${
                steps[activeStep].bgColor
              } ${steps[activeStep].borderColor}`}
            >
              <div className="flex items-start gap-6">
                <div className={`w-16 h-16 rounded-2xl ${steps[activeStep].bgColor} flex items-center justify-center flex-shrink-0`}>
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className={`w-8 h-8 ${steps[activeStep].color}`} />;
                  })()}
                </div>
                <div className="flex-1">
                  <span className={`text-xs font-semibold tracking-wider uppercase ${steps[activeStep].color}`}>
                    {t('servicePage.problemSolution.step' + (activeStep + 1))}
                  </span>
                  <h3 className={`text-2xl lg:text-3xl font-bold mt-2 mb-4 ${steps[activeStep].color}`}>
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {steps[activeStep].description}
                  </p>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-8 pt-6 border-t border-border/30">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      activeStep === index 
                        ? 'bg-primary w-8' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="p-3 rounded-full bg-card border border-border hover:border-primary/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
