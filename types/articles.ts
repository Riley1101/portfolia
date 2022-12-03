import type { PortableTextBlockComponent } from "@portabletext/react";
interface ArticlCardType {
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories?: string[];
  mainImage?: any;
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

interface SnippetCardType {
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories?: string[];
  mainImage?: any;
}

interface SnippetDetailType {
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories: string[];
  snippet: {
    language: string;
    code: string;
  };
  mainImage: string;
}
export type {
  ArticlCardType,
  ArticleDetailType,
  SnippetDetailType,
  SnippetCardType,
};
