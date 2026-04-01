'use client';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <div className="pt-20">{children}</div>
      <SiteFooter />
    </div>
  );
}
