import sanityClient from "@/utils/client";
import { NextApiRequest, NextApiResponse } from "next";
import searchClient from "@/utils/search-client";
interface Snippet {
  objectID: string;
  slug: string;
  title: string;
  _createdAt: string;
  _updatedAt: string;
}
interface Article {
  slug: string;
  objectID: string;
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
     "objectID" : _id,
      "slug":slug.current,
      "title":title,
       _createdAt,
       _updatedAt
  },
  "snippets": *[_type == "snippet"]{
     "objectID": _id,
      "slug":slug.current,
      "title":title,
       _createdAt, _updatedAt },
}`;

const ALGOLIA_SECRET = process.env.ALGOLIA_SECRET as string;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const algoliaHeader = req.headers["x-algolia-signature"];
  if (algoliaHeader === ALGOLIA_SECRET) {
    const { snippets, articles }: Data = await sanityClient.fetch(QUERY);
    try {
      const articles_index = searchClient.initIndex("articles");
      const snippets_index = searchClient.initIndex("snippets");
      await articles_index.saveObjects(articles);
      await snippets_index.saveObjects(snippets);
      res.status(200).json({ message: "success" });
    } catch (e) {
      res.status(200).json({ message: "error saving objects" });
    }
  } else {
    res.status(404).json({ message: "Not found" });
  }
}
