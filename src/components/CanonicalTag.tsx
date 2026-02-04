import { Helmet } from 'react-helmet-async';
import { useCanonicalUrl } from '@/hooks/useCanonicalUrl';

export const CanonicalTag = () => {
    const canonicalUrl = useCanonicalUrl();

    return (
        <Helmet>
            <link rel="canonical" href={canonicalUrl} />
        </Helmet>
    );
};
