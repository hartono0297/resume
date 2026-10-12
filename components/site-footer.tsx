import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "WhatsApp", href: profile.whatsapp },
  { label: "Email", href: `mailto:${profile.email}` }
];

const badmintonInvite = `${profile.whatsapp}?text=${encodeURIComponent(
  "Hi Hartono, I found the easter egg on your portfolio. Up for a badminton match?"
)}`;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-mono text-xs text-muted">
            (c) 2026 Hartono.
          </p>
          <details className="group font-mono text-xs text-subtle">
            <summary className="focus-ring w-fit cursor-pointer list-none rounded transition-colors duration-200 hover:text-accent-strong dark:hover:text-accent [&::-webkit-details-marker]:hidden">
              <span className="group-open:hidden">{"// psst..."}</span>
              <span className="hidden group-open:inline">{"// you found it."}</span>
            </summary>
            <p className="mt-2 max-w-md leading-5">
              Off the clock, I&apos;m usually on a badminton court. My smash is still in beta, but my
              footwork passes code review. Need a doubles partner?{" "}
              <a
                href={badmintonInvite}
                target="_blank"
                rel="noreferrer"
                className="focus-ring rounded text-accent-strong underline-offset-4 hover:underline dark:text-accent"
              >
                Challenge me to a rally
              </a>
              .
            </p>
          </details>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="focus-ring rounded font-mono text-xs text-muted transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
