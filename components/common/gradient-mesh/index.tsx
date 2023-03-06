"use client";
import { useRef, useEffect } from "react";
import React from "react";
// const useMousePosition = () => {
//   const [mousePosition, setMousePosition] = React.useState<any>({
//     x: null,
//     y: null,
//   });
//   React.useEffect(() => {
//     const updateMousePosition = (ev: any) => {
//       if(typeof window === "undefined") return;
//       // transfrom the x and y value to between 0 and 100
//       let postitionX = (ev.clientX / window.innerWidth) * 100;
//       let postitionY = (ev.clientY / window.innerHeight) * 100;

//       setMousePosition({ x: postitionX, y: postitionY });
//     };
//     window.addEventListener("mousemove", updateMousePosition);
//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//     };
//   }, []);
//   return mousePosition;
// };

export default function GradientMesh() {
  const ref = useRef<HTMLDivElement>(null);
  // const { x, y } = useMousePosition();
  // console.log(x, y);

  return (
    <>
      <div
        ref={ref}
        // style={{
        //   backgroundPosition: `${x}%`,
        // }}
        className=" pointer-events-none w-[150px] md:w-[250px]   aspect-square rounded-full top-[20%] left-[20%] absolute  gradient-one "
      ></div>

      <div className="pointer-events-none w-[220px] md:w-[320px]  aspect-square top-[40%] left-[15%] absolute rounded-full gradient-two"></div>
    </>
  );
}
