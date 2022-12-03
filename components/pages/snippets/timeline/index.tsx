import SnippetCard from "../card";
import client from "@/utils/client";
import type { ArticlCardType } from "types/articles";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import asyncComponent from "@/utils/async-component";

let query = `
 
*[_type=='snippet'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  'categories':categories[]->title,
  description,
  releasedAt
}
  
  
`;
async function SnippetTimeLine() {
  const data: ArticlCardType[] = await client.fetch(query);
  return (
    <div className="flex flex-col ">
      <div className="flex items-center px-4 my-4 border rounded-md border-theme-accent-opaque group hover:from-theme-accent-opaque bg-gradient-to-l">
        <CommandLineIcon className="w-6 h-6 group-focus-within:text-theme-accent group" />
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-transparent rounded-md outline-none text-bg-theme-accent"
        />
      </div>
      <div className="relative flex flex-col gap-1 pb-4 ">
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
    </div>
  );
}

export default asyncComponent(SnippetTimeLine);
