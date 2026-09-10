import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CalloutType = "tip" | "let-op";

export function Callout({
  type = "tip",
  children,
}: {
  type?: CalloutType;
  children: ReactNode;
}) {
  return (
    <aside
      className={cn(
        "my-8 rounded-[16px] border px-6 py-5",
        type === "tip" && "border-accent-border bg-accent-muted",
        type === "let-op" && "border-border-strong bg-background-tertiary",
      )}
    >
      <p className="font-mono text-[12px] font-medium uppercase leading-none tracking-[0.08em] text-foreground-muted">
        {type === "let-op" ? "/ LET OP" : "/ TIP"}
      </p>
      <div className="mt-3 text-[16px] leading-[1.7] text-foreground-secondary [&_p]:m-0">
        {children}
      </div>
    </aside>
  );
}
