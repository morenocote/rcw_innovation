import { Facebook, Instagram, Linkedin, Phone, Mail, Youtube } from 'lucide-react';
import logo from '@/assets/logo.png';
import { useLanguage } from '@/contexts/LanguageContext';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const socialLinks = [
  { icon: Facebook, href: 'https://www.facebook.com/rcwinnovationai/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/rcwinnovationai_/', label: 'Instagram' },
  { icon: GoogleIcon, href: 'https://share.google/xUcKvRUSis6kFdoYs', label: 'Google' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/rcwinnovation', label: 'LinkedIn' },
  { icon: Youtube, href: 'https://www.youtube.com/@rcwinnovationai', label: 'YouTube' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@rcwinnovationai', label: 'TikTok' },
];

export const Footer = () => {
  const { t, getLocalizedPath } = useLanguage();

  const footerLinks = {
    servicios: [
      { label: t('footer.service.1'), href: getLocalizedPath('/diseno-software-medida-premium-calgary') },
      { label: t('footer.service.2'), href: getLocalizedPath('/diseno-web-app-movil-calgary') },
      { label: t('footer.service.3'), href: getLocalizedPath('/automatizaciones-ia-operaciones-calgary') },
      { label: t('footer.service.4'), href: getLocalizedPath('/agentes-ia-avanzados-calgary') },
    ],
    empresa: [
      { label: t('footer.link.about'), href: getLocalizedPath('/#por-que-nosotros') },
      { label: t('footer.link.process'), href: getLocalizedPath('/#proceso') },
      { label: t('footer.link.faq'), href: getLocalizedPath('/#faq') },
      { label: t('footer.link.contact'), href: getLocalizedPath('/#contacto') },
    ],
    legal: [
      { label: t('footer.link.privacy'), href: getLocalizedPath('/politica-privacidad') },
      { label: t('footer.link.terms'), href: getLocalizedPath('/terminos-servicio') },
    ],
  };

  return (
    <footer className="border-t border-border/30 bg-card/30">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="RCW Innovation Inc Logo" className="h-10 w-10 object-contain" />
              <span className="text-lg font-bold">RCW Innovation</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">{t('footer.description')}</p>
            <div className="space-y-2 mb-6">
              <a href="tel:+15878961997" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />+1 (587) 896-1997
              </a>
              <a href="mailto:info@rcwinnovation.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />info@rcwinnovation.com
              </a>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}
                   className="w-9 h-9 rounded-lg bg-muted/30 flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors">
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.services')}</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}><a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link.label}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} RCW Innovation Inc. {t('footer.rights')}</p>
          <p className="text-sm text-muted-foreground">{t('footer.tagline')}</p>
        </div>
      </div>
    </footer>
  );
};