import { ReactNode } from "react";
export function Badge({ children }: { children: ReactNode }) {
  return <span className="rounded bg-white/10 px-2 py-0.5 text-xs">{children}</span>;
}
