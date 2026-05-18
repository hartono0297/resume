"use client";

import { ChevronDown, Download, Eye, FileText } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

type ResumeMenuProps = {
  variant?: "primary" | "secondary";
  className?: string;
};

const triggerStyles = {
  primary:
    "border-accent bg-accent text-accent-contrast hover:bg-accent-strong hover:text-accent-contrast",
  secondary:
    "border-border bg-transparent text-foreground hover:border-accent hover:bg-surface-raised"
};

export function ResumeMenu({ variant = "secondary", className }: ResumeMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!menuRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className={cn("relative inline-flex", className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
        className={cn(
          "focus-ring inline-flex min-h-11 w-full items-center justify-center gap-2 rounded border px-5 py-3 font-mono text-xs font-semibold transition-colors duration-200",
          triggerStyles[variant]
        )}
      >
        <FileText aria-hidden="true" className="h-4 w-4" />
        <span>Resume</span>
        <ChevronDown
          aria-hidden="true"
          className={cn("h-4 w-4 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {isOpen ? (
        <div
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded border border-border bg-surface-card p-1 shadow-kinetic"
        >
          <a
            role="menuitem"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setIsOpen(false)}
            className="focus-ring flex items-center gap-3 rounded px-3 py-3 font-mono text-xs text-foreground transition-colors duration-200 hover:bg-surface-raised"
          >
            <Eye aria-hidden="true" className="h-4 w-4 text-accent-strong dark:text-accent" />
            View
          </a>
          <a
            role="menuitem"
            href={profile.resume}
            download
            onClick={() => setIsOpen(false)}
            className="focus-ring flex items-center gap-3 rounded px-3 py-3 font-mono text-xs text-foreground transition-colors duration-200 hover:bg-surface-raised"
          >
            <Download aria-hidden="true" className="h-4 w-4 text-accent-strong dark:text-accent" />
            Download
          </a>
        </div>
      ) : null}
    </div>
  );
}
