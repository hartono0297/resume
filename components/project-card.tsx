import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { Tag } from "./tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="technical-card technical-card-hover group flex min-h-full flex-col overflow-hidden">
      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="mb-4 font-mono text-xs uppercase text-muted">{project.category}</p>
        <h3 className="text-2xl font-bold text-foreground transition-colors duration-200 group-hover:text-accent-strong dark:group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-5 text-sm leading-7 text-subtle md:text-base">{project.description}</p>

        <div className="mt-6">
          <p className="mono-label mb-2">Impact</p>
          <p className="text-sm leading-6 text-subtle">{project.impact}</p>
        </div>

        {project.note ? (
          <div className="mt-5 border-l border-accent pl-4">
            <p className="font-mono text-xs leading-5 text-muted">{project.note}</p>
          </div>
        ) : null}

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="focus-ring mt-6 inline-flex w-fit items-center gap-2 rounded border border-border px-4 py-2.5 font-mono text-xs font-semibold text-foreground transition-colors duration-200 hover:border-accent hover:bg-surface-raised"
          >
            Visit
            <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        ) : null}
      </div>

      <div className="border-t border-border bg-surface px-6 py-4 md:px-7">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <Tag key={technology}>{technology}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
