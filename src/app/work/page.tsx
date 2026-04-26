import { PROJECTS } from '@/app/constants';
import { Project } from '@/types';
import PageTopSection from '@/components/PageTopSection';
import ProjectCard from '@/components/ProjectCard';

function sortByTitle(a: Project, b: Project) {
  return a.title.localeCompare(b.title);
}

export default function WorkIndexPage() {
  const projects = [...PROJECTS].sort(sortByTitle);

  return (
    <main className="min-h-screen bg-accent-50 text-ink">
      <PageTopSection
        slug="Our work"
        title="Projects & samples"
        description="Browse live sites we’ve designed and built."
      />

      <div className="mx-auto max-w-5xl px-4 pb-20">
        {projects.length === 0 ? (
          <p className="rounded-2xl border border-stone-200 bg-white p-6 text-sm text-stone-600 shadow-sm">
            Project samples coming soon.
          </p>
        ) : (
          <div className="flex flex-col gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug ?? project.title}
                project={project}
                href={project.slug ? `/work/${project.slug}` : '/work'}
                noBottomSpace
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
