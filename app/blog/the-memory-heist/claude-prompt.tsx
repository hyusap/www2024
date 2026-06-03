import type { ReactNode } from "react";
import ClaudeAI from "./claude-ai";

export default function ClaudePrompt({ children }: { children: ReactNode }) {
  return (
    <span className="border-dark/15 text-dark mx-0.5 rounded-md border bg-[#f8eee8] px-1.5 py-0.5 font-medium shadow-[inset_0_-1px_0_rgba(47,10,40,0.12)]">
      <ClaudeAI
        className="mr-1.5 inline size-[0.9em] translate-y-[0.1em] align-text-top text-[#D97757]"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}
