'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import Services from '@/components/Services';
import About from '@/components/About';
import type { Project } from '@/types';
import { CONTACT_EMAIL, CALENDLY_URL, PROJECTS } from './constants';
import Process from '@/components/Process';
import IntakeForm from '@/components/IntakeForm';
import ProjectCardsCarousel from '@/components/ProjectCardsCarousel';
import OutcomesSection from '@/components/OutcomesSection';


export default function HomePage() {
  const projects = useMemo<Project[]>(
    () => PROJECTS,
    []
  );

  return (
    <div className="min-h-screen bg-accent/10 text-ink">
      <main>
        <section>
          <div
            className={[
              'mx-auto flex max-w-5xl flex-col gap-0 px-4 pt-8 pb-16 sm:px-10',
              'lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:gap-10 lg:px-0 lg:pt-12 lg:pb-24',
              'xl:gap-14',
            ].join(' ')}
          >
            <div className="order-1 flex flex-col lg:order-2 lg:flex-1 lg:min-w-0 lg:justify-center lg:self-center lg:px-10 xl:px-12 2xl:pr-[max(2.5rem,calc((100vw-80rem)/2+3rem))]">
              <div className="mx-auto flex w-full max-w-xl flex-col lg:mx-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
                  Done for you · Two-week delivery
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  You run the business. We build the website.
                </h1>
                <p className="mt-4 max-w-xl text-sm text-stone-600 sm:text-base">
                  Tell us about your business and we'll build you a site that turns visitors into booked customers — with tools like instant quote calculators and online booking built right in. We're a Portland-based studio specializing in service businesses. We handle everything from design to launch in two weeks, so you can focus on the business you love.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="/intake"
                    className="sparkle-btn inline-flex relative items-center justify-center overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-500"
                  >
                    <span className="sparkle-layer" />
                    <span className="relative z-10">Hire us to build your website</span>
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

            <div className="relative order-2 w-full max-lg:-mt-4 self-start lg:order-1 lg:mt-0 lg:w-[min(48vw,720px)] lg:shrink-0 lg:self-stretch">
              <div className="flex min-h-0 items-start justify-start lg:min-h-[min(85vh,760px)] lg:items-end">
                <Image
                  src="/images/me-transparent-background-v8.png"
                  alt="Jasmin working at a computer"
                  width={3375}
                  height={4219}
                  sizes="(max-width: 1023px) 100vw, 48vw"
                  className="max-h-[min(70vh,560px)] w-full object-contain object-left object-bottom lg:max-h-[min(92vh,800px)]"
                  priority
                />
              </div>
            </div>
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

        {/* Outcomes */}
        <Section id="outcomes">
          <OutcomesSection />
        </Section>

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
