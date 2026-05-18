import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-sm border border-border bg-transparent px-2.5 py-1.5 font-mono text-xs text-muted">
      {children}
    </span>
  );
}
