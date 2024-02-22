import React from "react";

type Props = {};

export function Banner({}: Props) {
  return (
    <div className="border-b py-4 my-4 border-theme-accent-opaque">
      <h1 className="mb-4 text-4xl font-bold lg:text-5xl">Articles</h1>
      <p className=" leading-relaxed">
        Some of my latest articles on web development, computer science, and
        more.
      </p>
    </div>
  );
}
