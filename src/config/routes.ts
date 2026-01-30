// Route configuration for multilingual URL structure
// ES: /es/servicios/software-a-medida
// EN: /en/services/custom-software

export interface ServiceRoute {
  key: string;
  es: string;
  en: string;
  component: string;
}

// Service routes with localized paths
export const serviceRoutes: ServiceRoute[] = [
  {
    key: 'software',
    es: 'servicios/software-a-medida',
    en: 'services/custom-software',
    component: 'SoftwareAMedida',
  },
  {
    key: 'branding',
    es: 'servicios/branding-redes-sociales',
    en: 'services/branding-social-media',
    component: 'BrandingRedesSociales',
  },
  {
    key: 'automatizaciones',
    es: 'servicios/automatizaciones-ia',
    en: 'services/ai-automations',
    component: 'AutomatizacionesIA',
  },
  {
    key: 'agentesIA',
    es: 'servicios/agentes-ia',
    en: 'services/ai-agents',
    component: 'AgentesIA',
  },
  {
    key: 'agentesIAAvanzados',
    es: 'servicios/agentes-ia-avanzados',
    en: 'services/advanced-ai-agents',
    component: 'AgentesIAAvanzados',
  },
  {
    key: 'sistemasGestion',
    es: 'servicios/sistemas-gestion',
    en: 'services/management-systems',
    component: 'SistemasGestion',
  },
  {
    key: 'tarjetaDigital',
    es: 'servicios/tarjeta-digital',
    en: 'services/digital-business-card',
    component: 'TarjetaDigital',
  },
  {
    key: 'webApp',
    es: 'servicios/diseno-web-app',
    en: 'services/web-app-design',
    component: 'DisenoWebApp',
  },
  {
    key: 'mentoria',
    es: 'servicios/mentoria-capacitacion',
    en: 'services/mentoring-training',
    component: 'MentoriaCapacitacion',
  },
];

// SEO Pages with dedicated URLs (not anchors)
export interface PageRoute {
  key: string;
  es: string;
  en: string;
}

export const pageRoutes: PageRoute[] = [
  {
    key: 'projects',
    es: 'proyectos',
    en: 'projects',
  },
  {
    key: 'value',
    es: 'valor-diferencial',
    en: 'value',
  },
  {
    key: 'process',
    es: 'proceso',
    en: 'process',
  },
  {
    key: 'faqs',
    es: 'preguntas-frecuentes',
    en: 'faqs',
  },
  {
    key: 'contact',
    es: 'contacto',
    en: 'contact',
  },
];

// Section routes (anchors for home page AND dedicated pages)
export const sectionRoutes = {
  faq: {
    es: 'preguntas-frecuentes',
    en: 'faqs',
  },
  whyUs: {
    es: 'valor-diferencial',
    en: 'value',
  },
  contact: {
    es: 'contacto',
    en: 'contact',
  },
  services: {
    es: '#servicios',
    en: '#services',
  },
  projects: {
    es: 'proyectos',
    en: 'projects',
  },
  process: {
    es: 'proceso',
    en: 'process',
  },
  privacy: {
    es: 'politica-privacidad',
    en: 'privacy-policy',
  },
  terms: {
    es: 'terminos-servicio',
    en: 'terms-of-service',
  },
};

// Helper to get page path by key and language
export const getPagePath = (key: string, language: 'es' | 'en'): string => {
  const route = pageRoutes.find(r => r.key === key);
  return route ? `/${language}/${route[language]}` : `/${language}`;
};

// Helper to get service path by key and language
export const getServicePath = (key: string, language: 'es' | 'en'): string => {
  const route = serviceRoutes.find(r => r.key === key);
  return route ? `/${route[language]}` : '/';
};

// Get service key from current path
export const getServiceKeyFromPath = (path: string): string | null => {
  const cleanPath = path.replace(/^\/(es|en)\//, '');
  const route = serviceRoutes.find(
    r => r.es === cleanPath || r.en === cleanPath
  );
  return route ? route.key : null;
};

// Legacy URL mappings (old URLs -> new route keys)
export const legacyUrlMappings: Record<string, string> = {
  'diseno-software-medida-premium-calgary': 'software',
  'branding-estrategia-redes-sociales-calgary': 'branding',
  'automatizaciones-ia-operaciones-calgary': 'automatizaciones',
  'creacion-agentes-ia-inteligencia-calgary': 'agentesIA',
  'agentes-ia-avanzados-calgary': 'agentesIAAvanzados',
  'sistemas-gestion-operaciones-calgary': 'sistemasGestion',
  'tarjeta-digital-profesional-calgary': 'tarjetaDigital',
  'diseno-web-app-movil-calgary': 'webApp',
  'mentoria-capacitacion-digital-calgary': 'mentoria',
};
