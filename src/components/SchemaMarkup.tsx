export const SchemaMarkup = () => {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "RCW Innovation",
    "url": "https://www.rcwinnovation.com/",
    "description": "Líder en desarrollo web en Calgary y Colombia. Servicios de software a medida, automatización con IA, diseño web profesional y transformación digital con visión global e innovación.",
    "areaServed": [
      { "@type": "City", "name": "Calgary" },
      { "@type": "AdministrativeArea", "name": "Alberta" },
      { "@type": "Country", "name": "CA" },
      { "@type": "Country", "name": "CO" }
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "AB",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.facebook.com/rcwinnovationai/",
      "https://www.instagram.com/rcwinnovationai_/",
      "https://share.google/xUcKvRUSis6kFdoYs",
      "https://www.linkedin.com/company/rcwinnovation",
      "https://www.youtube.com/@rcwinnovationai",
      "https://www.tiktok.com/@rcwinnovationai"
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuál es la diferencia entre Asesoría 5.0 y Consultoría 5.0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "La Asesoría 5.0 son sesiones rápidas (30-90 días) enfocadas en diagnóstico y plan de acción inmediato. La Consultoría 5.0 es un proyecto integral que incluye roadmap completo, implementación y optimización continua."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo pueden ayudar a mi negocio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unimos tecnología, automatización y estrategia para eliminar tareas repetitivas, fortalecer tu marca y convertir más leads en clientes."
        }
      },
      {
        "@type": "Question",
        "name": "¿Se integran con sistemas existentes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sí, nos integramos con CRM, ERP y otras suites como Kommo, HubSpot, Odoo, Zoho y SAP. Nuestro enfoque es potenciar lo que ya funciona."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma ver resultados?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Prometemos quick wins en 2-3 semanas, un MVP funcional en 4-8 semanas y despliegues completos en 8-12 semanas."
        }
      },
      {
        "@type": "Question",
        "name": "¿Cómo manejan la seguridad de la información?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usamos NDA, cifrado de datos, control de acceso estricto y nunca utilizamos los datos de clientes para entrenar modelos sin permiso expreso."
        }
      },
      {
        "@type": "Question",
        "name": "¿Quién es dueño del código al finalizar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El cliente conserva la propiedad total del proyecto y todo el código desarrollado. La empresa retiene únicamente la autoría técnica y metodológica."
        }
      },
      {
        "@type": "Question",
        "name": "¿Qué los diferencia de otras agencias?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No vendemos servicios, diseñamos sistemas que generan resultados reales. Combinamos branding, tecnología de punta e innovación con un enfoque 100% orientado a métricas."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Desarrollo Web y Automatización con IA",
    "provider": {
      "@type": "LocalBusiness",
      "name": "RCW Innovation Inc"
    },
    "areaServed": {
      "@type": "City",
      "name": "Calgary"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Servicios de Innovación Digital",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño de Software a la Medida",
            "description": "Desarrollo de MVPs y plataformas escalables con arquitecturas modulares y APIs seguras"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Branding y Redes Sociales",
            "description": "Construcción de identidad visual y contenidos de alto impacto"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automatizaciones con IA",
            "description": "Workflows inteligentes para atención, ventas y operaciones"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Creación de Agentes IA",
            "description": "Agentes conversacionales y de back-end que aprenden de los datos empresariales"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sistemas de Gestión ERP/CRM",
            "description": "Diseño e implementación de sistemas con dashboards y automatización"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diseño Web y Apps Móviles",
            "description": "Sitios orientados a conversión con SEO técnico y apps PWA"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mentoría y Capacitación",
            "description": "Programas sobre IA, productividad, automatización, UX y analítica"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};