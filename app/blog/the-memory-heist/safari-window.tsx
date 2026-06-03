import type { ReactNode } from "react";

export default function SafariWindow({
  children,
  url,
}: {
  children: ReactNode;
  url: string;
}) {
  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-black/20 bg-[#f4f4f5]">
      <div className="flex items-center gap-4 border-b border-black/10 bg-[#e7e7ea] px-4 py-3">
        <div className="flex shrink-0 items-center gap-2">
          <span
            className="size-3 rounded-full bg-[#ff5f57]"
            aria-hidden="true"
          />
          <span
            className="size-3 rounded-full bg-[#febc2e]"
            aria-hidden="true"
          />
          <span
            className="size-3 rounded-full bg-[#28c840]"
            aria-hidden="true"
          />
        </div>
        <div className="min-w-0 flex-1 rounded-md bg-white px-3 py-1.5 text-center text-sm font-medium text-dark/70">
          {url}
        </div>
      </div>
      <div className="bg-white p-5 text-black [&_code]:bg-transparent [&_code]:p-0 [&_code]:text-black [&_p]:my-3 [&_p:first-child]:mt-0 [&_p:last-child]:mb-0 [&_p]:whitespace-pre-wrap [&_p]:font-mono [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-black [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:bg-transparent [&_pre]:text-sm [&_pre]:leading-relaxed [&_pre]:text-black">
        {children}
      </div>
    </div>
  );
}
