import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: {
    title: string;
    slug: string;
    description: string;
    _id: string;
    mainImage: string;
  }[];
};

export function Related({ data }: Props) {
  return (
    <div className="mt-12 mb-12 @container/main">
      <h3 className="text-theme-accent text-xl mb-4">Related Articles</h3>
      <div className="grid grid-cols-1 gap-4 @sm/main:grid-cols-2 @md/main:grid-cols-3">
        {data.map((itm) => (
          <Link
            key={itm._id}
            href={`/articles/${itm.slug}`}
            className="flex flex-col items-center gap-4 p-4 transition-all duration-500 rounded-md
             border rounded-md cursor-pointer hover:from-theme-primary-opaque hover:bg-gradient-to-r border-theme-primary-opaque"
          >
            <div className="w-full ml-auto md:w-auto">
              <Image
                src={itm.mainImage}
                alt={"image"}
                width={200}
                height={200}
                className="w-full  aspect-video object-cover rounded-md "
              ></Image>
            </div>
            <div>
              <h2 className="tefont-semi xt-white  leading-relaxed font-semibold">
                {itm.title}
              </h2>
              <p className="my-2 text-base line-clamp-2 text-gray-400">
                {itm.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
