"use client";

import Link from "next/link";
import React, { useTransition } from "react";
import cx from "classnames";
import dateformat from "dateformat";
import { ArticlCardType } from "@/types/articles";
import { useRouter } from "next/navigation";

export function ArticleSerieCard({ article }: { article: ArticlCardType }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function navigate() {
    startTransition(() => {
      router.push(`/articles/`);
    });
  }

  return (
    <Link
      onClick={navigate}
      aria-lable={`Learn more about ${article.title}`}
      href={`/articles/${article.slug}`}
      className={cx(
        "p-4 shrink-0 h-[260px] flex flex-col  w-[220px] hover:ml-[-70px] hover:rotate-6 hover:-translate-y-2 first:hover:translate-y-0 first:hover:ml-[100px] hover:translate-x-[-80px] hover:mr-[50px] first:hover:mr-[40px]  first:ml-0 card-glass-box ml-[-100px] origin-center shadow  border gap-4 relative transition-all group  border-theme-accent  duration-200 will-change-transform  rounded-md cursor-pointer  hover:border-theme-accent border-opacity-20 hover:border-opacity-20",
        isPending && "cursor-wait",
      )}
    >
      <h2 className="text-xl mt-auto font-semibold text-white">
        {article.title}
      </h2>
      <div className="flex gap-2 mt-4">
        {article.categories &&
          article.categories.map((cat) => (
            <span
              key={cat}
              id={cat}
              className="block px-2 py-1 text-sm rounded-lg cursor-pointer bg-theme-primary-opaque"
            >
              {cat}
            </span>
          ))}
      </div>
      <span className=" block my-1 text-sm text-theme-primary">
        {dateformat(article.releasedAt, "mediumDate")}
      </span>
    </Link>
  );
}
