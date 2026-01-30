import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change (not hash changes for anchor navigation)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
