"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { unsubscribe } from "@/utils/newsletter";
import { useTransition } from "react";
export default function ByeBye({ params }: any) {
  const [message, setMessage] = useState("Unsubscribe");
  const { email } = params;
  let [isPending, startTransition] = useTransition();
  let mail = decodeURIComponent(email);
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
        {/* @ts-ignore */}
        <button
          onClick={() => {
            setMessage("Done !");
            startTransition(() => {
              unsubscribe(mail);
            });
          }}
          className={` max-w-max  flex cursor-pointer items-center hover:text-theme-accent py-3 hover:bg-theme-accent-opaque duration-300  transition-all border  px-4  rounded-full
          bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary  text-theme-accent`}
        >
          {isPending ? "Please wait" : message}
        </button>
      </div>
    </div>
  );
}
