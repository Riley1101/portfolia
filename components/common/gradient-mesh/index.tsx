"use client";
import { useRef } from "react";
import { useMousePosition } from "@/utils/use-mouse-position";
export default function GradientMesh() {
  const blobOne = useRef<HTMLDivElement | null>(null);
  const blobTwo = useRef<HTMLDivElement | null>(null);
  const mPosition = useMousePosition();

  if (blobOne.current && blobTwo.current) {
    blobOne.current.style.transform = `translate(${mPosition.x / 60}px, ${
      mPosition.y / 60
    }px)`;

    blobTwo.current.style.transform = `translate(${mPosition.x / 30}px, ${
      mPosition.y / 30
    }px)`;
  }
  return (
    <>
      <div
        ref={blobTwo}
        className="pointer-events-none w-[220px] md:w-[220px]  aspect-square top-[25%] left-[5%] absolute rounded-full gradient-two"
      ></div>
      <div
        ref={blobOne}
        className="pointer-events-none w-[150px] md:w-[200px]  aspect-square rounded-full top-[10%] left-[0%] absolute  gradient-one "
        style={{
          opacity: 0.35,
        }}
      ></div>
    </>
  );
}
