"use client";
import { toUrl } from "@/utils/to-url";
import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import cx from "classnames";
import Link from "next/link";
import { PortableTextBlock } from "sanity";
type Props = {
  value: PortableTextBlock[];
};

export default function TableOfContents({ value }: Props) {
  const [toggle, setToggle] = useState(false);
  const headings: any[] = value.filter((e) => e.style === "h2");
  const titles = headings.map((e) => e?.children[0].text);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <span
        onClick={() => setToggle(!toggle)}
        className="bg-theme-accent-opaque cursor-pointer max-w-max 
        px-4 py-2 rounded-md font-bold uppercase mb-2 block text-theme-primary flex items-center gap-4"
      >
        Table of Contents{" "}
        <ChevronDownIcon
          className={cx("w-6 h-6 text-theme-primary", toggle && "rotate-180")}
        />
      </span>
      {toggle && (
        <ul className=" list-disc pl-8 flex p-4 flex-col gap-2 max-w-max bg-theme-accent-opaque">
          {titles.map((e) => (
            <li
              key={e}
              className="text-theme-body text-sm hover:text-theme-accent"
            >
              <Link
                href={`#${toUrl([e])}`}
                className="cursor-pointer"
                onClick={handleScroll}
              >
                {e}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
