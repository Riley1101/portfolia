import type { MetadataRoute } from "next";
import { getArticleSlugs } from "@/actions/postAcions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articles = await getArticleSlugs();
  console.log(articles);
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
    ...articles.map((article) => ({
      url: `https://arkar.space/articles/${article.slug}`,
      lastModified: new Date(article._updatedAt),
      priority: 0.5,
    })),
  ];
}
