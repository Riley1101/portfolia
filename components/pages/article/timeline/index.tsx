import ArticleCard from "../card";
import client from "@/utils/client";
import type { ArticlCardType } from "types/articles";
import groupByMonth, { Months } from "@/utils/group-by-months";
import asyncComponent from "@/utils/async-component";

let query = `
  *[_type=='article'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'mainImage':mainImage.asset->{url}.url,
  'categories':categories[]->title,
  }
`;

async function ArticleTimeLine() {
  const data: ArticlCardType[] = await client.fetch(query);
  const groupedData = groupByMonth(data);
  const keys = Object.keys(groupedData) as Months[];

  return (
    <div className="flex flex-col my-6 ">
      {keys.map((month) => (
        <div
          key={month}
          className="relative flex flex-col gap-4 pb-4 border-r border-gray-800 "
        >
          <div className="absolute top-0 right-0 w-3 h-3 translate-x-[55%] bg-gray-800 rounded-full"></div>
          <span className="px-4 font-bold text-right text-theme-accent">
            {month}
          </span>
          {groupedData[month].map((article, index) => {
            return (
              <ArticleCard
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
      ))}
    </div>
  );
}
export default asyncComponent(ArticleTimeLine);
