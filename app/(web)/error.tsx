"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Error({}: {}) {
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
          😟 Ops Something went wrong!
        </h1>
        <Link className="text-theme-accent mx-2" href="/">
          Home
        </Link>
      </div>
    </div>
  );
}
