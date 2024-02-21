"use client";
import Link from "next/link";
import React, { useTransition } from "react";
import SanityImage from "@/components/common/sanity-image";
import cx from "classnames";
import dateformat from "dateformat";
import type { ArticlCardType } from "@/types/articles";
import { useRouter } from "next/navigation";

export default function ArticleCard({
  title,
  mainImage,
  slug,
  releasedAt,
  categories,
}: ArticlCardType) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  function navigate() {
    startTransition(() => {
      router.push(`/articles/${slug}`);
    });
  }
  return (
    <Link
      onClick={navigate}
      href={`/articles/${slug}`}
      className={cx(
        "relative transition-all group  border-theme-accent-opaque  duration-500 flex flex-col  rounded-md cursor-pointer  border-theme-accent hover:border-theme-primary border-opacity-10 hover:border-opacity-20",
        isPending && "cursor-wait",
      )}
    >
      <SanityImage
        alt={title}
        image={mainImage}
        className="mb-4 transition-all rounded-xl overflow-hidden group-hover:blur-none"
      ></SanityImage>
      <h2 className="text-lg  font-bold text-white">{title}</h2>
      <div className="flex justify-between">
        <span className="block my-1 text-sm text-theme-primary">
          {dateformat(releasedAt, "mediumDate")}
        </span>
        {categories && (
          <div className="flex items-center gap-2 ">
            {categories.map((category) => (
              <div key={category}>
                <span className="block px-2 py-1 text-sm rounded-lg cursor-pointer bg-theme-primary-opaque">
                  {category}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
