import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageLayout } from "@/components/LanguageLayout";
import { LanguageRedirect } from "@/components/LanguageRedirect";
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

const queryClient = new QueryClient();

// Service routes configuration
const serviceRoutes = [
  { path: "diseno-software-medida-premium-calgary", element: <SoftwareAMedida /> },
  { path: "branding-estrategia-redes-sociales-calgary", element: <BrandingRedesSociales /> },
  { path: "automatizaciones-ia-operaciones-calgary", element: <AutomatizacionesIA /> },
  { path: "creacion-agentes-ia-inteligencia-calgary", element: <AgentesIA /> },
  { path: "agentes-ia-avanzados-calgary", element: <AgentesIAAvanzados /> },
  { path: "sistemas-gestion-operaciones-calgary", element: <SistemasGestion /> },
  { path: "tarjeta-digital-profesional-calgary", element: <TarjetaDigital /> },
  { path: "diseno-web-app-movil-calgary", element: <DisenoWebApp /> },
  { path: "mentoria-capacitacion-digital-calgary", element: <MentoriaCapacitacion /> },
];

// Legacy routes configuration  
const legacyRoutes = [
  { path: "servicios/software-medida", element: <SoftwareAMedida /> },
  { path: "servicios/branding-redes", element: <BrandingRedesSociales /> },
  { path: "servicios/automatizaciones-ia", element: <AutomatizacionesIA /> },
  { path: "servicios/agentes-ia", element: <AgentesIA /> },
  { path: "servicios/sistemas-gestion", element: <SistemasGestion /> },
  { path: "servicios/tarjeta-digital", element: <TarjetaDigital /> },
  { path: "servicios/diseno-web-app", element: <DisenoWebApp /> },
  { path: "servicios/mentoria-capacitacion", element: <MentoriaCapacitacion /> },
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Root redirect to language-prefixed route */}
          <Route path="/" element={<LanguageRedirect />} />
          
          {/* Spanish Routes */}
          <Route path="/es" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            {serviceRoutes.map(route => (
              <Route key={`es-${route.path}`} path={route.path} element={route.element} />
            ))}
            {legacyRoutes.map(route => (
              <Route key={`es-legacy-${route.path}`} path={route.path} element={route.element} />
            ))}
          </Route>
          
          {/* English Routes */}
          <Route path="/en" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            {serviceRoutes.map(route => (
              <Route key={`en-${route.path}`} path={route.path} element={route.element} />
            ))}
            {legacyRoutes.map(route => (
              <Route key={`en-legacy-${route.path}`} path={route.path} element={route.element} />
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
