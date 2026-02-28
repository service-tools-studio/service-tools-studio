'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Section from '@/components/Section';
import ProjectCard from '@/components/ProjectCard';
import Services from '@/components/Services';
import About from '@/components/About';
import type { Project } from '@/types';
import { CONTACT_EMAIL, CALENDLY_URL, PROJECTS } from './constants';
import SiteHeader from '@/components/SiteHeader';
import Process from '@/components/Process';
import IntakeForm from '@/components/IntakeForm';


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
          <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 pt-8 pb-16 sm:flex-row sm:items-start sm:pt-12 sm:pb-24 px-10">
            <div className="flex-1">
              <p
                className="
    text-8xl leading-none mb-4
    animate-emoji-slide-in
  "
                style={{ animationDelay: "120ms" }}
              >
                👩🏽‍💻
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent shimmer-text">
                Portland, OR · Female-owned · Here for you locally & worldwide
              </p>
              <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-ink">
                You run the business. We build the website.
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-stone-600">
                Service Tools Studio is a locally-owned web studio for service-based business owners who want a real website—without having to learn technology or figure it out alone. Service Tools Studio delivers your website to you ready to go, including design and build from start to launch.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#intake"
                  className="sparkle-btn inline-flex relative overflow-hidden items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium text-white shadow-sm transition-all duration-500"
                >
                  <span className="sparkle-layer" />
                  <span className="relative z-10">Hire us to build your website</span>
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-stone-400"
                >
                  See what we build
                </a>
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
                <span className="font-semibold text-ink">I'm Jasmin, owner and founder of Service Tools Studio.</span> — I'm a Portland-based developer with 7 years of experience building production websites. I focus on clean code, clear structure, and sites that are fast and easy to maintain. I love turning ideas into something real that works for your business.
              </p>
            </div>
            </a>
          </div>

        </section>

        {/* Services */}
        <Section id="services" title="What we build for you">
          <Services />
        </Section>

        {/* Projects */}
        <Section id="projects" title="Sites we’ve built">
          {projects.map((p) => (
            <ProjectCard
              key={p.slug}
              project={p}
              href={`/work/${p.slug}`}
            />
          ))}
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
