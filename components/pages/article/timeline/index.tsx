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
      <div className="relative  grid grid-cols-1 md:grid-cols-2 grid-flow-dense  gap-4 md:gap-4">
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
