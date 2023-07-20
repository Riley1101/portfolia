import Link from "next/link";
import client from "@/utils/client";
import type { ArticlCardType } from "@/types/articles";
import SnippetCard from "../../snippets/card";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import asyncComponent from "@/utils/async-component";

let query = `
*[_type=='snippet'] | order(releasedAt desc) [0..4]  {
  title,
  'slug':slug.current,
  'categories':categories[]->title,
  description,
  releasedAt
}
`;

async function LatestSnippets() {
  const data: ArticlCardType[] = await client.fetch(query);
  return (
    <div>
      <div className="flex flex-col">
        <h3 className="mt-12 text-xl font-bold text-theme-primary">
          LATEST SNIPPETS
        </h3>
        <div className="flex flex-col gap-4 my-4">
          {data.map((article, index) => {
            return (
              <SnippetCard
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
        <Link
          href="/articles"
          className="flex items-center gap-4 mx-auto mt-2 font-bold hover:text-theme-accent"
        >
          More Snippets{" "}
          <CommandLineIcon className="w-6 h-6 hover:text-theme-accent " />
        </Link>
      </div>
    </div>
  );
}

export default asyncComponent(LatestSnippets);
