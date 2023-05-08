import sanityClient from "@/utils/client";
import searchClient from "@/utils/search-client";
import { NextApiRequest, NextApiResponse } from "next";
interface Snippet {
  slug: string;
  title: string;
  _createdAt: string;
  _updatedAt: string;
}
interface Article {
  slug: string;
  title: string;
  _createdAt: string;
  _updatedAt: string;
}
interface Data {
  snippets: Snippet[];
  articles: Article[];
}

const QUERY = `{
 "articles": *[_type == "article"]{
      "slug":slug.current,
      "title":title,
       _createdAt,
       _updatedAt
  },
  "snippets": *[_type == "snippet"]{
      "slug":slug.current,
      "title":title,
       _createdAt, _updatedAt },
}`;

const ALGOLIA_INDEX = process.env.ALGOLIA_INDEX as string;
const ALGOLIA_SECRET = process.env.ALGOLIA_INDEX as string;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const algoliaHeader = req.headers["x-algolia-signature"];
  if (algoliaHeader !== ALGOLIA_SECRET) {
    res.status(404);
  }
  const index = searchClient.initIndex("portfolia");
  const { snippets, articles }: Data = await sanityClient.fetch(QUERY);
  res.status(200).json({ articles, snippets });
}
