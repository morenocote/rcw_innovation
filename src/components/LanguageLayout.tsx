import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';

interface LanguageLayoutProps {
  children?: ReactNode;
}

export const LanguageLayout = ({ children }: LanguageLayoutProps) => {
  return (
    <LanguageProvider>
      {children || <Outlet />}
    </LanguageProvider>
  );
};
