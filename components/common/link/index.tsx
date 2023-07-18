"use client";
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
        `text-sm flex cursor-pointer items-center hover:text-theme-accent py-3 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  border-transparent px-4  rounded-full`,
        {
          "bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary text-theme-accent":
            `/${selected}` === href || (selected === null && href === "/"),
        }
      )}
    >
      <div className="flex gap-4 text-sm">
        {icon}
        {children}
      </div>
    </Link>
  );
}

export default NavIconLink;
