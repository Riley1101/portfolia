"use client";
export default function GradientMesh() {
  return (
    <>
      <div
        className=" pointer-events-none w-[150px] md:w-[250px]   aspect-square rounded-full top-[20%] left-[10%] absolute  gradient-one "
      ></div>

      <div className="pointer-events-none w-[220px] md:w-[320px]  aspect-square top-[40%] left-[5%] absolute rounded-full gradient-two"></div>
    </>
  );
}
