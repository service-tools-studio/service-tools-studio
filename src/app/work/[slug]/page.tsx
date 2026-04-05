'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Section from '@/components/Section';
import IframePreview from '@/components/IframePreview';
import { PROJECTS } from '@/app/constants';
import { useParams } from 'next/navigation';

function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}

export default function WorkDetailPage() {
  const params = useParams<{ slug: string }>();

  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-accent-50 text-ink">
      {/* Header */}
      <section className="bg-lavender from-accent-50 to-accent-100 mb-10">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-18">
          <Link
            href="/work"
            className="text-xs font-medium text-accent-700 hover:underline"
          >
            ← Back to work
          </Link>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold text-ink">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              {project.subtitle}
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
                url={project.liveUrl}
                title={project.previewTitle}
              />
            </div>

            <div id="overview" className="min-w-0 scroll-mt-20">
              <h2 className="mb-6 text-2xl font-semibold text-ink sm:text-3xl">
                Overview
              </h2>
              <p className="max-w-3xl text-sm text-stone-700 sm:text-base">
                {project.overview}
              </p>
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-stone-700">
                {project.pills.map((pill) => (
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

      {/* Details */}
      <Section id="details" title="Project details">
        <div className="max-w-3xl space-y-4 text-sm text-stone-700">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-stone-400"
          >
            Back to all projects
          </Link>
        </div>
      </Section>

      <div className="pb-20" />
    </main>
  );
}
