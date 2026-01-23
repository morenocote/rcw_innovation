import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '@/assets/logo.png';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeaderProps {
  onOpenConsultation?: () => void;
}

export const Header = ({ onOpenConsultation }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, language, basePath } = useLanguage();

  const navLinks = [
    { href: '#servicios', label: t('nav.services') },
    { href: '#proyectos', label: t('nav.projects') },
    { href: '#por-que-nosotros', label: t('nav.whyUs') },
    { href: '#proceso', label: t('nav.process') },
    { href: '#faq', label: t('nav.faq') },
    { href: '#contacto', label: t('nav.contact') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === `/${language}` || location.pathname === `/${language}/`;

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, navigate to home with hash
      navigate(`${basePath}/${href}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between" aria-label="Navegación principal">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to={basePath}
            className="flex items-center gap-3 group"
          >
            <img src={logo} alt="RCW Innovation Inc Logo" className="h-12 w-12 object-contain" />
            <span className="text-xl font-bold hidden sm:block group-hover:text-gradient-blue transition-all">
              RCW Innovation
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden lg:flex items-center gap-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative group text-sm font-medium bg-transparent border-none cursor-pointer"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </motion.ul>

        {/* Desktop CTA + Language Switcher */}
        <motion.div
          className="hidden lg:flex items-center gap-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <LanguageSwitcher />
          <button onClick={onOpenConsultation} className="btn-primary text-sm">
            {t('nav.cta')}
          </button>
        </motion.div>

        {/* Mobile Menu Button + Language */}
        <div className="lg:hidden flex items-center gap-3">
          <LanguageSwitcher />
          <button
            className="p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-full left-0 right-0 glass-strong lg:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ul className="flex flex-col py-6 px-4">
                {navLinks.map((link, index) => (
                  <li key={link.href}>
                    <motion.button
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left py-3 text-muted-foreground hover:text-foreground transition-colors border-b border-border/30 bg-transparent cursor-pointer"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
                <li className="pt-4">
                  <button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      onOpenConsultation?.();
                    }}
                    className="btn-primary block text-center w-full"
                  >
                    {t('nav.cta')}
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};
