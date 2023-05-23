import React from "react";
import Link from "next/link";
import Image from "next/image";
export default function ByeBye() {
  
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
          😟 Sorry to See you go!
        </h1>
        <p className="text-lg mt-4 mb-4 leading-loose ">
          Unsubscribed from newsletter and you will no longer receive any
          updates from me.
          <br /> Have a great day !
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
      </div>
    </div>
  );
}
