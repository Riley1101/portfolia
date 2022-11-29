import type { PortableTextBlockComponent } from "@portabletext/react";
interface ArticlCardType {
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories?: string[];
}

interface ArticleDetailType {
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories: string[];
  body: any;
  mainImage: string;
}
export type { ArticlCardType, ArticleDetailType };
