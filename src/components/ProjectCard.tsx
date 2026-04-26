'use client';

import IframePreview from './IframePreview';
import Link from 'next/link';
import { PRIMARY_CTA_CLASSNAME } from '@/app/constants';
import { Project } from '@/types';

export default function ProjectCard({
  project,
  href,
  noBottomSpace = false,
}: {
  project: Project;
  href: string;
  noBottomSpace?: boolean;
}) {
  return (
    <div className={`rounded-3xl bg-white shadow-sm overflow-hidden ${noBottomSpace ? '' : 'mb-8'}`}>
      <div className="grid md:grid-cols-[1.2fr,1fr]">
        {/* Left: Description */}
        <div className="min-w-0 p-6 md:p-8">
          <div className="flex items-center justify-between gap-3">
            <h3 className="min-w-0 flex-1 text-base font-semibold leading-snug text-ink">
              {project.title}
            </h3>
            <Link
              href={href}
              className={`${PRIMARY_CTA_CLASSNAME} shrink-0 px-4 py-2 text-xs sm:px-5 sm:py-2.5 sm:text-sm`}
              aria-label={`Open details for ${project.title}`}
            >
              <span className="sparkle-layer" aria-hidden />
              <span className="relative z-10">View details →</span>
            </Link>
          </div>
          {project.subtitle && (
            <p className="mt-2 text-xs text-stone-500">{project.subtitle}</p>
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
        </div>

        {/* Right: Visual preview */}
        <div className="min-w-0 bg-stone-100 text-white/80 overflow-hidden pb-4">
          <div className="text-xs uppercase tracking-[0.2em] px-6 pt-4 pb-2 text-violet-400">
            Live preview
          </div>

          <IframePreview
            url={project.liveUrl}
            title={project.previewTitle}
            detailsHref={project.slug}
          />
        </div>
      </div>
    </div>
  );
}