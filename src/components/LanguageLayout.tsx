import { ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CanonicalTag } from '@/components/CanonicalTag';

interface LanguageLayoutProps {
  children?: ReactNode;
}

export const LanguageLayout = ({ children }: LanguageLayoutProps) => {
  return (
    <LanguageProvider>
      <CanonicalTag />
      {children || <Outlet />}
    </LanguageProvider>
  );
};
