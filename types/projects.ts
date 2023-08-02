import { PortableTextBlock } from "sanity";
import type { SanityImage } from "./sanity-image";

export type Languages =
  | "TypeScript"
  | "JavaScript"
  | "Rust"
  | "Python"
  | "Svelte"
  | "React"
  | "AWS"
  | "Docker"
  | "Next.js"
  | "Solid";

export interface Project {
  _id: string;
  title: string;
  description: string;
  slug: string;
  technologies: string[];
  language: Languages;
  releasedAt: string;
  body: PortableTextBlock[];
  mainImage: SanityImage;
}
