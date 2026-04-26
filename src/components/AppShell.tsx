'use client';

import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';
import { usePathname } from 'next/navigation';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const mainPadBg =
    pathname === '/' || pathname === '/cleaning'
      ? 'bg-[#fbf8f7]'
      : 'bg-white';

  return (
    <div>
      <SiteHeader />
      <div className={`pt-24 ${mainPadBg}`}>{children}</div>
      <SiteFooter />
    </div>
  );
}
