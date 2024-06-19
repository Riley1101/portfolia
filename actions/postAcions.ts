"use server";
import client from "@/utils/client";
import { cache } from "react";
import type { ArticlCardType, ArticleDetailType } from "@/types/articles";
import type { Serie } from "@/types/series";

export const getLatestHomePosts = cache(async function (): Promise<
  ArticlCardType[]
> {
  const query = `*[_type == "article"] | order(releasedAt desc) [0..4]  {
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
}`;
  return await client.fetch(query);
});

export const getArticleSeries = cache(async function (): Promise<Serie[]> {
  const query = `
*[_type=='serie']   {
    _id,
    title,
    description, 
    'articles':articles[]->{
    title,
    'categories':categories[]->title,
    'slug':slug.current,
    releasedAt,
  },
}`;
  return await client.fetch(query);
});

export const getArticles = cache(async function (): Promise<ArticlCardType[]> {
  let query = `
  *[_type=='article'] | order(releasedAt desc)  {
    'slug':slug.current,
    title,
    releasedat,
    description,
    mainImage,
    'categories':categories[]->title,
  }
`;
  return await client.fetch(query);
});

export const getArticleBySlug = cache(async function (
  slug?: string,
): Promise<ArticleDetailType> {
  const query = `
*[_type == "article" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
  body[]{
    ..., 
    asset->{
      metadata,
      "_type":"reference",
      "_ref": _id
    }
  },
  "related": *[_type == "article" && _id != ^._id && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(releasedAt desc, _createdAt desc) [0..2] {
     title,
     _id,
    "mainImage":{
    "asset":{
        ...mainImage.asset,
         "metadata":mainImage.asset->metadata
    },
    },
     "slug": slug.current,
     description
   }
}`;
  return await client.fetch(query, {
    slug: slug,
  });
});

export const getArticleSEOContentBySlug = cache(async function (
  slug?: string,
): Promise<ArticleDetailType> {
  const seoQuery = `
*[_type == "article" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url
}`;
  return await client.fetch(seoQuery, {
    slug: slug,
  });
});
