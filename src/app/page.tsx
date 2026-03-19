'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import Services from '@/components/Services';
import About from '@/components/About';
import type { Project } from '@/types';
import { CONTACT_EMAIL, CALENDLY_URL, PROJECTS } from './constants';
import SiteHeader from '@/components/SiteHeader';
import Process from '@/components/Process';
import IntakeForm from '@/components/IntakeForm';
import ProjectCardsCarousel from '@/components/ProjectCardsCarousel';


export default function HomePage() {
  const projects = useMemo<Project[]>(
    () => PROJECTS,
    []
  );

  return (
    <div className="min-h-screen bg-accent/10 text-ink">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="mt-6 sm:mt-0 bg-gradient-to-b from-accent/10 to-accent/15 mb-15">
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pt-8 pb-16 md:flex-row md:items-start md:pt-12 md:pb-24 px-10">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-start md:gap-10">
                <div
                  className="mb-4 relative flex-none w-full self-start md:mb-0"
                  style={{ paddingBottom: '51.3%' }}
                >
                  <Image
                    src="/images/me-transparent-background-v7.webp"
                    alt="Jasmin working at a computer"
                    fill
                    sizes="(max-width: 640px) 100vw, 520px"
                    className="object-contain object-left animate-emoji-slide-in"
                    style={{
                      animationDelay: '120ms',
                      WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 45%)',
                      maskImage: 'linear-gradient(to left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 10%, rgba(0,0,0,1) 45%)',
                      WebkitMaskRepeat: 'no-repeat',
                      maskRepeat: 'no-repeat',
                      WebkitMaskSize: '100% 100%',
                      maskSize: '100% 100%',
                    }}
                  />

                  {/* Overlay hero content on top of the image (wider viewports). */}
                  <div className="absolute inset-y-0 right-0 hidden w-3/5 overflow-visible p-8 md:flex md:flex-col md:justify-center">
                    {/* Fuzzy/dispersing white background behind the whole overlay stack */}
                    <div className="absolute -inset-6 bg-white/70 blur-2xl" aria-hidden />
                    <div
                      className="absolute inset-0 rounded-3xl bg-[linear-gradient(90deg,rgba(255,255,255,0.00)_0%,rgba(255,255,255,0.08)_14%,rgba(255,255,255,0.35)_40%,rgba(255,255,255,0.55)_60%)]"
                      aria-hidden
                    />

                    <div className="relative z-10">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
                        Built for service businesses · Portland, OR · Two-week delivery
                      </p>
                      <h1 className="mt-3 text-3xl text-ink sm:text-4xl md:text-5xl font-semibold tracking-tight">
                        You run the business. We build the website.
                      </h1>
                      <p className="mt-4 max-w-xl text-sm text-stone-600">
                        Tell us about your business and we'll build you a site that turns visitors into booked customers — with tools like instant quote calculators and online booking built right in. We're a Portland-based studio specializing in service businesses. We handle everything from design to launch in two weeks, so you can focus on the business you love.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <a
                          href="/intake"
                          className="sparkle-btn inline-flex relative overflow-hidden items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-500"
                        >
                          <span className="sparkle-layer" />
                          <span className="relative z-10">Hire us to build your website</span>
                        </a>
                        <a
                          href="/services"
                          className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-stone-400"
                        >
                          See what we build
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 md:hidden">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
                    Built for service businesses · Portland, OR · Two-week delivery
                  </p>
                  <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                    You run the business. We build the website.
                  </h1>
                  <p className="mt-4 max-w-xl text-sm sm:text-base text-stone-600">
                    Tell us about your business and we'll build you a site that turns visitors into booked customers — with tools like instant quote calculators and online booking built right in. We're a Portland-based studio specializing in service businesses. We handle everything from design to launch in two weeks, so you can focus on the business you love.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/intake"
                      className="sparkle-btn inline-flex relative overflow-hidden items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-500"
                    >
                      <span className="sparkle-layer" />
                      <span className="relative z-10">Hire us to build your website</span>
                    </a>
                    <a
                      href="/services"
                      className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-stone-400"
                    >
                      See what we build
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="mx-auto max-w-3xl px-4">
            <a
              href="#about"
              aria-label="Go to About Service Tools Studio section"
              className={[
                "group my-6 block rounded-2xl bg-white p-4 shadow-sm",
                "transition-all duration-300",
                "hover:-translate-y-0.5 hover:border-accent/25 hover:bg-accent/10 hover:shadow-sm",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              ].join(" ")}
            >
              <div className="flex items-start gap-4">
                <Image
                  src="/images/professional-headshot.jpg"
                  alt="Jasmin, founder of Service Tools Studio"
                  width={80}
                  height={80}
                  className="h-20 w-20 shrink-0 rounded-full border border-stone-200 object-cover"
                  priority={false}
                />

                <p className="text-sm leading-snug text-stone-600">
                  <span className="font-semibold text-ink">I'm Jasmin, owner and founder of Service Tools Studio.</span> — I'm a Portland-based developer with 7 years of experience building production websites. By day, I work for Nike. On the side, I build custom websites from scratch. I love turning ideas into something real that works for your business.
                </p>
              </div>
            </a>
          </div>

        </section>

        {/* Projects */}
        <Section id="projects" title="Sites we’ve built">
          <ProjectCardsCarousel projects={projects} />
        </Section>

        {/* Process */}
        <Section id="process" title="How it works">
          <Process />
        </Section>

        {/* About */}
        <Section id="about" title="About Service Tools Studio">
          <About />
        </Section>

        {/* Intake form */}
        <Section id="intake" title="Ready? Tell us about your business">
          <IntakeForm />
        </Section>
      </main>

      {/* Footer */}
      {/* <footer className="border-t border-accent/20 bg-white/80">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Websites by Jasmin</div>
          <div className="space-x-4">
            <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-stone-700">
              Email
            </a>
            {CALENDLY_URL && (
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer"
                className="hover:text-stone-700"
              >
                Book a call
              </a>
            )}
          </div>
        </div>
      </footer> */}
    </div>
  );
}
