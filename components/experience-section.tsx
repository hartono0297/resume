import { education, experiences } from "@/data/experience";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell scroll-mt-20" aria-labelledby="experience-title">
      <Reveal>
        <div className="grid gap-14 md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-8">
            <SectionHeading number="05" label="Experience" id="experience-title" />
            <div className="relative ml-3 border-l border-border pl-8">
              {experiences.map((experience, index) => (
                <article key={`${experience.company}-${experience.role}`} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[38px] top-1.5 h-3 w-3 rounded-full border-4 border-background bg-accent" />
                  <p className="mb-2 font-mono text-xs uppercase text-muted">{experience.period}</p>
                  <h3 className="text-2xl font-bold text-foreground">{experience.role}</h3>
                  <p className={index === 0 ? "mt-1 text-sm font-semibold text-accent-strong dark:text-accent" : "mt-1 text-sm font-semibold text-muted"}>
                    {experience.company}
                  </p>
                  <p className="mt-5 max-w-3xl text-sm leading-7 text-subtle md:text-base">
                    {experience.description}
                  </p>
                  <ul className="mt-5 grid gap-2 text-sm leading-6 text-subtle">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <aside className="md:col-span-4">
            <SectionHeading number="06" label="Education" />
            <div className="technical-card p-6 md:p-7">
              <p className="mb-3 font-mono text-xs uppercase text-muted">{education.period}</p>
              <h3 className="text-2xl font-bold text-foreground">{education.major}</h3>
              <p className="mt-2 text-base text-muted">{education.university}</p>
              <div className="my-6 h-px bg-border" />
              <p className="text-sm leading-6 text-subtle">{education.location}</p>
            </div>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
