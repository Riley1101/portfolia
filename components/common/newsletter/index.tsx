import React from "react";
import { redirect } from "next/navigation";
import cx from "classnames";
import { user_exists, add_user } from "@/utils/newsletter";

type Props = {};

export function NewsLetter({}: Props) {
  async function handleSubmit(formData: FormData) {
    "use server";
    const email = formData.get("email");
    const name = formData.get("name");
    if (email) {
      const exists = await user_exists(email as string);
      if (!exists) {
        const response = await add_user(email as string, name as string);
        if (response !== null) {
          redirect("/newsletter/thank-you");
        }
      } else {
        redirect("/newsletter/already-with-me");
      }
    }
  }

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
      <form
        /* @ts-ignore */
        action={handleSubmit}
        className="flex md:flex-row flex-col items-center gap-2 my-4  group "
      >
        <input
          type="text"
          name="name"
          spellCheck={false}
          placeholder="Enter your name! "
          className="w-full px-4 py-2 border border-theme-accent-opaque bg-transparent rounded-md outline-none  hover:bg-gradient-to-r hover:from-theme-accent-opaque "
          required={true}
        />
        <input
          type="email"
          name="email"
          required={true}
          spellCheck={false}
          placeholder="Enter your email! "
          className="w-full px-4 py-2 border border-theme-primary-opaque  bg-transparent rounded-md outline-none  hover:bg-gradient-to-r hover:from-theme-accent-opaque "
        />
        <button
          type="submit"
          className={cx(
            ` flex cursor-pointer items-center hover:text-theme-accent w-full md:max-w-max justify-center items-center border-theme-primary-opaque py-2 hover:bg-theme-primary duration-300 hover:border-theme-primary hover:border-opacity-5 hover:bg-opacity-5 transition-all border  px-4  rounded-md`,
            "hover:bg-theme-primary hover:bg-opacity-5 border-opacity-5 hover:border-theme-primary hover:text-theme-accent"
          )}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
