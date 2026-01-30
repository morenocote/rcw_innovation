// Feature images configuration for service pages
// Maps feature types/keywords to their respective images

import featureDashboard from '@/assets/features/feature-dashboard.jpg';
import featureSecurity from '@/assets/features/feature-security.jpg';
import featureAiAutomation from '@/assets/features/feature-ai-automation.jpg';
import featureIntegrations from '@/assets/features/feature-integrations.jpg';
import featureSupport from '@/assets/features/feature-support.jpg';
import featureScalable from '@/assets/features/feature-scalable.jpg';

// Default feature images mapped by common keywords
export const featureImages = {
  // Dashboard & Analytics
  dashboard: featureDashboard,
  analytics: featureDashboard,
  interfaces: featureDashboard,
  intuitive: featureDashboard,
  gauge: featureDashboard,
  barChart: featureDashboard,
  layoutDashboard: featureDashboard,
  
  // Security
  security: featureSecurity,
  shield: featureSecurity,
  secure: featureSecurity,
  protection: featureSecurity,
  
  // AI & Automation
  ai: featureAiAutomation,
  automation: featureAiAutomation,
  bot: featureAiAutomation,
  brain: featureAiAutomation,
  workflow: featureAiAutomation,
  
  // Integrations & APIs
  integration: featureIntegrations,
  api: featureIntegrations,
  link: featureIntegrations,
  connect: featureIntegrations,
  cloud: featureIntegrations,
  
  // Support
  support: featureSupport,
  headphones: featureSupport,
  customer: featureSupport,
  clock: featureSupport,
  
  // Scalable & Growth
  scalable: featureScalable,
  growth: featureScalable,
  layers: featureScalable,
  trending: featureScalable,
  
  // Default fallback
  default: featureDashboard,
};

// Export individual images for direct use
export {
  featureDashboard,
  featureSecurity,
  featureAiAutomation,
  featureIntegrations,
  featureSupport,
  featureScalable,
};

// Helper function to get feature image based on icon name
export const getFeatureImage = (iconName: string): string => {
  const normalizedName = iconName.toLowerCase();
  
  // Check for direct matches
  for (const [key, image] of Object.entries(featureImages)) {
    if (normalizedName.includes(key)) {
      return image;
    }
  }
  
  return featureImages.default;
};

// Predefined feature image sets for each service
export const serviceFeatureImages = {
  software: [
    featureDashboard,   // Interfaces Intuitivas
    featureSecurity,    // Integraciones Seguras
    featureAiAutomation, // IA y Automatización
    featureScalable,    // Arquitectura Escalable
    featureIntegrations, // APIs Robustas
    featureSupport,     // Soporte Continuo
  ],
  branding: [
    featureDashboard,   // Identidad Visual
    featureScalable,    // Direccionamiento Estratégico
    featureIntegrations, // Estrategia de Contenido
    featureAiAutomation, // Campañas Publicitarias
    featureSupport,     // Gestión de Comunidad
    featureDashboard,   // Creatividades de Alto Impacto
  ],
  automatizaciones: [
    featureAiAutomation, // Flujos Inteligentes
    featureSupport,     // Respuesta 24/7
    featureScalable,    // Ahorro Operativo
    featureIntegrations, // Integración CRM/ERP
    featureDashboard,   // Métricas en Tiempo Real
    featureSupport,     // Soporte Técnico
  ],
  agentesIA: [
    featureSupport,     // Respuestas Instantáneas
    featureScalable,    // Reducción de Costos
    featureAiAutomation, // Multicanal
    featureDashboard,   // Escalabilidad
    featureAiAutomation, // Aprendizaje Continuo
    featureIntegrations, // Integración Total
  ],
  agentesIAAvanzados: [
    featureAiAutomation, // Conversación Natural
    featureDashboard,   // Análisis en Tiempo Real
    featureScalable,    // Automatización Avanzada
    featureSecurity,    // Seguridad Empresarial
    featureIntegrations, // Integración Total
    featureAiAutomation, // Aprendizaje Continuo
  ],
  sistemasGestion: [
    featureDashboard,   // Dashboards en Tiempo Real
    featureSupport,     // Gestión de Usuarios
    featureSecurity,    // Control de Accesos
    featureScalable,    // Escalabilidad
    featureDashboard,   // Reportes Avanzados
    featureIntegrations, // Integración Total
  ],
  tarjetaDigital: [
    featureIntegrations, // QR/NFC
    featureDashboard,   // Diseño Personalizado
    featureSupport,     // Actualizaciones Instantáneas
    featureScalable,    // Analíticas
    featureIntegrations, // Compatibilidad
    featureSecurity,    // Seguridad
  ],
  webApp: [
    featureDashboard,   // SEO desde Arquitectura
    featureScalable,    // E-commerce Seguro
    featureIntegrations, // Apps Móviles
    featureDashboard,   // Velocidad Optimizada
    featureSecurity,    // Pagos Integrados
    featureIntegrations, // Diseño Responsive
  ],
  mentoria: [
    featureAiAutomation, // Planes Personalizados
    featureSupport,     // Mentoría 1:1
    featureDashboard,   // Workshops Prácticos
    featureIntegrations, // Recursos Digitales
    featureScalable,    // Seguimiento Continuo
    featureSecurity,    // Certificación
  ],
};
