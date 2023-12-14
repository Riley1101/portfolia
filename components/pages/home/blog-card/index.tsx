"use client";
import Link from "next/link";
import React, { useRef } from "react";
import dateformat from "dateformat";
import type { ArticlCardType } from "@/types/articles";

export default function HomeBlogCard({
  title,
  description,
  slug,
  releasedAt,
  categories,
}: ArticlCardType) {
  const blob = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLAnchorElement | null>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    if (!blob.current || !container.current) return;
    blob.current.classList.remove("hidden");
    const containerRect = container.current.getBoundingClientRect();
    const blobRect = blob.current.getBoundingClientRect();
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;
    const blobX = x - blobRect.width / 2;
    const blobY = y - blobRect.height / 2;
    blob.current.style.transform = `translate(${blobX}px, ${blobY}px)`;
  }

  return (
    <Link
      test-id="home-articles-card"
      onMouseLeave={() => {
        blob.current?.classList.add("hidden");
      }}
      ref={container}
      onMouseMove={handleMouseMove}
      href={`/articles/${slug}`}
      className="relative  md:brightness-75 md:hover:brightness-100 overflow-hidden flex flex-col gap-2 p-4 transition-all duration-500 rounded-md border
hover:bg-gradient-to-r hover:from-theme-accent-opaque  border-theme-accent border-opacity-10 hover:border-opacity-20"
    >
      <div
        ref={blob}
        className="w-[25%]  top-[20%] left-[0%] transform-center hidden translate-y-[-1/2] 
        aspect-square  absolute  translate-x-[-1/2] gradient-two"
      />
      <h2 className="text-base mb-2 leading-relaxed font-semibold">{title}</h2>
      <p className="text-base  line-clamp-2 text-gray-400">{description}</p>
      <div className="flex justify-between  items-center gap-4">
        <span className="block my-1 text-sm text-theme-primary">
          {dateformat(releasedAt, "mediumDate")}
        </span>
        {categories && (
          <div className="flex items-center gap-2 ">
            {categories.map((category) => (
              <div key={category}>
                <span className="text-sm ">{category}</span>
                <span className="text-theme-accent"> / </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
