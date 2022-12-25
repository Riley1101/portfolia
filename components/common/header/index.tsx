"use client";
import NavModal from "@/components/common/nav-modal";
import React from "react";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

const Header = () => {
  let [visible, setVisible] = React.useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <header className=" backdrop-filter justify-between   backdrop-blur-lg border-b border-gray-800 flex items-center  px-[10%] absolute top-0 left-0 h-[5em] z-40 w-full">
      <Link href="/" className="font-bold text-theme-body">
        ArkarDev
      </Link>
      <NavModal visible={visible} toggle={toggle} />
      <button
        onClick={() => toggle()}
        className="flex p-2 border border-gray-800 rounded-md cursor-pointer lg:hidden text-theme-body md:block bg-opacity-10 hover:bg-theme-primary hover:bg-opacity-5 "
      >
        <Bars2Icon className="w-6 h-6" />
      </button>
    </header>
  );
};
export default Header;
