import type { MDXComponents } from "mdx/types";
import { ExternalLink } from "lucide-react";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-dark text-4xl leading-tight font-bold md:text-6xl">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-dark pt-6 text-3xl leading-tight font-bold md:text-4xl">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-dark mt-8 text-2xl leading-tight font-bold md:text-3xl">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-dark mt-5 text-lg leading-relaxed md:text-xl">
      {children}
    </p>
  ),
  a: ({ children, href }) => (
    <a
      className="decoration-dark/40 hover:text-secondary hover:decoration-secondary underline decoration-2 underline-offset-4 transition-colors"
      href={href}
    >
      {children} <ExternalLink className="inline h-[1em] w-[1em]" />
    </a>
  ),
  ul: ({ children }) => (
    <ul className="mt-5 list-disc space-y-2 pl-6 text-lg leading-relaxed md:text-xl">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="mt-5 list-decimal space-y-2 pl-6 text-lg leading-relaxed md:text-xl">
      {children}
    </ol>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-accent bg-primary/20 mt-8 border-l-8 p-5 text-xl font-medium">
      {children}
    </blockquote>
  ),
  hr: () => <div className="bg-dark/70 my-10 h-1 w-full rounded-2xl" />,
  code: ({ children }) => (
    <code className="bg-dark/10 text-dark rounded px-1.5 py-0.5 font-mono text-[0.95em]">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
