"use client";

import { Studio } from "sanity";
import studioConfig from "./sanity.config";

const StudioCompo = () => {
  return (
    <div className="w-full h-full ">
      <Studio config={studioConfig} />
    </div>
  );
};
export default StudioCompo;
