'use client';

import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { PROJECTS } from '@/app/constants';
import { Project } from '@/types';
import PageTopSection from '@/components/PageTopSection';

function sortByTitle(a: Project, b: Project) {
  return a.title.localeCompare(b.title);
}

const SECTION_IDS = ['custom-projects', 'business-projects', 'one-pager-projects'] as const;

export default function WorkIndexPage() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    'custom-projects': false,
    'business-projects': false,
    'one-pager-projects': false,
  });

  const customProjects = PROJECTS.filter((p) => p.category === 'custom').sort(sortByTitle);
  const businessProjects = PROJECTS.filter((p) => p.category === 'structured').sort(sortByTitle);
  const onePageProjects = PROJECTS.filter((p) => p.category === 'one-pager').sort(sortByTitle);

  const sections: { id: (typeof SECTION_IDS)[number]; title: string; projects: Project[]; emptyMessage: string }[] = [
    { id: 'one-pager-projects', title: 'Launch Sites', projects: onePageProjects, emptyMessage: 'Focused site samples coming soon.' },
    { id: 'business-projects', title: 'Business Sites', projects: businessProjects, emptyMessage: 'Structured build samples coming soon.' },
    { id: 'custom-projects', title: 'Custom Builds', projects: customProjects, emptyMessage: 'Custom projects coming soon.' },
  ];

  function toggle(id: string) {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <main className="min-h-screen bg-accent-50 text-ink">
      <PageTopSection
        slug="Our work"
        title="Projects & samples"
        description="View the projects below by category. Click into any project to see the details, then open the live site."
      />

      <div className="mx-auto max-w-5xl px-4 pb-20">
        {sections.map(({ id, title, projects, emptyMessage }) => {
          const isOpen = openSections[id] ?? false;
          return (
            <section key={id} id={id} className="scroll-mt-20 mb-5">
              <button
                type="button"
                onClick={() => toggle(id)}
                className="flex w-full cursor-pointer items-center justify-between gap-3 rounded-t-2xl border border-b-0 border-stone-200 bg-white px-5 py-4 text-left shadow-sm transition hover:bg-stone-50"
                aria-expanded={isOpen}
                aria-controls={`${id}-content`}
              >
                <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
                  {title}
                </h2>
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-lg text-white shadow-sm transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  style={{ backgroundColor: 'var(--btn-primary)' }}
                  aria-hidden
                >
                  ▾
                </span>
              </button>
              <div
                id={`${id}-content`}
                className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden rounded-b-2xl border border-t-0 border-stone-200 bg-white shadow-sm">
                  <div className="px-4 pb-6 pt-2">
                    {projects.length === 0 ? (
                      <div className="rounded-2xl bg-stone-50 p-6 text-sm text-stone-600">
                        {emptyMessage}
                      </div>
                    ) : (
                      projects.map((project) => (
                        <ProjectCard
                          key={project.slug}
                          project={{
                            title: project.title,
                            subtitle: project.subtitle,
                            liveUrl: project.liveUrl,
                            previewTitle: project.previewTitle,
                            description: project.description,
                            pills: project.pills,
                            category: project.category,
                            slug: project.slug,
                          }}
                          href={`/work/${project.slug}`}
                        />
                      ))
                    )}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
