'use client'

import Link from "next/link";
import cx from "classnames";
import { useSelectedLayoutSegment } from "next/navigation";

interface Props {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  target?: string;
}

function NavIconLink({ children, icon, href, target }: Props) {
  const selected = useSelectedLayoutSegment();
  return (
    <Link
      target={target}
      href={href}
      className={cx(
        `text-sm flex cursor-pointer items-center hover:text-theme-accent py-3 hover:bg-theme-primary/5 
        duration-300 hover:border-theme-primary/5  transition-all 
        border  border-transparent px-4  rounded-theme`,
        {
          "bg-theme-primary/5 border-theme-primary/5 text-theme-accent":
            `/${selected}` === href || (selected === null && href === "/"),
        },
      )}
    >
      <span className="flex items-center gap-4 text-sm text-theme-body">
        {icon}
        {children}
      </span>
    </Link>
  );
}

export default NavIconLink;
