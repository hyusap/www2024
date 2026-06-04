import BlogBreadcrumb from "./breadcrumb";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-primary text-dark min-h-screen px-5 py-8 md:px-10 md:py-14">
      <BlogBreadcrumb />
      <article className="border-dark bg-light mx-auto max-w-3xl border-8 p-6 md:p-10">
        {children}
      </article>
    </main>
  );
}
