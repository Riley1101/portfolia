// client.js
import { createClient } from "@sanity/client";

export default createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "vX",
  useCdn: true,
});
