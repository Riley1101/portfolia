import ArticleCard from "../card";
import client from "@/utils/client";
import type { ArticlCardType } from "@/types/articles";
import asyncComponent from "@/utils/async-component";

let query = `
  *[_type=='article'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'mainImage':mainImage,
  'categories':categories[]->title,
  }
`;

async function ArticleTimeLine() {
  const data: ArticlCardType[] = await client.fetch(query);
  return (
    <div className="flex flex-col my-6 ">
      <div className="relative  columns-3xs gap-4 ">
        {data.map((article, index) => {
          return (
            <ArticleCard
              key={index}
              mainImage={article.mainImage}
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
export default asyncComponent(ArticleTimeLine);
