"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { ResumeMenu } from "./resume-menu";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between">
        <a
          href="#top"
          className="focus-ring rounded font-sans text-2xl font-bold text-foreground"
          aria-label="Hartono Hong home"
        >
          {profile.initials} //
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="focus-ring rounded font-mono text-xs font-medium text-muted transition-colors duration-200 hover:text-accent-strong dark:hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <ResumeMenu variant="primary" />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            title={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((value) => !value)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded border border-border bg-surface-card text-foreground"
          >
            {isOpen ? (
              <X aria-hidden="true" className="h-4 w-4" />
            ) : (
              <Menu aria-hidden="true" className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-border bg-background/95 px-5 py-4 backdrop-blur-xl md:hidden",
          isOpen ? "block" : "hidden"
        )}
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="focus-ring rounded border border-transparent px-3 py-3 font-mono text-xs font-medium text-muted transition-colors duration-200 hover:border-border hover:bg-surface-raised hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <ResumeMenu variant="primary" className="mt-2 w-full" />
        </nav>
      </div>
    </header>
  );
}
