import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const LanguageRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for saved language preference or browser language
    const savedLang = localStorage.getItem('language');
    const browserLang = navigator.language.toLowerCase();
    
    let targetLang = 'es'; // default
    
    if (savedLang === 'en' || savedLang === 'es') {
      targetLang = savedLang;
    } else if (browserLang.startsWith('en')) {
      targetLang = 'en';
    }
    
    navigate(`/${targetLang}`, { replace: true });
  }, [navigate]);

  return null;
};
