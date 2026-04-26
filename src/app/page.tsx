'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Section from '@/components/Section';
import Services from '@/components/Services';
import About from '@/components/About';
import type { Project } from '@/types';
import { CONTACT_EMAIL, CALENDLY_URL, GOOGLE_REVIEWS_URL, PROJECTS } from './constants';
import ProcessSection from '@/components/ProcessSection';
import IntakeForm from '@/components/IntakeForm';
import ProjectCardsCarousel from '@/components/ProjectCardsCarousel';
import OutcomesSection from '@/components/OutcomesSection';
import Hero from '@/components/Hero';


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
        <Hero />

        {/* Outcomes — full-width band; inner max-w-5xl px-4 matches Section / #process */}
        <OutcomesSection />

        {/* Projects — same gradient band as outcomes; no spacer so sections sit flush */}
        <Section
          id="projects"
          eyebrow="Case studies"
          title="Sites we’ve built"
          className="bg-gradient-to-bl from-[#eee2ff] to-[#f4ebe6] pt-[50px] pb-[50px]"
        >
          <ProjectCardsCarousel projects={projects} />
        </Section>

        {/* Process — flush with projects (no my-25 spacer) */}
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
