import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { visionTool } from "@sanity/vision";
import { codeInput } from "@sanity/code-input";
import { latexInput } from "sanity-plugin-latex-input";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { contentGraphView } from "sanity-plugin-graph-view";
import { table } from '@sanity/table';

const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";
const SANITY_DATASET_ID = process.env.NEXT_PUBLIC_SANITY_DATASET || "";

export default defineConfig({
  name: "default",
  title: "arkardev",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET_ID,
  basePath: "/studio",
  plugins: [
    deskTool(),
    visionTool(),
    contentGraphView({}),
    codeInput(),
    latexInput(),
    unsplashImageAsset(),
    table()
  ],
  schema: {
    types: schemaTypes,
  },
});
