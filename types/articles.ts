import { PortableTextBlock } from "sanity";
import type { SanityImage } from "./sanity-image";

interface ArticlCardType {
  _id: string;
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories?: string[];
  mainImage?: SanityImage;
}

interface ArticleDetailType {
  _id: string;
  title: string;
  description: string;
  slug: string;
  releasedAt: string;
  categories: string[];
  body: PortableTextBlock[];
  mainImage: string;
  related: {
    title: string;
    description: string;
    slug: string;
    _id: string;
    mainImage: SanityImage;
  }[];
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

interface Category {
  title: string;
  _id: string;
}
export type {
  Category,
  ArticlCardType,
  ArticleDetailType,
  SnippetDetailType,
  SnippetCardType,
};
