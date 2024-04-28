"use client";
import Link from "next/link";
import React, { useTransition } from "react";
import cx from "classnames";
import dateformat from "dateformat";
import { useRouter } from "next/navigation";

type Props = {};

function Card() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function navigate() {
    startTransition(() => {
      router.push(`/articles/`);
    });
  }

  return (
    <Link
      onClick={navigate}
      href={`/articles/`}
      className={cx(
        "p-4 shrink-0 h-[260px] flex flex-col  w-[220px] hover:ml-[-70px] hover:rotate-6 hover:-translate-y-2 first:hover:translate-y-0 first:hover:ml-[100px] hover:translate-x-[-80px] hover:mr-[50px] first:hover:mr-[40px]  first:ml-0 card-glass-box ml-[-100px] origin-center shadow  border gap-4 relative transition-all group  border-theme-accent  duration-200 will-change-transform  rounded-md cursor-pointer  hover:border-theme-accent border-opacity-20 hover:border-opacity-20",
        isPending && "cursor-wait",
      )}
    >
      <h2 className="text-xl mt-auto font-semibold text-white">
        Continuous Learning through building a portfolio
      </h2>
      <div className="flex gap-2 mt-4">
        <span className="block px-2 py-1 text-sm rounded-lg cursor-pointer bg-theme-primary-opaque">
          React
        </span>
      </div>
      <span className=" block my-1 text-sm text-theme-primary">
        {dateformat(new Date(), "mediumDate")}
      </span>
    </Link>
  );
}

export function ArticleSeries({}: Props) {
  const data = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex py-8 flex-col gap-4 w-full">
      <h2 className="text-xl text-theme-primary">
        Building a web server in Rust
      </h2>
      <div className="py-8 pb-4 flex gap-4 w-full overflow-x-auto max-w-[800px]">
        {data.map((e) => (
          <Card key={e} />
        ))}
      </div>
    </div>
  );
}
