// app/work/page.tsx
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import { PROJECTS } from '@/app/constants';
import { Project } from '@/types';
import PageTopSection from '@/components/PageTopSection';

function sortByTitle(a: Project, b: Project) {
  return a.title.localeCompare(b.title);
}

export default function WorkIndexPage() {
  const customProjects = PROJECTS.filter((p) => p.category === 'custom').sort(sortByTitle);
  const structuredProjects = PROJECTS.filter((p) => p.category === 'structured').sort(sortByTitle);
  const onePageProjects = PROJECTS.filter((p) => p.category === 'one-pager').sort(sortByTitle);

  return (
    <main className="min-h-screen bg-accent-50 text-ink">
      <PageTopSection
        slug="My work"
        title="Projects & samples"
        description="A mix of fully custom builds and structured builds. Click into any project to see the details, then open the live site."
      />

      <Section id="custom-projects" title="Custom projects">
        {customProjects.length === 0 ? (
          <div className="rounded-2xl bg-white shadow-sm p-6 text-sm text-stone-600 shadow-sm">
            Custom projects coming soon.
          </div>
        ) : (
          customProjects.map((project) => (
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
      </Section>

      <Section id="structured-build-projects" title="Structured build projects">
        {structuredProjects.length === 0 ? (
          <div className="rounded-2xl bg-white shadow-sm p-6 text-sm text-stone-600 shadow-sm">
            Structured build samples coming soon.
          </div>
        ) : (
          structuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{
                title: project.title,
                slug: project.slug,
                subtitle: project.subtitle,
                liveUrl: project.liveUrl,
                previewTitle: project.previewTitle,
                description: project.description,
                pills: project.pills,
                category: project.category,
              }}
              href={`/work/${project.slug}`}
            />
          ))
        )}
      </Section>

      <Section id="one-pager-projects" title="Focused site projects">
        {onePageProjects.length === 0 ? (
          <div className="rounded-2xl bg-white shadow-sm p-6 text-sm text-stone-600 shadow-sm">
            Focused site samples coming soon.
          </div>
        ) : (
          onePageProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={{
                title: project.title,
                slug: project.slug,
                subtitle: project.subtitle,
                liveUrl: project.liveUrl,
                previewTitle: project.previewTitle,
                description: project.description,
                pills: project.pills,
                category: project.category,
              }}
              href={`/work/${project.slug}`}
            />
          ))
        )}
      </Section>

      <div className="pb-20" />
    </main>
  );
}
