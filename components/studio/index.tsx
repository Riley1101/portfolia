"use client";

import { Studio } from "sanity";
import studioConfig from "./sanity.config";

const StudioCompo = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-[200]">
      <Studio config={studioConfig} />
    </div>
  );
};
export default StudioCompo;
