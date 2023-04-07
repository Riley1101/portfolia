"use client";
import dynamic from "next/dynamic";
const SanityStudio = dynamic(() => import("@/components/studio"), {
  ssr: false,
});
function StudioPage() {
  return (
    <div className="grid w-full h-screen overflow-hidden overscroll-none ">
      <SanityStudio />
    </div>
  );
}
export default StudioPage;
