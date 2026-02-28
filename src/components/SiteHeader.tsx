'use client';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';

const navItems = [
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Our work' },
  { href: '#process', label: 'How it works' },
  { href: '#about', label: 'About us' },
  { href: '#intake', label: 'Get started' },
]

export default function SiteHeader() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const pathname = usePathname();


  function scrollToTop() {
    if (pathname === '/') {
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

  return (
    <>
      {/* Top nav / header */}
      <header className="fixed top-0 left-0 z-50 w-full bg-white/80 backdrop-blur" >
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          {/* Left: Logo + Name */}
          <div className="flex items-center gap-2">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 focus:outline-none"
              aria-label="Service Tools Studio — go to top"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--text-primary)] text-2xl leading-none animate-emoji-slide-in"
              >
                👩🏽‍💻
              </span>
              <span className="text-sm font-semibold tracking-tight text-ink hover:text-accent-700 transition">
                Service Tools Studio
              </span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden sm:flex gap-6 text-sm text-stone-600">
            {navItems.map((item) => (
              <a
                href={item.href}
                key={item.label}
                onClick={(e) => {
                  if (pathname === '/' && item.href.startsWith('#')) {
                    e.preventDefault();
                    const el = document.querySelector(item.href);
                    el?.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', item.href);
                  }
                }}
                className="hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Hamburger (mobile only) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex items-center justify-center rounded-md p-2 text-stone-700 hover:bg-accent-100 transition"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h16M3 11h16M3 16h16" />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {
          menuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 z-40 bg-black/30"
                onClick={() => setMenuOpen(false)}
              />
              {/* Menu */}
              <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-md animate-fade-in-down">
                <nav className="flex flex-col p-4 gap-3 text-sm text-stone-700">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => {
                        if (item.href.startsWith('#')) {
                          const el = document.querySelector(item.href);
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }
                        setMenuOpen(false);
                      }}
                      className="rounded-md px-3 py-2 hover:bg-accent-50 transition"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </>
          )
        }
      </header >
      {/* Fullscreen photo modal */}
      {photoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
          onClick={() => setPhotoOpen(false)}
        >
          <Image
            src="/images/professional-headshot.jpg"
            alt="Jasmin"
            width={1200}
            height={1500}
            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            priority
          />
        </div>
      )}
    </>
  );
};