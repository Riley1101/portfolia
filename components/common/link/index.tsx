'use client'

import type { ReactNode } from "react";
import Link from "next/link";
import cx from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  target?: string;
}

function NavIconLink({ children, icon, href, target }: Props) {
  const selected = useSelectedLayoutSegment();
  return (
    <Link
      target={target}
      href={href}
      className={cx(
        "flex cursor-pointer items-center gap-4 border border-transparent px-4 py-3 text-sm text-theme-body rounded-theme",
        "transition-[color,background-color,border-color] duration-300",
        "hover:text-theme-accent hover:bg-theme-primary/5 hover:border-theme-primary/5",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base",
        {
          "bg-theme-primary/5 border-theme-primary/5 text-theme-accent":
            `/${selected}` === href || (selected === null && href === "/"),
        },
      )}
    >
      <span className="shrink-0 [&>svg]:size-5" aria-hidden>
        {icon}
      </span>
      <span className="text-sm">{children}</span>
    </Link>
  );
}

export default NavIconLink;
