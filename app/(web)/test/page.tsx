import React from "react";
import HomeBlogCard from "@/components/pages/home/blog-card";

type Props = {};


export default function TestPage({}: Props) {
  const data = [1, 2, 3, 4];
  return (
    <div className="page-container ">
      <div className="grid grid-cols-2 mt-8 gap-4">
        {data.map((item) => (
          <HomeBlogCard
            title="Composition in React"
            releasedAt="2021-08-01T00:00:00Z"
            key={item}
            slug="composition-in-react"
            description="Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."
          />
        ))}
      </div>
    </div>
  );
}
