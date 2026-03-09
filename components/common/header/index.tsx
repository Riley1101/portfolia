"use client";

import { useState } from "react";
import NavModal from "@/components/common/nav-modal";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <header
      className="absolute top-0 left-0 z-[99999] flex h-14 w-full items-center justify-between border-b border-theme-border bg-theme-bg-elevated/90 bg-clip-padding px-4 backdrop-blur-lg md:px-8 lg:px-10 xl:px-12"
    >
      <Link
        href="/"
        className="font-bold text-theme-body outline-none transition-colors hover:text-theme-accent focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base rounded-theme"
      >
        Arkar Myat
      </Link>
      <NavModal visible={visible} toggle={toggle} />

      <button
        type="button"
        aria-label="Open navigation menu"
        onClick={() => toggle()}
        className="flex rounded-theme border border-theme-border p-2 text-theme-body outline-none transition-colors hover:bg-theme-primary/10 focus-visible:ring-2 focus-visible:ring-theme-primary focus-visible:ring-offset-2 focus-visible:ring-offset-theme-bg-base lg:hidden"
      >
        <Bars2Icon className="h-5 w-5 shrink-0" aria-hidden />
      </button>
    </header>
  );
};
export default Header;
