import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LanguageLayout } from "@/components/LanguageLayout";
import { LanguageRedirect } from "@/components/LanguageRedirect";
import { ScrollToTop } from "@/components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Service Pages
import SoftwareAMedida from "./pages/services/SoftwareAMedida";
import BrandingRedesSociales from "./pages/services/BrandingRedesSociales";
import AutomatizacionesIA from "./pages/services/AutomatizacionesIA";
import AgentesIA from "./pages/services/AgentesIA";
import AgentesIAAvanzados from "./pages/services/AgentesIAAvanzados";
import SistemasGestion from "./pages/services/SistemasGestion";
import TarjetaDigital from "./pages/services/TarjetaDigital";
import DisenoWebApp from "./pages/services/DisenoWebApp";
import MentoriaCapacitacion from "./pages/services/MentoriaCapacitacion";

// SEO Pages
import ProjectsPage from "./pages/ProjectsPage";
import ValuePage from "./pages/ValuePage";
import ProcessPage from "./pages/ProcessPage";
import FAQsPage from "./pages/FAQsPage";
import ContactPage from "./pages/ContactPage";

import { serviceRoutes, pageRoutes, legacyUrlMappings } from "./config/routes";

const queryClient = new QueryClient();

// Component map for service pages
const serviceComponents: Record<string, React.ReactNode> = {
  SoftwareAMedida: <SoftwareAMedida />,
  BrandingRedesSociales: <BrandingRedesSociales />,
  AutomatizacionesIA: <AutomatizacionesIA />,
  AgentesIA: <AgentesIA />,
  AgentesIAAvanzados: <AgentesIAAvanzados />,
  SistemasGestion: <SistemasGestion />,
  TarjetaDigital: <TarjetaDigital />,
  DisenoWebApp: <DisenoWebApp />,
  MentoriaCapacitacion: <MentoriaCapacitacion />,
};

// Component map for SEO pages
const pageComponents: Record<string, React.ReactNode> = {
  projects: <ProjectsPage />,
  value: <ValuePage />,
  process: <ProcessPage />,
  faqs: <FAQsPage />,
  contact: <ContactPage />,
};

// Legacy redirect component
const LegacyRedirect = ({ legacyPath, lang }: { legacyPath: string; lang: 'es' | 'en' }) => {
  const routeKey = legacyUrlMappings[legacyPath];
  if (routeKey) {
    const route = serviceRoutes.find(r => r.key === routeKey);
    if (route) {
      return <Navigate to={`/${lang}/${route[lang]}`} replace />;
    }
  }
  return <NotFound />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Root redirect to language-prefixed route */}
          <Route path="/" element={<LanguageLayout><LanguageRedirect /></LanguageLayout>} />
          
          {/* Spanish Routes */}
          <Route path="/es" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            
            {/* SEO Pages - Spanish */}
            {pageRoutes.map(route => (
              <Route 
                key={`es-page-${route.key}`} 
                path={route.es} 
                element={pageComponents[route.key]} 
              />
            ))}
            
            {/* New semantic service routes - Spanish */}
            {serviceRoutes.map(route => (
              <Route 
                key={`es-${route.key}`} 
                path={route.es} 
                element={serviceComponents[route.component]} 
              />
            ))}
            
            {/* Legacy redirects for Spanish - maintain SEO */}
            {Object.keys(legacyUrlMappings).map(legacyPath => (
              <Route 
                key={`es-legacy-${legacyPath}`} 
                path={legacyPath} 
                element={<LegacyRedirect legacyPath={legacyPath} lang="es" />} 
              />
            ))}
          </Route>
          
          {/* English Routes */}
          <Route path="/en" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            
            {/* SEO Pages - English */}
            {pageRoutes.map(route => (
              <Route 
                key={`en-page-${route.key}`} 
                path={route.en} 
                element={pageComponents[route.key]} 
              />
            ))}
            
            {/* New semantic service routes - English */}
            {serviceRoutes.map(route => (
              <Route 
                key={`en-${route.key}`} 
                path={route.en} 
                element={serviceComponents[route.component]} 
              />
            ))}
            
            {/* Legacy redirects for English - maintain SEO */}
            {Object.keys(legacyUrlMappings).map(legacyPath => (
              <Route 
                key={`en-legacy-${legacyPath}`} 
                path={legacyPath} 
                element={<LegacyRedirect legacyPath={legacyPath} lang="en" />} 
              />
            ))}
          </Route>
          
          {/* Catch-all for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
