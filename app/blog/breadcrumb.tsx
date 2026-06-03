"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaChevronRight } from "react-icons/fa6";

export default function BlogBreadcrumb() {
  const pathname = usePathname();
  const isArticle = pathname !== "/blog";
  const [articleTitle, setArticleTitle] = useState("");

  useEffect(() => {
    if (!isArticle) {
      setArticleTitle("");
      return;
    }

    setArticleTitle(document.title);
  }, [isArticle, pathname]);

  return (
    <nav
      className="text-dark mx-auto mb-4 flex max-w-3xl items-center gap-2 text-sm font-semibold uppercase md:mb-5"
      aria-label="Breadcrumb"
    >
      <a className="hover:text-secondary underline underline-offset-4" href="/">
        Home
      </a>
      <FaChevronRight aria-hidden="true" />
      {isArticle ? (
        <a
          className="hover:text-secondary underline underline-offset-4"
          href="/blog"
        >
          Blog
        </a>
      ) : (
        <span aria-current="page">Blog</span>
      )}
      {isArticle && articleTitle ? (
        <>
          <FaChevronRight aria-hidden="true" />
          <span aria-current="page">{articleTitle}</span>
        </>
      ) : null}
    </nav>
  );
}
