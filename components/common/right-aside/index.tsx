"use client";
import dynamic from "next/dynamic";

const ComputerModel = dynamic(() => import("@/components/common/model"), {
  ssr: false,
});
const RightAside = () => {
  return (
    <aside className="w-full h-full hidden pointer-events-none md:flex flex-col  col-start-1  md:col-start-3 mt-[2em] p-4">
      {/* <ComputerModel /> */}
    </aside>
  );
};

export default RightAside;
