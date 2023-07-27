"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import type { Category } from "@/types/articles";
import cx from "classnames";

type Props = {
  categories: Category[];
};

function Categories({ categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams as any);
  const search = params.get("search");

  function handleFilter(category: string) {
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
  }

  if (!categories) return null;
  return (
    <div className="border p-4 border-theme-accent-opaque glass-box rounded-md sticky top-10 md:top-20">
      <h3 className="text-theme-primary md:mb-4">Categories</h3>
      <div className="flex py-2 md:p-0 gap-2 md:flex-wrap pt-4 overflow-x-auto">
        <button
          onClick={() => handleFilter("All")}
          className={cx(
            `text-sm flex cursor-pointer items-center hover:text-theme-accent py-2 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  border-transparent px-4  rounded-full`,
            {
              "bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary text-theme-accent":
                params.get("category") === "All" || !params.get("category"),
            }
          )}
        >
          All
        </button>
        {categories.map((item) => (
          <button
            onClick={() => handleFilter(item.title)}
            key={item._id}
            className={cx(
              `text-sm flex cursor-pointer items-center hover:text-theme-accent py-2 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  border-transparent px-4  rounded-full`,
              {
                "bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary text-theme-accent":
                  params.get("category") === item.title,
              }
            )}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;

