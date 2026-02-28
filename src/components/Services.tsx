'use client';

import { useState } from 'react';
import { Layout, RefreshCcw, Zap } from 'lucide-react';

type Service = {
  key: string;
  title: string;
  summary: string;
  bullets: string[];
  details: {
    heading: string;
    items: string[];
  }[];
  icon: React.ReactNode;
};

const SERVICES: Service[] = [
  {
    key: 'new-sites',
    title: 'New websites (1–5 pages)',
    summary:
      'You don\'t have to figure out "how websites work" or who to hire. We take your business story, your services, and your goals—and build a clear, professional site that looks great and gets you more clients.',
    bullets: [
      'Looks great on phones and desktops (we handle all of that)',
      'Easy for visitors to find what they need and contact you',
      'No technical setup on your end—we get you live and show you the basics',
    ],
    details: [
      {
        heading: 'Best for',
        items: [
          'Service businesses launching their first real website',
          'Anyone who\'s been putting off a site because it feels overwhelming',
          'Local or global businesses that want a simple, trustworthy online presence',
        ],
      },
      {
        heading: 'What’s included',
        items: [
          'We plan the pages and navigation so it makes sense to your clients',
          'We design and build the site (you choose how custom you want it)',
          'We set up contact forms or booking links so leads land in your inbox',
          'We test everything on mobile and desktop and get you launched',
        ],
      },
      {
        heading: 'What you bring',
        items: [
          'Your logo or business name (we can work with simple at first)',
          'Photos of your work or team (or we can suggest stock images)',
          'The words you want on each page (we can help refine)',
        ],
      },
    ],
    icon: <Layout className="h-[18px] w-[18px] block" />,
  },
  {
    key: 'rebuilds',
    title: 'Full website rebuilds',
    summary:
      "Your current site is outdated, hard to update, or you're not proud to send people there. We start fresh using your best content and build something modern, fast, and easy to maintain—no tech headaches.",
    bullets: [
      'Replace old DIY sites or sites that no longer fit your business',
      'Clean, professional look that builds trust with clients',
      'Faster loading and clearer structure so visitors stay and act',
    ],
    details: [
      {
        heading: 'Best for',
        items: [
          'Sites that feel messy, slow, or hard to update',
          'DIY builds that grew “patchwork” over time',
          'Businesses that have outgrown their current look or structure',
        ],
      },
      {
        heading: 'What’s included',
        items: [
          'We review your existing site and decide what to keep vs. refresh',
          'We rebuild with a clear layout and modern design',
          'We make sure it works beautifully on mobile and desktop',
          'We launch it and help you connect your domain',
        ],
      },
      {
        heading: 'Why rebuild instead of patch?',
        items: [
          'Often faster and less frustrating than fixing an old, fragile site.',
          'If you\'re ready to move off a builder or outdated platform, we make it smooth.',
        ],
      },
    ],
    icon: <RefreshCcw className="h-[18px] w-[18px] block" />,
  },
  {
    key: 'one-pager',
    title: 'Single-page or focused sites',
    summary:
      'One clear page for one offer: a workshop, a new service, or a way to capture leads. No overwhelming menus—just what your visitor needs to see and do next.',
    bullets: [
      'One focused page for one offer or event',
      'Clear "book now" or "get in touch" so you get more inquiries',
      'Can live on its own or connect to your main site',
    ],
    details: [
      {
        heading: 'Best for',
        items: [
          'A single service or offer you want to spotlight',
          'A workshop/event page with clear info + sign-up',
          'A simple “landing page” that drives inquiries',
        ],
      },
      {
        heading: 'What’s included',
        items: [
          'Focused page layout + clear CTA',
          'Sections for FAQs / testimonials / outcomes (if needed)',
          'Embedded forms or link-out booking',
          'Mobile + desktop QA and polish',
        ],
      },
      {
        heading: 'Optional add-ons',
        items: [
          'Light analytics setup (basic tracking)',
          'A/B variant-ready structure (if you want to test messaging)',
        ],
      },
    ],
    icon: <Zap className="h-[18px] w-[18px] block" />,
  },
];

export default function Services() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <>
      {SERVICES.map((service) => {
        const isOpen = openKey === service.key;

        return (
          <div key={service.key} className="pb-10 mx-auto w-full max-w-3xl space-y-6">
            <div className="w-full">
              <button
                key={service.key}
                type="button"
                onClick={() => setOpenKey((prev) => (prev === service.key ? null : service.key))}
                className={[
                  'group relative text-left w-full',
                  'rounded-2xl bg-white p-5 shadow-sm',
                  'transition-all duration-300',
                  'hover:-translate-y-1 hover:shadow-md',
                  isOpen ? 'ring-1 ring-accent-200' : '',
                ].join(' ')}
                aria-expanded={isOpen}
                aria-controls={`service-${service.key}`}
              >
                {/* Header row */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent-100 text-accent-700">
                    {service.icon}
                  </div>

                  <h3 className="flex-1 text-sm font-semibold text-ink">
                    {service.title}
                  </h3>
                </div>

                {/* Body */}
                <div className="mt-3">
                  <p className="text-sm text-stone-600">{service.summary}</p>

                  <ul className="mt-3 space-y-1 text-xs text-stone-600">
                    {service.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>

                {/* Expandable details */}
                <div
                  id={`service-${service.key}`}
                  className={[
                    'grid transition-all duration-300 ease-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0',
                  ].join(' ')}
                >
                  <div className="overflow-hidden">
                    <div className="rounded-xl bg-accent-50 p-4">
                      <div className="space-y-4">
                        {service.details.map((block) => (
                          <div key={block.heading}>
                            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-700">
                              {block.heading}
                            </div>
                            <ul className="mt-2 space-y-2 text-sm text-stone-700">
                              {block.items.map((item) => (
                                <li key={item} className="flex gap-2">
                                  <span className="mt-[7px] inline-block h-1.5 w-1.5 flex-none shrink-0 rounded-full bg-accent-400" />
                                  <span className="min-w-0">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details toggle button — below content, matches ProjectCard "View details" style */}
                <div className="mt-4 flex justify-end">
                  <span
                    className="sparkle-btn inline-flex items-center justify-center gap-1.5 rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 transition hover:bg-stone-800"
                  >
                    {isOpen ? 'Collapse' : 'Details'}
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
            </div>
          </div>);
      }
      )}

      {/* DON'T DO */}
      {/* < div className="mt-8 rounded-2xl border border-dashed border-accent-200 bg-accent-50 p-5 text-sm text-stone-700" >
        <h3 className="text-sm font-semibold text-ink">What I don&apos;t do</h3>

        <p className="mt-2 text-sm text-stone-600">
          To keep projects clean and efficient, I don&apos;t take on:
        </p>

        <ul className="mt-2 space-y-1 text-sm text-stone-600">
          <li>• One-off bug fixes on existing sites</li>
          <li>• Random plugin or theme issues</li>
          <li>• Deep debugging in legacy codebases</li>
        </ul>

        <p className="mt-3 text-sm text-stone-600">
          If your current site feels messy or fragile, it’s usually faster and more cost-effective to rebuild it properly—and
          that&apos;s exactly what I do.
        </p>
      </div > */}
    </>
  );
}
