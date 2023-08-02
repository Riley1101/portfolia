import client from "@/utils/client";
import type { ArticlCardType } from "@/types/articles";
import SnippetCard from "../../snippets/card";
import asyncComponent from "@/utils/async-component";
let query = `
*[_type=='snippet'] | order(releasedAt desc) [0..1]  {
  title,
  'slug':slug.current,
  'categories':categories[]->title,
  description,
  releasedAt
}
`;

async function LatestSnippets() {
  const data: ArticlCardType[] = await client.fetch(query);
  return (
    <div className="flex flex-col gap-4">
      <p className="leading-relaxed">
        I&apos;ve also worked with or advised companies like Convex, Fauna,
        Plasmic, and more about developer marketing, DevRel, and building
        open-source communities.
      </p>
      <div className="grid grid-cols-2 gap-4 ">
        {data.map((article, index) => {
          return (
            <SnippetCard
              key={index}
              title={article.title}
              description={article.description}
              slug={article.slug}
              releasedAt={article.releasedAt}
              categories={article.categories}
            />
          );
        })}
      </div>
    </div>
  );
}

export default asyncComponent(LatestSnippets);
