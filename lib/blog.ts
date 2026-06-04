import fs from "fs";
import path from "path";
import type { BlogPostMetadata } from "@/types/blog";

export type BlogPost = BlogPostMetadata & { slug: string };

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const mod = await import(`@/app/blog/${slug}/page.mdx`);
    if (!mod.metadata) return null;
    return { slug, ...(mod.metadata as BlogPostMetadata) };
  } catch {
    return null;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), "app/blog");
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts = await Promise.all(
    entries
      .filter((e) => e.isDirectory())
      .map(async (dir): Promise<BlogPost | null> => {
        return getBlogPost(dir.name);
      })
  );

  return posts
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => {
      if (!a.date && !b.date) return 0;
      if (!a.date) return 1;
      if (!b.date) return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
}
