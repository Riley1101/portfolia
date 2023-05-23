import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function NewsLetterStatus() {
  return (
    <div className="pt-24 page-container">
      <div>
        <Image
          src="/images/cute_pug.gif"
          alt="happy pug "
          className="mb-8 aspect-square rounded-full border border-theme-accent-opaque"
          width={150}
          height={150}
        />
        <h1 className="text-3xl lg:text-5xl text-theme-primary font-theme font-bold mb-12">
          🎉 You are already in my list!
        </h1>
        <p className="text-lg mt-4 mb-4 leading-loose ">
          Thanks so much for subscribing to my newsletter again !. Looks like
          you are already in my mailing list and you will already be the first
          to receive for any of my new articles.
          <br />
          Feel free to reach out to me as well, my{" "}
          <Link
            className="text-theme-accent mx-2"
            href="https://www.linkedin.com/in/arkar-kaung-myat"
            target="_blank"
          >
            DMs
          </Link>
          are always open.
        </p>
        <Link
          className={` max-w-max  flex cursor-pointer items-center hover:text-theme-accent py-3 hover:bg-theme-accent-opaque duration-300  transition-all border  px-4  rounded-full
          bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary  text-theme-accent`}
          href="/articles"
        >
          Continue Reading
        </Link>
      </div>
    </div>
  );
}
