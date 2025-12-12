import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-lg border border-[var(--border-color)] p-6 transition-all hover:border-[var(--foreground)] hover:shadow-lg">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-[var(--foreground)]">
            {project.title}
          </h3>
          {project.featured && (
            <span className="font-sans-medium rounded-full bg-[var(--accent-color)] px-2 py-1 text-xs text-white">
              Featured
            </span>
          )}
        </div>

        <p className="text-[var(--text-secondary)] leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="font-sans-medium rounded-full bg-[var(--hover-bg)] px-3 py-1 text-xs text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-2 flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-medium text-sm font-medium text-[var(--accent-color)] hover:underline"
            >
              View Project →
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans-medium text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--foreground)] hover:underline"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
