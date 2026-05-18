import { projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjectsSection() {
  return (
    <section id="work" className="section-shell scroll-mt-20" aria-labelledby="work-title">
      <Reveal>
        <SectionHeading
          number="04"
          label="Selected Work"
          id="work-title"
          lead="Selected internal projects focused on business context, technical contribution, and operational impact."
        />
        <div className="grid gap-gutter lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
