import React from "react";
import cx from "classnames";
import { NewspaperIcon } from "@heroicons/react/20/solid";

type Props = {};

export function NewsLetter({}: Props) {
  return (
    <div className=" relative flex flex-col my-12 rounded-md p-4 bg-theme-accent-opaque">
      <div className="absolute top-0 left-0 border-l-2 border-theme-primary w-[5px] h-full"></div>
      <div className="text-left">
        <span className="font-bold text-theme-accent md:text-xl mb-2 text-lg md:text-xl my-2 block">
          Subscribe to my NewsLetter!{" "}
        </span>
        <p className="text-theme-body text-lg ">
          Join my web development newsletter to receive the latest updates,
          tips, and trends directly in your inbox.
        </p>
      </div>
      <form className="flex items-center px-4 my-4 py-2 border rounded-md border-theme-primary-opaque group hover:bg-gradient-to-r hover:from-theme-accent-opaque  ">
        <NewspaperIcon className="w-8 h-8 group-focus-within:text-theme-accent group" />
        <input
          type="email"
          spellCheck={false}
          placeholder="Enter your email! "
          className="w-full px-4 py-1 bg-transparent rounded-md outline-none text-bg-theme-accent"
        />
        <button
          type="submit"
          className={cx(
            ` flex cursor-pointer items-center hover:text-theme-accent border-theme-primary-opaque py-2 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  px-4  rounded-md`,
            "hover:bg-theme-primary hover:bg-opacity-5 border-opacity-5 hover:border-theme-primary hover:text-theme-accent"
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
