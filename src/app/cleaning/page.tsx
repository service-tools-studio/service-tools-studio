'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Section from '@/components/Section';
import Services from '@/components/Services';
import About from '@/components/About';
import type { Project } from '@/types';
import { CONTACT_EMAIL, CALENDLY_URL, GOOGLE_REVIEWS_URL, PROJECTS } from '../constants';
import ProcessSection from '@/components/ProcessSection';
import IntakeForm from '@/components/IntakeForm';
import ProjectCard from '@/components/ProjectCard';
import OutcomesSection from '@/components/OutcomesSection';
import IframePreview from '@/components/IframePreview';
import Link from 'next/link';


export default function HomePage() {
  const projects = useMemo<Project[]>(
    () => PROJECTS,
    []
  );
  /** Matches Tailwind `lg` (1024px). False on server until hydrated. */
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <div className="text-ink">
      <main className="min-h-screen bg-white" data-desktop={isDesktop}>
        <section>
          <div
            className={[
              'mx-auto flex max-w-5xl flex-col gap-0 bg-white px-4 pt-8 sm:px-10',
              'lg:mx-0 lg:max-w-none lg:px-0 lg:pt-12',
            ].join(' ')}
          >
            <div
              className={[
                'flex flex-col gap-0',
                'lg:flex-row lg:items-start lg:gap-10 xl:gap-14',
              ].join(' ')}
            >
              <div className="order-1 flex flex-col lg:order-2 lg:flex-1 lg:min-w-0 lg:justify-start lg:self-start lg:-ml-8 lg:pl-0 lg:pr-14 xl:-ml-10 xl:pl-0 xl:pr-20 2xl:pr-[max(4rem,calc((100vw-80rem)/2+4.5rem))]">
                <div className="@container mx-auto flex w-full max-w-xl min-w-0 flex-col lg:mx-0 lg:max-w-none">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
                    Done for you · Two-week delivery
                  </p>
                  <h1 className="mt-3 max-w-full min-w-0 font-semibold leading-[1.08] text-ink text-[clamp(0.6875rem,calc(100cqw/16),4.25rem)]">
                    <span className="block whitespace-nowrap">You run the cleaning business.</span>
                    <span className="block whitespace-nowrap">
                      We build the <span className="font-bold">website</span>.
                    </span>
                  </h1>
                  <div className="mt-4 flex flex-col gap-2 text-[9px] font-medium text-zinc-700 sm:text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-[11px] leading-none text-stone-900 sm:text-[13px]">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                      </div>
                      <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-zinc-400 underline-offset-2 transition hover:text-ink hover:decoration-ink"
                        aria-label="Read Service Tools Studio reviews on Google (opens in a new tab)"
                      >
                        5-star ratings on Google
                      </a>
                    </div>

                    <p className="font-normal italic leading-relaxed text-zinc-600">
                      “Since launching, I've seen a clear increase in leads, income, and credibility. I highly recommend Service Tools Studio.” <span className="not-italic font-normal leading-relaxed text-zinc-600">— Kelsey, owner of Golden Hour Cleaning Co.</span>
                    </p>
                  </div>
                  <p className="mt-6 max-w-none text-[14px] leading-snug text-stone-600 sm:text-sm sm:leading-relaxed">
                    We build websites that help local cleaning businesses get more leads, more calls, and more bookings — without you having to deal with the tech.
                  </p>

                  <div className="mt-6 flex w-full flex-wrap gap-3">
                    <a
                      href="/cleaning#intake"
                      className="sparkle-btn relative inline-flex w-full items-center justify-center overflow-hidden rounded-full px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-500 sm:w-auto sm:px-6 sm:py-2.5 sm:text-sm"
                    >
                      <span className="sparkle-layer" />
                      <span className="relative z-10">See how your site could get more bookings ✨</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative order-2 w-full max-lg:-mt-4 self-start lg:order-1 lg:mt-0 lg:w-[min(38vw,520px)] lg:shrink-0 lg:self-stretch">
                <div className="flex min-h-0 -ml-4 items-start justify-start sm:-ml-10 lg:ml-0 lg:min-h-[min(85vh,760px)] lg:items-end">
                  <Image
                    src="/images/me-transparent-background-v8.png"
                    alt="Jasmin working at a computer"
                    width={3375}
                    height={4219}
                    sizes="(max-width: 1023px) 100vw, 38vw"
                    className="max-h-[min(56vh,440px)] w-full object-contain object-left object-bottom lg:max-h-[min(86vh,720px)]"
                    priority
                  />
                </div>
              </div>
            </div>

            <div
              className="pointer-events-none h-[1px] w-[100vw] shrink-0 bg-ink relative left-1/2 -translate-x-1/2"
              aria-hidden
            />

          </div>

        </section>

        <OutcomesSection />

        <div id="case-study" className="bg-lavender">
          <section className="from-accent-50 to-accent-100">
            <div className="mx-auto max-w-5xl px-4 py-14 sm:py-20">

              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-600">
                Case Study
              </p>
              <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink">
                {PROJECTS[0].title}
              </h1>

              {PROJECTS[0].subtitle && (
                <p className="mt-2 text-sm sm:text-base text-stone-600">
                  {PROJECTS[0].subtitle}
                </p>
              )}
            </div>
          </section>

          {/* Preview + overview: preview first on mobile; iframe left, copy right on lg */}
          <section className="scroll-mt-20">
            <div className="mx-auto w-full min-w-0 max-w-5xl px-4 mb-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[min(40vw,520px)_minmax(0,1fr)] lg:items-start lg:gap-10 xl:gap-12">
                <div
                  id="preview"
                  className="w-full min-w-0 scroll-mt-20 justify-self-center lg:justify-self-start"
                >
                  <IframePreview
                    url={PROJECTS[0].liveUrl}
                    title={PROJECTS[0].previewTitle}
                  />
                </div>

                <div id="overview" className="min-w-0 scroll-mt-20">
                  <h2 className="mb-6 text-2xl font-semibold text-ink sm:text-3xl">
                    Overview
                  </h2>
                  <p className="max-w-3xl text-sm text-stone-700 sm:text-base">
                    {PROJECTS[0].overview}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-stone-700">
                    {PROJECTS[0].pills.map((pill) => (
                      <span
                        key={pill}
                        className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="mx-auto w-full min-w-0 max-w-5xl px-4 pb-25">
            <div className="max-w-3xl space-y-4 text-sm text-stone-700">
              {PROJECTS[0].description.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

        </div>

        {/* Process — motion matches Outcomes (shared sectionReveal + per-card viewport) */}
        <ProcessSection />

        {/* About */}
        <Section
          id="about"
          eyebrow="who we are"
          title="About Service Tools Studio"
          className="pt-[50px]"
        >
          <About />
        </Section>

        {/* Intake form */}
        <Section
          id="intake"
          title="Ready? Tell us about your cleaning business"
          className="py-12 sm:py-14 lg:py-16"
          style={{
            backgroundColor:
              "color-mix(in srgb, var(--btn-primary) 18%, transparent)",
          }}
        >
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
