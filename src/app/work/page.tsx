'use client';

import { PROJECTS } from '@/app/constants';
import { Project } from '@/types';
import PageTopSection from '@/components/PageTopSection';
import ProjectCarousel from '@/components/ProjectCarousel';

function sortByTitle(a: Project, b: Project) {
  return a.title.localeCompare(b.title);
}

export default function WorkIndexPage() {
  const customProjects = PROJECTS.filter((p) => p.category === 'custom').sort(sortByTitle);
  const businessProjects = PROJECTS.filter((p) => p.category === 'structured').sort(sortByTitle);
  const onePageProjects = PROJECTS.filter((p) => p.category === 'one-pager').sort(sortByTitle);

  const sections: {
    id: string;
    title: string;
    blurb: string;
    projects: Project[];
    emptyMessage: string;
  }[] = [
      {
        id: 'custom-projects',
        title: 'Custom Sites',
        blurb: 'Fully tailored sites with custom design and UX, and built-in tools like quote calculators and booking flows.',
        projects: customProjects,
        emptyMessage: 'Custom projects coming soon.',
      },
      {
        id: 'business-projects',
        title: 'Business Sites',
        blurb: 'Multi-page sites built on a proven layout system.',
        projects: businessProjects,
        emptyMessage: 'Structured build samples coming soon.',
      },
      {
        id: 'one-pager-projects',
        title: 'Launch Sites',
        blurb: 'Single-page sites for one offer, event, or lead capture.',
        projects: onePageProjects,
        emptyMessage: 'Focused site samples coming soon.',
      },
    ];

  return (
    <main className="min-h-screen bg-accent-50 text-ink">
      <PageTopSection
        slug="Our work"
        title="Projects & samples"
        description="View the projects below by category."
      />

      <div className="mx-auto max-w-5xl px-4 pb-20">
        {sections.map(({ id, title, blurb, projects, emptyMessage }) => (
          <section key={id} id={id} className="mb-5 scroll-mt-20">
            <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
              <div className="border-b border-stone-200 px-5 py-4">
                <h2 className="text-2xl font-semibold text-ink sm:text-3xl">{title}</h2>
                <p className="mt-0.5 text-sm text-stone-500">{blurb}</p>
              </div>
              <div id={`${id}-content`} className="px-4 pb-6 pt-2">
                {projects.length === 0 ? (
                  <div className="rounded-2xl bg-stone-50 p-6 text-sm text-stone-600">
                    {emptyMessage}
                  </div>
                ) : (
                  <ProjectCarousel projects={projects} />
                )}
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
