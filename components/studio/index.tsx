"use client";

import studioConfig from "./sanity.config";

import { NextStudio } from "next-sanity/studio";

export default function Studio() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={studioConfig} />;
}
