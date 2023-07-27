"use client";
import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "@/types/articles";
import React from "react";
import SanityImage from "@/components/common/sanity-image";

export default function ArticleCard({
  title,
  mainImage,
  slug,
  releasedAt,
  categories,
}: ArticlCardType) {
  return (
    <Link
      href={`/articles/${slug}`}
      className="relative transition-all group  border-theme-accent-opaque  duration-500 flex flex-col  rounded-md cursor-pointer  border-theme-accent hover:border-theme-primary border-opacity-10 hover:border-opacity-20"
    >
      <SanityImage
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
