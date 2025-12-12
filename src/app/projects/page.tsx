import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Your Name",
  description: "A collection of my projects and side experiments.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Projects</h1>
        <p className="text-xl text-[var(--text-secondary)]">
          A collection of projects I&apos;ve worked on, from side experiments to
          full-fledged applications.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
