import Link from "next/link";
import HomeBlogCard from "@/components/pages/home/blog-card";
import client from "@/utils/client";
import type { ArticlCardType } from "types/articles";
import { PencilIcon } from "@heroicons/react/20/solid";
import asyncComponent from "@/utils/async-component";
interface Props {
  posts: ArticlCardType[];
}
const query = `{"posts":*[_type == "article"] | order(releasedAt desc) [0..2]  {
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url,
    body,
}}
`;
async function LatestPostHome() {
  const data: Props = await client.fetch(query);
  return (
    <div>
      <div className="flex flex-col">
        <h3 className="mt-12 text-xl font-bold text-theme-primary">
          LATEST POST
        </h3>
        <p className="my-2 text-md">
          Here&rsquo;s the latest posts I&rsquo;ve written and published here on
          my site.
        </p>

        <div className="flex flex-col gap-4 my-4">
          {data.posts.map((article, index) => {
            return (
              <HomeBlogCard
                key={index}
                title={article.title}
                description={article.description}
                slug={article.slug}
                releasedAt={article.releasedAt}
                categories={article.categories}
                mainImage={article.mainImage}
              />
            );
          })}
        </div>
        <Link
          href="/articles"
          className="flex items-center gap-4 mx-auto mt-2 font-bold hover:text-theme-accent"
        >
          More Blogs <PencilIcon className="inline w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default asyncComponent(LatestPostHome);
