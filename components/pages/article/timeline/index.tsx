import ArticleCard from "../card";
import Link from "next/link";
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

interface Props {
  current: string | undefined;
}
async function ArticleTimeLine(props: Props) {
  const { current } = props;
  const data: ArticlCardType[] = await client.fetch(query);
  const filteredArticles = data.filter((article) => {
    if (current) {
      if (!article.categories) return false;
      return article.categories.includes(current);
    }
    return true;
  });
  return (
    <div className="flex flex-col @container my-6 ">
      {filteredArticles.length > 0 ? (
        <div
          className="relative grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3
       grid-flow-dense  gap-4 md:gap-8"
        >
          {filteredArticles.map((article, index) => {
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
      ) : (
        <div className="flex flex-col items-center gap-4 mx-auto mt-12">
          <p>No article found with category {current}</p>
          <div className="flex gap-2 ">
            <Link
              href="/articles"
              className={` max-w-max  flex cursor-pointer items-center hover:text-theme-accent py-2 text-sm hover:bg-theme-accent-opaque duration-300  transition-all border  px-4  rounded-full
          bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary  text-theme-accent`}
            >
              Explore Articles
            </Link>
            <Link
              href="/snippets"
              className={` max-w-max  flex cursor-pointer items-center hover:text-theme-accent py-2 text-sm hover:bg-theme-accent-opaque duration-300  transition-all border  px-4  rounded-full
          bg-theme-primary bg-opacity-5 border-opacity-5 border-theme-primary  text-theme-accent`}
            >
              Explore Snippets
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
export default asyncComponent(ArticleTimeLine);
