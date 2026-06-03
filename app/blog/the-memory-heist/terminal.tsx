import type { ReactNode } from "react";

export default function Terminal({
  children,
  title = "terminal",
}: {
  children: ReactNode;
  title?: string;
}) {
  return (
    <div className="bg-dark [&_p]:text-light my-8 overflow-hidden rounded-2xl [&_code]:bg-transparent [&_p]:m-0 [&_p]:font-mono [&_p]:text-[0.95rem] [&_p]:leading-relaxed [&_p]:whitespace-pre-wrap">
      <div className="flex items-center bg-[#d8d2d8] px-4 py-3">
        <div className="flex items-center gap-2">
          <span
            className="size-3 rounded-full bg-[#ff6b6b]"
            aria-hidden="true"
          />
          <span
            className="size-3 rounded-full bg-[#ffd43b]"
            aria-hidden="true"
          />
          <span
            className="size-3 rounded-full bg-[#69db7c]"
            aria-hidden="true"
          />
        </div>
        <div className="text-dark/70 flex-1 text-center text-sm font-semibold">
          {title}
        </div>
        <div className="w-[52px]" aria-hidden="true" />
      </div>
      <div className="text-light p-4">{children}</div>
    </div>
  );
}
