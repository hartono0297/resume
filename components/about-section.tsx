import { Bot, BriefcaseBusiness, Database, ServerCog } from "lucide-react";
import { about, highlights } from "@/data/profile";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

const iconMap = {
  BriefcaseBusiness,
  ServerCog,
  Database,
  Bot
};

export function AboutSection() {
  return (
    <section id="about" className="section-shell scroll-mt-20" aria-labelledby="about-title">
      <Reveal>
        <SectionHeading number="02" label="About" id="about-title" />
        <div className="grid gap-12 md:grid-cols-12 md:gap-gutter">
          <div className="space-y-6 text-base leading-8 text-subtle md:col-span-5 md:text-lg">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            {highlights.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <article key={item.title} className="technical-card technical-card-hover p-6">
                  <Icon aria-hidden="true" className="mb-8 h-7 w-7 text-accent-strong dark:text-accent" />
                  <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-subtle">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
