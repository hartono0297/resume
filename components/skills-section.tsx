import { skills } from "@/data/skills";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Tag } from "./tag";

export function SkillsSection() {
  return (
    <section className="section-shell" aria-labelledby="skills-title">
      <Reveal>
        <SectionHeading number="03" label="Technical Stack" id="skills-title" />
        <div className="grid gap-gutter md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <article key={group.category} className="technical-card p-6">
              <h3 className="border-b border-border pb-4 font-mono text-xs font-semibold uppercase text-foreground">
                {group.category}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
