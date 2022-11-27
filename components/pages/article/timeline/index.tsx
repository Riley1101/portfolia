import ArticleCard from "../card";
import client from "@/utils/client";
import type { ArticlCardType } from "types/articles";

let query = `
  *[_type=='article'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  releasedAt,
  description
  }
`;
export default async function ArticleTimeLine() {
  const data: ArticlCardType[] = await client.fetch(query);

  return (
    <div className="flex flex-col my-6 ">
      <div className="relative flex flex-col gap-4 pb-4 border-r-2 border-gray-800 ">
        <div className="absolute top-0 right-0 w-4 h-4 translate-x-[55%] bg-gray-800 rounded-full"></div>
        <span className="px-4 font-bold text-right text-theme-accent">
          January
        </span>
        {data.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              slug={article.slug}
              releasedAt={article.releasedAt}
            />
          );
        })}
      </div>
    </div>
  );
}
