'use client';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isIntakePage = pathname === '/intake';

  return (
    <div>
      <SiteHeader />
      <div className="pt-10">{children}</div>
      {!isIntakePage && <SiteFooter />}
    </div>
  );
}
