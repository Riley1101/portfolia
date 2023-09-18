import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://arkar.space",
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: "https://arkar.space/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arkar.space/articles",
      lastModified: new Date(),
      priority: 0.8,
    },

    {
      url: "https://arkar.space/snippets",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://arkar.space/videos",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
