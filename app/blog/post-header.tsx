import type { BlogPostMetadata } from "@/types/blog";

function formatDate(value?: string) {
  if (!value) return null;

  const date = new Date(`${value}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function BlogPostHeader({
  metadata,
}: {
  metadata: BlogPostMetadata;
}) {
  const publishedDate = formatDate(metadata.date);
  const updatedDate = formatDate(metadata.updated);
  const showUpdatedDate = updatedDate && updatedDate !== publishedDate;

  return (
    <header className="relative mb-10">
      {metadata.draft ? (
        <div
          aria-hidden
          className="pointer-events-none absolute top-1 right-0 rotate-[20deg] select-none"
        >
          <div className="border-[3px] border-red-600/50 p-[3px]">
            <div className="border border-red-600/50 px-4 py-1.5">
              <span className="block font-mono text-2xl font-black text-red-600/50 uppercase">
                DRAFT
              </span>
            </div>
          </div>
        </div>
      ) : null}

      {metadata.title ? (
        <h1 className="text-dark text-4xl leading-tight font-bold md:text-6xl">
          {metadata.title}
        </h1>
      ) : null}

      {metadata.description ? (
        <p className="text-dark/80 text-xl leading-relaxed md:text-2xl">
          {metadata.description}
        </p>
      ) : null}

      <div className="text-dark/70 mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-semibold tracking-wide uppercase">
        {publishedDate ? (
          <time dateTime={metadata.date}>{publishedDate}</time>
        ) : null}
        {showUpdatedDate ? <span>Updated {updatedDate}</span> : null}
      </div>
    </header>
  );
}
