"use client";
import Link from "next/link";
import cx from "classnames";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import { useTransition } from "react";

interface Props {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  target?: string;
}

function NavIconLink({ children, icon, href, target }: Props) {
  const selected = useSelectedLayoutSegment();
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function navigate() {
    if (target === "_blank") return;
    startTransition(() => {
      router.push(href);
    });
  }
  return (
    <Link
      onClick={navigate}
      target={target}
      href={href}
      aria-label={`Go to ${children}`}
      className={cx(
        `text-sm flex cursor-pointer items-center hover:text-theme-accent py-3 hover:bg-theme-primary 
        duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all 
        border  border-transparent px-4  rounded-theme`,
        {
          "bg-theme-primary/5  border-opacity-5 border-theme-primary text-theme-accent":
            `/${selected}` === href || (selected === null && href === "/"),
        },
        isPending && "cursor-wait",
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
