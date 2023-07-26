import HomeBlogCard from "@/components/pages/home/blog-card";
import client from "@/utils/client";
import asyncComponent from "@/utils/async-component";
import type { ArticlCardType } from "@/types/articles";

interface Props {
  posts: ArticlCardType[];
}

const query = `{"posts":*[_type == "article"] | order(releasedAt desc) [0..3]  {
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
}}
`;

async function LatestPostHome() {
  const data: Props = await client.fetch(query);
  return (
    <div className="flex flex-col gap-4 @container my-4">
      <p className="my-2 text-md">
        Here&rsquo;s the latest posts I&rsquo;ve written and published here on
        my site.
      </p>
      <div className="gap-4  grid  @md:grid-cols-2">
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
  );
}

export default asyncComponent(LatestPostHome);
