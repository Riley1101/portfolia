import HomeBlogCard from "@/components/pages/home/blog-card";
import type { ArticlCardType } from "@/types/articles";
import client from "@/utils/client";
import asyncComponent from "@/utils/async-component";

interface Props {
  posts: ArticlCardType[];
}

const query = `{"posts":*[_type == "article"] | order(releasedAt desc) [0..4]  {
    _id,
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
    <div className="flex flex-col gap-4 @container" test-id="home-articles">
      <p className="my-2 text-md">
        Here are the latest posts I have written and published on my site.
      </p>
      <div className="gap-4 grid @md:grid-cols-2">
        {data.posts.map((article) => {
          return (
            <HomeBlogCard
              _id={article._id}
              key={article._id}
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
