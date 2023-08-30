import React from "react";

type Props = {};

export function Banner({}: Props) {
  return (
    <div className="border-b py-4 my-4 border-theme-accent-opaque">
      <h1 className="text-white text-lg mb-4 font-bold">Articles</h1>
      <p className=" leading-relaxed">
        Some of my latest articles on web development, computer science, and
        more.
      </p>
    </div>
  );
}
