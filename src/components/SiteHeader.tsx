'use client';
import { useState, type MouseEvent } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { PRIMARY_CTA_CLASSNAME } from '@/app/constants';

const navItemsDefault = [
  { href: '/work', label: 'Our work' },
  { href: '/process', label: 'How it works' },
  { href: '/about', label: 'About us' },
  { href: '/intake', label: 'Get started' },
];

const navItemsCleaning = [
  { href: '#case-study', label: 'Case Study' },
  { href: '#process', label: 'How it works' },
  { href: '#about', label: 'About us' },
  { href: '#intake', label: 'Get started' },
];

const linkClassName =
  'text-sm text-[#2d1447]/80 transition hover:text-[#2d1447]';

export default function SiteHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isCleaningPage = pathname === '/cleaning';

  const navItems = isCleaningPage
    ? navItemsCleaning
    : navItemsDefault;

  function scrollToTop() {
    if (pathname === '/' || pathname === '/cleaning') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }
    router.push('/');

    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  }

  function handleInPageHashClick(e: MouseEvent<HTMLAnchorElement>, href: string) {
    const isInPage =
      (pathname === '/' || pathname === '/cleaning') && href.startsWith('#');
    if (!isInPage) return;
    e.preventDefault();
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
    window.history.pushState(null, '', href);
  }

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#2d1447]/10 bg-[#fbf8f7]/95 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-5 md:px-12">
          <div className="flex min-w-0 items-center gap-3">
            <button
              onClick={scrollToTop}
              className="flex min-w-0 items-center gap-1 rounded-lg text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-btn-primary focus-visible:ring-offset-2 focus-visible:ring-offset-[#fbf8f7]"
              aria-label="Service Tools Studio — go to top"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden">
                <Image
                  src="/images/Service Tools 3.png"
                  alt="Service Tools Studio logo"
                  width={56}
                  height={56}
                  className="h-14 w-14 object-contain"
                  priority
                />
              </span>
              <span className="flex h-14 items-center truncate text-xl font-semibold tracking-tight text-[#5b4c7e] leading-none translate-y-[5px]">
                Service Tools Studio
              </span>
            </button>
          </div>

          <nav className="hidden items-center gap-10 text-sm lg:flex lg:gap-12">
            {navItems.slice(0, -1).map((item) => (
              <a
                href={item.href}
                key={item.label}
                onClick={(e) => handleInPageHashClick(e, item.href)}
                className={linkClassName}
              >
                {item.label}
              </a>
            ))}
            <a
              href={navItems[navItems.length - 1].href}
              onClick={(e) =>
                handleInPageHashClick(
                  e,
                  navItems[navItems.length - 1].href
                )
              }
              className={PRIMARY_CTA_CLASSNAME}
            >
              <span className="sparkle-layer" aria-hidden />
              <span className="relative z-10">
                {navItems[navItems.length - 1].label}
              </span>
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center rounded-md p-2 text-[#5b4c7e] transition hover:bg-[#2d1447]/5 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg
              className="h-5 w-8"
              viewBox="0 0 32 20"
              fill="none"
              aria-hidden
            >
              <line x1="2" y1="3" x2="30" y2="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <line x1="2" y1="17" x2="30" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <div className="absolute top-full left-0 right-0 z-50 border-b border-[#2d1447]/10 bg-[#fbf8f7] shadow-md lg:hidden animate-fade-in-down">
              <nav className="flex flex-col gap-1 p-4 text-[#2d1447]">
                {navItems.slice(0, -1).map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      handleInPageHashClick(e, item.href);
                      setMenuOpen(false);
                    }}
                    className="rounded-md px-3 py-2.5 text-sm text-[#2d1447]/90 transition hover:bg-[#2d1447]/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href={navItems[navItems.length - 1].href}
                  onClick={(e) => {
                    handleInPageHashClick(
                      e,
                      navItems[navItems.length - 1].href
                    );
                    setMenuOpen(false);
                  }}
                  className={`${PRIMARY_CTA_CLASSNAME} mt-2 w-full justify-center text-center`}
                >
                  <span className="sparkle-layer" aria-hidden />
                  <span className="relative z-10">
                    {navItems[navItems.length - 1].label}
                  </span>
                </a>
              </nav>
            </div>
          </>
        )}
      </header>

    </>
  );
}
