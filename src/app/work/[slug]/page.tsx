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
      <section className="bg-gradient-to-b from-accent-50 to-accent-100 mb-10">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:py-18">
          <Link
            href="/work"
            className="text-xs font-medium text-accent-700 hover:underline"
          >
            ← Back to work
          </Link>

          <h1 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="mt-2 text-sm sm:text-base text-stone-600">
              {project.subtitle}
            </p>
          )}
        </div>
      </section>

      {/* Overview */}
      <Section id="overview" title="Overview">
        <p className="max-w-3xl text-sm sm:text-base text-stone-700">
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
      </Section>

      {/* Details */}
      <Section id="details" title="Project details">
        <div className="max-w-3xl space-y-4 text-sm text-stone-700">
          {project.description.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      {/* Live Preview */}
      <Section id="preview" title="Live preview">
        <div className="rounded-3xl overflow-hidden bg-white shadow-sm">
          <div className="bg-stone-100 text-white/80">
            <div className="text-xs uppercase tracking-[0.2em] px-6 pt-4 pb-2 text-accent-400" />
            <IframePreview
              url={project.liveUrl}
              title={project.previewTitle}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-btn-primary px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Visit live site ↗
          </a>

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
