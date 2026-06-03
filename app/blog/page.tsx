import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";

function formatDate(value?: string) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default async function BlogPage() {
  const posts = await getBlogPosts();
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-7xl font-semibold">Writings</h1>
        <p className="text-2xl">a place for my longer-form content</p>
      </div>

      {posts.length === 0 ? (
        <p className="text-dark/60">Nothing published yet — check back soon.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-dark/20">
          {posts.map((post) => (
            <li key={post.slug} className="py-6 first:pt-0 last:pb-0">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl font-bold group-hover:underline">
                    {post.title}
                  </h2>
                  {post.draft && (
                    <span className="border-dark/40 text-dark/50 rounded border px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wide">
                      Draft
                    </span>
                  )}
                </div>
                {post.description && (
                  <p className="text-dark/70 mt-1 text-base">
                    {post.description}
                  </p>
                )}
                {post.date && (
                  <time
                    dateTime={post.date}
                    className="text-dark/50 mt-2 block text-sm font-semibold uppercase tracking-wide"
                  >
                    {formatDate(post.date)}
                  </time>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
