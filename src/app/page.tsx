'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Section from '@/components/Section';
import Services from '@/components/Services';
import About from '@/components/About';
import type { Project } from '@/types';
import { CONTACT_EMAIL, CALENDLY_URL, GOOGLE_REVIEWS_URL, PROJECTS } from './constants';
import Process from '@/components/Process';
import IntakeForm from '@/components/IntakeForm';
import ProjectCardsCarousel from '@/components/ProjectCardsCarousel';
import OutcomesSection from '@/components/OutcomesSection';


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
              <div className="order-1 flex flex-col lg:order-2 lg:flex-1 lg:min-w-0 lg:justify-start lg:self-start lg:px-10 xl:px-12 2xl:pr-[max(2.5rem,calc((100vw-80rem)/2+3rem))]">
                <div className="@container mx-auto flex w-full max-w-xl min-w-0 flex-col lg:mx-0 lg:max-w-none">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
                    Done for you · Two-week delivery
                  </p>
                  <h1 className="mt-3 max-w-full min-w-0 font-semibold leading-[1.08] text-ink text-[clamp(0.6875rem,calc(100cqw/12),6rem)]">
                    <span className="block whitespace-nowrap">You run the business.</span>
                    <span className="block whitespace-nowrap">
                      We build the <span className="font-bold">website</span>.
                    </span>
                  </h1>
                  <div className="mt-4 flex flex-col gap-2 text-[9px] font-medium text-zinc-700 sm:text-xs">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-0.5 text-[11px] leading-none text-accent sm:text-[13px]">
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
                      “She brought my vision to life perfectly.”
                    </p>
                  </div>
                  <p className="mt-6 max-w-xl text-[10px] leading-snug text-stone-600 sm:text-sm sm:leading-relaxed">
                    We build high-converting websites in 2 weeks — so you can focus on running your business.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href="/intake"
                      className="sparkle-btn inline-flex relative items-center justify-center overflow-hidden rounded-full px-4 py-2 text-xs font-medium text-white shadow-sm transition-all duration-500 sm:px-6 sm:py-2.5 sm:text-sm"
                    >
                      <span className="sparkle-layer" />
                      <span className="relative z-10">Start your site (2-min form)</span>
                    </a>
                    {/* <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-stone-400"
                >
                  See what we build
                </a> */}
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
              className="pointer-events-none h-[3px] w-[100vw] shrink-0 bg-ink relative left-1/2 -translate-x-1/2"
              aria-hidden
            />

            {/* {!isDesktop && <div className="mt-6 flex w-full justify-center lg:mt-0 lg:px-10 lg:pt-10 xl:px-12 xl:pt-12">
              <p className="max-w-xl text-center text-sm text-stone-600 sm:text-base lg:max-w-3xl lg:text-base">
                Tell us about your business and we'll build you a site that turns visitors into booked customers — with tools like instant quote calculators and online booking built right in. We're a Portland-based studio specializing in service businesses. We handle everything from design to launch in two weeks, so you can focus on the business you love.
              </p>
            </div>} */}
          </div>

          {/* <div className="mx-auto max-w-3xl px-4">
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
          </div> */}

        </section>

        {/* Outcomes — full-width band; inner max-w-5xl px-4 matches Section / #process */}
        <OutcomesSection />
        <div className="my-25" />

        {/* Projects */}
        <Section
          id="projects"
          eyebrow="Case studies"
          title="Sites we’ve built"
          className="bg-white"
        >
          <ProjectCardsCarousel projects={projects} />
        </Section>

        <div className="my-25" />

        {/* Process */}
        <Section id="process" eyebrow="our simple process" title="How it works">
          <Process />
        </Section>

        {/* About */}
        <Section id="about" eyebrow="who we are" title="About Service Tools Studio">
          <About />
        </Section>

        {/* Intake form */}
        <Section
          id="intake"
          title="Ready? Tell us about your business"
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
