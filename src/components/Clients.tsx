import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Client logos
import hotelVasconia from '@/assets/clients/hotel-vasconia.png';
import hwCleaning from '@/assets/clients/hw-cleaning.png';
import lifasServices from '@/assets/clients/lifas-services.png';
import ninaJean from '@/assets/clients/nina-jean.png';
import serviciosLatinos from '@/assets/clients/servicios-latinos.png';
import theChamasServices from '@/assets/clients/the-chamas-services.png';
import theBurrito from '@/assets/clients/the-burrito.png';
import tuMexicoEnLaPiel from '@/assets/clients/tu-mexico-en-la-piel.png';
import xploreCanada from '@/assets/clients/xplore-canada.png';
import canadaOneClick from '@/assets/clients/canada-one-click.png';

interface Client {
  id: number;
  name: string;
  logo: string;
  url: string;
}

// Client data with SEO-optimized alt descriptions
const clients: Client[] = [
  { id: 1, name: 'Hotel Vasconia - Diseño web para hotel en Calgary', logo: hotelVasconia, url: 'https://rcwinnovation.com/' },
  { id: 2, name: 'HW Cleaning and Painting Services - Sitio web servicios de limpieza Calgary', logo: hwCleaning, url: 'https://rcwinnovation.com/' },
  { id: 3, name: 'Lifas Services - Diseño web para empresa de servicios en Calgary', logo: lifasServices, url: 'https://rcwinnovation.com/' },
  { id: 4, name: 'Nina Jean Maintenance Renovation - Web para renovaciones y mantenimiento Calgary', logo: ninaJean, url: 'https://rcwinnovation.com/' },
  { id: 5, name: 'Servicios Latinos Marketplace - Primera plataforma web para latinos en Canadá', logo: serviciosLatinos, url: 'https://servicioslatinoscanada.com/' },
  { id: 6, name: 'The Chamas Services Inc - Sitio web empresarial Calgary', logo: theChamasServices, url: 'https://rcwinnovation.com/' },
  { id: 7, name: 'The Burrito Mexican Food - Diseño web restaurante mexicano Calgary', logo: theBurrito, url: 'https://rcwinnovation.com/' },
  { id: 8, name: 'Tu México en la Piel - Tienda online productos mexicanos Calgary', logo: tuMexicoEnLaPiel, url: 'https://rcwinnovation.com/' },
  { id: 9, name: 'Xplore Canada - Sitio web turismo y viajes Canadá', logo: xploreCanada, url: 'https://rcwinnovation.com/' },
  { id: 10, name: 'Canada One Click - Plataforma digital servicios inmigrantes Canadá', logo: canadaOneClick, url: 'https://rcwinnovation.com/' },
];

export const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);
  const { t } = useLanguage();

  // Calculate animation distance based on client count and size
  const mobileSliderWidth = clients.length * (128 + 24); // w-32 (128px) + gap-6 (24px)
  const desktopSliderWidth = clients.length * (240 + 40); // w-60 (240px) + gap-10 (40px)

  return (
    <section className="py-12 md:py-24 overflow-hidden border-y border-background">
      <div className="container-custom mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs sm:text-sm text-primary font-medium tracking-wider uppercase mb-3 sm:mb-4 block">
            {t('clients.badge')}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
            {t('clients.title')} <span className="text-gradient-blue">{t('clients.titleHighlight')}</span>
          </h2>
        </motion.div>
      </div>

      {/* Desktop: Infinite slider */}
      <div className="hidden md:block relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-10"
          animate={{ x: isPaused ? undefined : [0, -desktopSliderWidth] }}
          transition={{ x: { duration: 30, repeat: Infinity, ease: 'linear' } }}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <a
              key={`desktop-${client.id}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-60 h-20 flex items-center justify-center px-4 py-2 transition-all duration-300 hover:scale-105"
              aria-label={`Visit ${client.name}`}
            >
              <img 
                src={client.logo} 
                alt={`Logo ${client.name} - Cliente de RCW Innovation`}
                className="max-w-full max-h-full object-contain rounded-lg filter brightness-100 hover:brightness-110 transition-all"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Animated infinite slider */}
      <div className="md:hidden relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          className="flex gap-6"
          animate={{ x: [0, -mobileSliderWidth] }}
          transition={{ x: { duration: 20, repeat: Infinity, ease: 'linear' } }}
        >
          {[...clients, ...clients, ...clients].map((client, index) => (
            <a
              key={`mobile-${client.id}-${index}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-32 h-12 flex items-center justify-center transition-all duration-300"
              aria-label={`Visit ${client.name}`}
            >
              <img 
                src={client.logo} 
                alt={`Logo ${client.name} - Cliente de RCW Innovation`}
                className="max-w-full max-h-full object-contain rounded-lg"
                loading="lazy"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
