import { useLocation } from 'react-router-dom';
import { serviceRoutes, pageRoutes } from '@/config/routes';

const BASE_URL = 'https://www.rcwinnovation.com';

export const useCanonicalUrl = (): string => {
    const location = useLocation();
    const path = location.pathname;

    // Root path - redirect to /es by default
    if (path === '/') {
        return `${BASE_URL}/es`;
    }

    // Extract language and route parts
    const pathParts = path.split('/').filter(Boolean);
    const lang = pathParts[0] as 'es' | 'en';

    // Home page for language
    if (pathParts.length === 1 && (lang === 'es' || lang === 'en')) {
        return `${BASE_URL}/${lang}`;
    }

    // Check if it's a service route
    const servicePath = pathParts.slice(1).join('/');
    const serviceRoute = serviceRoutes.find(
        route => route.es === servicePath || route.en === servicePath
    );

    if (serviceRoute) {
        return `${BASE_URL}/${lang}/${serviceRoute[lang]}`;
    }

    // Check if it's a page route
    const pageRoute = pageRoutes.find(
        route => route.es === pathParts[1] || route.en === pathParts[1]
    );

    if (pageRoute) {
        return `${BASE_URL}/${lang}/${pageRoute[lang]}`;
    }

    // Default fallback - use current path
    return `${BASE_URL}${path}`;
};
