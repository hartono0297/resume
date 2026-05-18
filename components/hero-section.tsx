import { ArrowDown, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";
import { ResumeMenu } from "./resume-menu";
import { SectionHeading } from "./section-heading";

const metadata = [
  { label: "Location", value: `Based in ${profile.location}` },
  { label: "Focus", value: profile.focus },
  { label: "Current status", value: profile.status },
  { label: "Stack", value: ".NET, SQL Server, Vue.js" }
];

export function HeroSection() {
  return (
    <section id="top" className="section-shell pt-32 md:pt-40" aria-labelledby="hero-title">
      <Reveal>
        <SectionHeading number="01" label="Hero" />
        <div className="grid gap-12 md:grid-cols-12 md:gap-gutter">
          <div className="md:col-span-9">
            <h1 id="hero-title" className="text-5xl font-extrabold text-foreground sm:text-6xl md:text-7xl">
              {profile.shortName}.
            </h1>
            <p className="mt-7 max-w-5xl text-2xl font-semibold leading-tight text-muted md:text-4xl">
              {profile.headline}
            </p>
            <p className="mt-10 max-w-2xl text-base leading-8 text-subtle md:text-lg">
              {profile.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href="#work" icon={ArrowDown} variant="primary" iconClassName="hero-arrow-bob">
                View Selected Work
              </ButtonLink>
              <ResumeMenu />
              <ButtonLink href={`mailto:${profile.email}`} icon={Mail} variant="ghost">
                Get in Touch
              </ButtonLink>
            </div>
          </div>

          <aside className="border-l border-border pl-5 md:col-span-3 md:self-end">
            <dl className="grid gap-5">
              {metadata.map((item) => (
                <div key={item.label}>
                  <dt className="mono-label mb-1">{item.label}</dt>
                  <dd className="font-mono text-xs leading-5 text-foreground">{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </Reveal>
    </section>
  );
}
