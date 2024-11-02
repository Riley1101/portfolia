import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="pt-24 page-container">
      <div>
        <Image
          src="/images/puglie-pug.gif"
          alt="sad pug "
          className="mb-8  aspect-square rounded-full border border-theme-accent-opaque"
          width={150}
          height={150}
        />
        <h1 className="text-3xl lg:text-5xl text-theme-primary font-theme font-bold mb-12">
          😟 Oops! Page Not Found
        </h1>
        <p className="text-lg mt-4 mb-4 leading-loose ">
          Page you’re looking for. It might have been moved, deleted, or never
          existed.
          <Link
            className={` mt-4 max-w-max  flex cursor-pointer items-center hover:text-theme-accent py-3 hover:bg-theme-accent-opaque duration-300  transition-all border  px-4  rounded-full
          bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary  text-theme-accent`}
            href="/articles"
          >
            Articles
          </Link>
        </p>
      </div>
    </div>
  );
}
