"use client";
import Link from "next/link";
import dateformat from "dateformat";
import type { ArticlCardType } from "@/types/articles";
import React, { useRef } from "react";
import SanityImage from "@/components/common/sanity-image";

export default function ArticleCard({
  title,
  mainImage,
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
      ref={container}
      href={`/articles/${slug}`}
      onMouseLeave={() => {
        blob.current?.classList.add("hidden");
      }}
      onMouseMove={handleMouseMove}
      className="p-4 overflow-hidden relative transition-all group break-inside border mb-4 border-theme-accent-opaque  duration-500 flex flex-col  rounded-md cursor-pointer  border-theme-accent hover:border-theme-primary border-opacity-10 hover:border-opacity-20"
    >
      <div
        ref={blob}
        style={{ opacity: 0.2 }}
        className="w-[55%]  top-[20%] left-[0%] transform-center hidden translate-y-[-1/2] 
        aspect-square  absolute  translate-x-[-1/2] gradient-one"
      ></div>
      <SanityImage
        image={mainImage}
        className="mb-4 hover:blur-none transition-all blur-[1px] group-hover:blur-none"
      ></SanityImage>
      <h2 className="text-lg  font-bold text-white">{title}</h2>
      <div className="flex justify-between">
        <span className="block my-1 text-sm font-bold text-theme-primary">
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
