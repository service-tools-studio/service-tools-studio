'use client';

import { useState } from 'react';

type Step = {
  step: string;
  title: string;
  text: string;
  details: string[];
  icon: React.ReactNode;
};

const STEPS: Step[] = [
  {
    step: '01',
    title: 'Quick intro & fit check',
    text: "You tell us what you want your site to do—no tech speak required. We'll listen and ask simple questions.",
    details: [
      'We’ll do a quick call or async questionnaire—whatever is easiest.',
      'You’ll share your goals, what you’re offering, and who the site is for.',
      'If you have an existing site, we’ll identify what to keep vs rebuild.',
      'You’ll leave with clarity on what a “good” result looks like.',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent-600">
        <path
          d="M21 6.5A2.5 2.5 0 0 0 18.5 4h-13A2.5 2.5 0 0 0 3 6.5v7A2.5 2.5 0 0 0 5.5 16H8l4 3.5L16 16h2.5A2.5 2.5 0 0 0 21 13.5v-7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Simple plan & price',
    text: "We recommend a clear path—new site or rebuild—with a fixed scope and timeline. No surprises.",
    details: [
      'We’ll discuss scope: pages, sections, and key functionality.',
      'We’ll confirm which package fits (structured build vs custom design).',
      'We’ll align on timeline, milestones, and what you’ll provide (copy, photos, etc.).',
      'You’ll know exactly what’s included and what’s not.',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent-600">
        <path
          d="M4 5h16M4 10h16M4 15h10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Design & build',
    text: "We build your site from scratch. You focus on your business; we handle the rest.",
    details: [
      'For custom work: we design the layout and look, or use your existing brand materials.',
      'For structured builds: we use a proven layout and make it yours with your colors, photos, and words.',
      'We build everything so it works well and loads fast.',
      'You review and request changes—we keep it within what we agreed.',
      'We check everything on phones and desktops so it looks great everywhere.',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent-600">
        <path
          d="M4 20l4-1 11-11a1.5 1.5 0 0 0 0-2l-1.5-1.5a1.5 1.5 0 0 0-2 0L4.5 15.5 4 20Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Launch & handoff',
    text: "We get your site live and connected to your domain. You get a simple handoff—no technical runaround.",
    details: [
      'We launch the site and double-check that it works on all devices.',
      'We help you connect your domain (or work with whoever hosts it).',
      'We show you what you can update yourself and what to leave to us.',
      'Optional: we can add basic tracking or SEO so people can find you.',
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-accent-600">
        <path
          d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Process() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <>
      <div className="grid gap-6 lg:grid-cols-4">
        {STEPS.map((step, idx) => {
          const isOpen = openIdx === idx;

          return (
            <button
              key={step.step}
              type="button"
              onClick={() => setOpenIdx((prev) => (prev === idx ? null : idx))}
              className={[
                'group relative text-left',
                'rounded-2xl border bg-white p-5 shadow-sm',
                'transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-md',
                '',
                'animate-fade-in-up',
                isOpen ? 'ring-1 ring-accent-200' : '',
              ].join(' ')}
              style={{ animationDelay: `${idx * 80}ms` }}
              aria-expanded={isOpen}
              aria-controls={`process-step-${idx}`}
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-100 transition-transform duration-300 group-hover:scale-110">
                  {step.icon}
                </div>

                <div className="flex min-w-0 items-center gap-2">
                  <div className="text-xs font-semibold tracking-widest text-accent-600">
                    {step.step}
                  </div>
                </div>
              </div>

              <h3 className="text-sm font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{step.text}</p>

              {/* Expand */}
              <div
                id={`process-step-${idx}`}
                className={[
                  'grid transition-all duration-300 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <div className="rounded-xl bg-accent-50 p-3">
                    <ul className="space-y-2 text-sm text-stone-700">
                      {step.details.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-[3px] size-1.5 shrink-0 rounded-full bg-accent-400" />
                          <span className="min-w-0">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Details toggle — below content, matches ProjectCard "View details" style */}
              <div className="mt-4 flex justify-end">
                <span
                  className="sparkle-btn inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 transition hover:bg-stone-800"
                >
                  {isOpen ? 'Hide details' : 'Details'}
                  <span
                    className={[
                      'inline-block text-[10px] transition-transform duration-300',
                      isOpen ? 'rotate-180' : '',
                    ].join(' ')}
                    aria-hidden
                  >
                    ▾
                  </span>
                </span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl bg-accent-50 p-6 text-center">
        <p className="text-sm text-stone-700">
          No tech overwhelm. No endless revisions. Just a clean, easy build process from start to finish.
        </p>
      </div>
    </>
  );
}
