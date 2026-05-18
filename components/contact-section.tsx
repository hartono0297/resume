import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "./button-link";
import { Reveal } from "./reveal";
import { ResumeMenu } from "./resume-menu";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="section-shell scroll-mt-20 border-b-0 py-28 text-center md:py-40" aria-labelledby="contact-title">
      <Reveal>
        <SectionHeading
          number="07"
          label="Contact"
          id="contact-title"
          title="Let's build something reliable."
          align="center"
        />
        <p className="mx-auto max-w-2xl text-base leading-8 text-subtle md:text-lg">
          I'm open to software developer roles focused on backend development, full-stack development,
          internal business applications, automation, and system integration.
        </p>

        <div className="mx-auto mt-9 flex max-w-3xl flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={`mailto:${profile.email}`} icon={Mail} variant="primary">
            Email Me
          </ButtonLink>
          <ButtonLink href={profile.whatsapp} icon={MessageCircle} external>
            WhatsApp
          </ButtonLink>
          <ButtonLink href={profile.linkedin} icon={Linkedin} external>
            LinkedIn
          </ButtonLink>
          <ButtonLink href={profile.github} icon={Github} external>
            GitHub
          </ButtonLink>
          <ResumeMenu />
        </div>
      </Reveal>
    </section>
  );
}
