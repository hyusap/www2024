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
    <header className="mb-10">
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
