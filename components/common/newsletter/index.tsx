import React from "react";
import cx from "classnames";
import { handleSubmit } from "@/actions/newsLetterActions";

export function NewsLetter() {
  return (
    <div className=" relative group flex flex-col  cursor-pointer overflow-hidden rounded-md px-6 py-2 border border-theme-accent-opaque bg-theme-accent-opaque my-4">
      <div
        className="absolute group-hover:scale-[1.2] origin-b-l  transition-all duration-500 z-0 w-[30%] aspect-square gradient-one right-[-60px] -bottom-1/2"
        style={{ opacity: 0.1 }}
      ></div>
      <div className="absolute top-0 left-0 border-l-2 border-theme-primary w-[5px] h-full"></div>
      <div className="text-left z-10">
        <span className="font-bold text-theme-accent  mb-2 text-lg md:text-xl my-2 block">
          Subscribe to my NewsLetter!{" "}
        </span>
        <p className="text-gray-400">
          Join my web development newsletter to receive the latest updates,
          tips, and trends directly in your inbox.
        </p>
      </div>
      <form
        action={handleSubmit}
        className="flex md:flex-row flex-col items-center gap-2 my-4  group "
      >
        <input
          type="text"
          name="name"
          spellCheck={false}
          placeholder="Your Name ! "
          className="w-full px-4 py-2 border border-theme-primary-opaque bg-transparent rounded-md outline-hidden  hover:bg-linear-to-r hover:from-theme-accent-opaque "
          required={true}
        />
        <input
          type="email"
          name="email"
          required={true}
          spellCheck={false}
          placeholder="Your email ! "
          className="w-full px-4 py-2 border border-theme-primary-opaque  bg-transparent rounded-md outline-hidden  hover:bg-linear-to-r hover:from-theme-accent-opaque "
        />
        <button
          type="submit"
          className={cx(
            `flex cursor-pointer hover:text-theme-accent w-full md:max-w-max justify-center items-center border-theme-primary-opaque py-2 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  px-4  rounded-md`,
            "z-10 hover:bg-theme-primary  border-opacity-5 hover:border-theme-primary hover:text-theme-accent",
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
