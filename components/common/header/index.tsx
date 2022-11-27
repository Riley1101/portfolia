import React from "react";
import Link from "next/link";
import { Bars2Icon } from "@heroicons/react/20/solid";

const Header = () => {
  return (
    <header className="backdrop-filter justify-between   backdrop-blur-lg border-b border-gray-800 flex items-center  px-[10%] absolute top-0 left-0 h-[5em] z-40 w-full">
      <Link href="/" className="font-bold text-theme-body">
        ArkarDev
      </Link>

      <button className="text-theme-body cursor-pointer bg-opacity-10 border-gray-800 border hover:bg-theme-primary hover:bg-opacity-5 p-2 rounded-md  ">
        <Bars2Icon className="h-6 w-6" />
      </button>
    </header>
  );
};
export default Header;
