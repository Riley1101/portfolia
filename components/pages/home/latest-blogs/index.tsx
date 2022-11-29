import HomeBlogCard from "@/components/pages/home/blog-card";
import client from "@/utils/client";
import type { ArticlCardType } from "types/articles";

interface Props {
  posts: ArticlCardType[];
}
const query = `{"posts":*[_type == "article"] [0..2]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url,
    body,
}}
`;
export default async function LatestPostHome() {
  const data: Props = await client.fetch(query);
  return (
    <div>
      <div>
        <h3 className="mt-12 text-xl font-bold text-theme-primary">
          LATEST POST
        </h3>
        <p className="my-2 mb-6">
          Here&rsquo;s the latest posts I&rsquo;ve written and published here on
          my site.
        </p>

        <div className="flex flex-col gap-2 my-4">
          {data.posts.map((article, index) => {
            return (
              <HomeBlogCard
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
    </div>
  );
}
