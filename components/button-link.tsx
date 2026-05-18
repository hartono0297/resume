import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  download?: boolean;
  className?: string;
  iconClassName?: string;
};

const variants = {
  primary:
    "border-accent bg-accent text-accent-contrast hover:bg-accent-strong hover:text-accent-contrast dark:hover:bg-accent-strong",
  secondary:
    "border-border bg-transparent text-foreground hover:border-accent hover:bg-surface-raised",
  ghost:
    "border-transparent bg-transparent text-muted hover:border-border hover:bg-surface-raised hover:text-foreground"
};

export function ButtonLink({
  href,
  children,
  icon: Icon,
  variant = "secondary",
  external = false,
  download = false,
  className,
  iconClassName
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      download={download}
      className={cn(
        "focus-ring group inline-flex min-h-11 items-center justify-center gap-2 rounded border px-5 py-3 font-mono text-xs font-semibold transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      <span>{children}</span>
      {Icon ? (
        <Icon
          aria-hidden="true"
          className={cn("h-4 w-4 shrink-0 transition-transform duration-200 ease-out", iconClassName)}
        />
      ) : null}
    </a>
  );
}
