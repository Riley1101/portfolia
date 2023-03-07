"use client";
import dynamic from "next/dynamic";
const SanityStudio = dynamic(() => import("@/components/studio"), {
  ssr: false,
});
function StudioPage() {
  return (
    <div className="w-full h-full ">
      <SanityStudio />
    </div>
  );
}
export default StudioPage;
