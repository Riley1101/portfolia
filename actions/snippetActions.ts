"use server";

import { ArticlCardType } from "@/types/articles";
import client from "@/utils/client";
import { cache } from "react";

export const getSnippets = cache(async function (): Promise<ArticlCardType[]> {
  let query = `
*[_type=='snippet'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  'categories':categories[]->title,
  description,
  releasedAt
}
`;
  return await client.fetch(query);
});
