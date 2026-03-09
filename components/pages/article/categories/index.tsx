"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import type { Category } from "@/types/articles";
import cx from "classnames";

type Props = {
  categories: Category[];
};

export function Categories({ categories }: Props) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const search = params.get("search");

  function handleFilter(category: string) {
    startTransition(() => {
      // set serach param with category
      if (search) {
        params.set("search", search);
      } else {
        params.delete("search");
      }
      if (category !== "All") {
        params.set("category", category);
      } else {
        params.delete("category");
      }
      const query = params.toString();
      router.push(`${pathname}?${query}`);
    });
  }

  if (!categories) return null;
  return (
    <div className="sticky top-10 border border-theme-accent-opaque p-4 glass-box rounded-theme md:top-20" role="group" aria-label="Filter by category">
      <div className="flex gap-2 overflow-x-auto py-2 md:flex-wrap md:py-0">
        <button
          type="button"
          onClick={() => handleFilter("All")}
          className={cx(
            "flex min-w-max cursor-pointer items-center border border-transparent px-4 py-2 text-sm rounded-theme",
            "transition-[color,background-color,border-color] duration-300",
            "hover:border-theme-primary/5 hover:bg-theme-primary/5 hover:text-theme-accent",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base",
            {
              "border-theme-primary/5 bg-theme-primary/5 text-theme-accent":
                params.get("category") === "All" || !params.get("category"),
            },
            isPending && "cursor-wait",
          )}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            type="button"
            key={item._id}
            onClick={() => handleFilter(item.title)}
            className={cx(
              "flex min-w-max cursor-pointer items-center border border-transparent px-4 py-2 text-sm rounded-theme",
              "transition-[color,background-color,border-color] duration-300",
              "hover:border-theme-primary/5 hover:bg-theme-primary/5 hover:text-theme-accent",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base",
              {
                "border-theme-primary/5 bg-theme-primary/5 text-theme-accent":
                  params.get("category") === item.title,
              },
              isPending && "cursor-wait",
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
