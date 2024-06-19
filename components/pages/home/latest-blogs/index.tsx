import HomeBlogCard from "@/components/pages/home/blog-card";
import { getLatestHomePosts } from "@/actions/postAcions";

export async function HomeLatestPost() {
  const posts= await getLatestHomePosts();
  return (
    <div className="flex flex-col gap-4 @container">
      <p className="my-2 text-md">
        Checkout my latest articles 
      </p>
      <div className="gap-4 grid @md:grid-cols-2">
        {posts.map((article, index) => {
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
