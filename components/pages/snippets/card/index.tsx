"use client";
import { useRef, useTransition } from "react";
import cx from "classnames";
import Link from "next/link";
import dateformat from "dateformat";
import { useRouter } from "next/navigation";
import type { ArticlCardType } from "@/types/articles";

export default function SnippetCard({
  title,
  slug,
  releasedAt,
  categories,
}: ArticlCardType) {
  const blob = useRef<HTMLDivElement | null>(null);
  const container = useRef<HTMLAnchorElement | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  function navigate() {
    startTransition(() => {
      router.push(`/articles/${slug}`);
    });
  }

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
      onMouseLeave={() => {
        blob.current?.classList.add("hidden");
      }}
      onClick={navigate}
      ref={container}
      onMouseMove={handleMouseMove}
      href={`/snippets/${slug}`}
      className={cx(
        "relative overflow-hidden p-4 transition-all duration-500 border rounded-md cursor-pointer border-theme-accent hover:border-theme-primary border-opacity-10 hover:border-opacity-20",
        isPending && "cursor-wait",
      )}
    >
      <div
        ref={blob}
        style={{ opacity: 0.2 }}
        className="w-[15%] top-[20%] left-[0%] transform-center hidden translate-y-[-1/2] 
        aspect-square  absolute  translate-x-[-1/2] gradient-one"
      ></div>
      <h2 className="text-base text-white font-semibold mb-2">{title}</h2>
      <div className="flex justify-between">
        <span className="block my-1 text-sm  text-theme-primary">
          {dateformat(releasedAt, "mediumDate")}
        </span>
        {categories && (
          <div className="flex items-center gap-2 ">
            {categories.map((category) => (
              <div key={category}>
                <span className="text-sm ">{category}</span>
                <span className="text-theme-accent"> /</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
