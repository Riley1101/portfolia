"use client";

import { Studio } from "sanity";
import studioConfig from "./sanity.config";

const StudioComponent = () => {
  return <Studio config={studioConfig} />;
};
export default StudioComponent;
