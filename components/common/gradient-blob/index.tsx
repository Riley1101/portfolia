"use client";
import React from "react";


export function GradientBlob() {
  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.clientX, e.clientY);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="w-[25%] aspect-square gradient-two absolute"
    ></div>
  );
}
