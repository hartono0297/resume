import { ArrowDown } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";
import { ResumeMenu } from "./resume-menu";

export function HeroSection() {
  return (
    <section id="top" className="section-shell pb-24 pt-36 md:pb-32 md:pt-48" aria-labelledby="hero-title">
      <Reveal>
        <p className="inline-flex items-center gap-3 rounded-full border border-border px-4 py-2 font-mono text-xs text-muted">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profile.status}
          <span className="hidden sm:inline">· {profile.location}</span>
        </p>

        <h1 id="hero-title" className="mt-8 text-5xl font-extrabold text-foreground sm:text-6xl md:text-8xl">
          Hi, I&apos;m {profile.shortName}.
        </h1>
        <p className="mt-6 max-w-3xl text-xl font-medium leading-snug text-muted md:text-3xl">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-2xl text-base leading-7 text-subtle md:text-lg">
          {profile.subheadline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#work" icon={ArrowDown} variant="primary" iconClassName="hero-arrow-bob">
            View Selected Work
          </ButtonLink>
          <ResumeMenu />
        </div>
      </Reveal>
    </section>
  );
}
