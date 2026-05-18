import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "WhatsApp", href: profile.whatsapp },
  { label: "Email", href: `mailto:${profile.email}` }
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-shell flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-muted">
          (c) 2026 Hartono.
        </p>
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
