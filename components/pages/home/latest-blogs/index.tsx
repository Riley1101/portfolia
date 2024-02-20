import HomeBlogCard from "@/components/pages/home/blog-card";
import client from "@/utils/client";
import type { ArticlCardType } from "@/types/articles";

interface Props {
  posts: ArticlCardType[];
}

const query = `{"posts":*[_type == "article"] | order(releasedAt desc) [0..4]  {
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
}}
`;

export async function HomeLatestPost() {
  const data: Props = await client.fetch(query);
  return (
    <div className="flex flex-col gap-4 @container">
      <p className="my-2 text-md">
        Here are the latest posts I have written and published on my site.
      </p>
      <div className="gap-4 grid @md:grid-cols-2">
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
