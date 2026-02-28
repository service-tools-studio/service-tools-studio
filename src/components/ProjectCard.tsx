import IframePreview from './IframePreview';
import Link from 'next/link';
import { Project } from '@/types';

export default function ProjectCard({
  project,
  href,
}: {
  project: Project;
  href: string;
}) {
  return (
    <div className="rounded-3xl mb-8 bg-white shadow-sm overflow-hidden">
      <div className="grid md:grid-cols-[1.2fr,1fr]">
        {/* Left: Description */}
        <div className="min-w-0 p-6 md:p-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent-700">
            Case study
          </p>

          <h3 className="text-sm font-semibold text-ink">{project.title}</h3>
          {project.subtitle && (
            <p className="mt-1 text-xs text-stone-500">{project.subtitle}</p>
          )}

          {/* {project.description.map((p, i) => (
            <p key={i} className="mt-2 text-sm text-stone-600">
              {p}
            </p>
          ))} */}

          {/* Skill / feature pills */}
          {/* <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-stone-700">
            {project.pills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1"
              >
                {pill}
              </span>
            ))}
          </div> */}

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={href}
              className="sparkle-btn inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-2 text-xs font-medium text-stone-50 hover:bg-stone-800 transition"
              aria-label={`Open details for ${project.title}`}
            >
              View details →
            </Link>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open live site for ${project.title} in a new tab`}
              className="
    sparkle-btn sparkle-btn--soft
    relative inline-flex items-center justify-center
    overflow-hidden
    rounded-full
    px-4 py-2
    text-xs font-medium
    transition-all duration-500
  "
            >
              <span className="sparkle-layer" aria-hidden />
              <span className="relative z-10">Live site ↗</span>
            </a>

          </div>
        </div>

        {/* Right: Visual preview */}
        <div className="min-w-0 bg-stone-100 text-white/80 overflow-hidden">
          <div className="text-xs uppercase tracking-[0.2em] px-6 pt-4 pb-2 text-violet-400">
            Live preview
          </div>

          <IframePreview url={project.liveUrl} title={project.previewTitle} detailsHref={project.slug} />
        </div>
      </div>
    </div>
  );
}