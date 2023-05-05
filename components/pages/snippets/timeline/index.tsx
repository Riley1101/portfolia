"use client";
import SnippetCard from "../card";
import useSearchByTitle from "@/utils/search-by-title";
import { CommandLineIcon } from "@heroicons/react/24/outline";
import { ArticlCardType } from "@/types/articles";

interface Props {
  data: ArticlCardType[];
}
function SnippetTimeLine({ data }: Props) {
  const { filteredData, handleChange, searchTerm } = useSearchByTitle(data);
  return (
    <div className="flex flex-col ">
      <div className="flex items-center px-4 my-4 border rounded-md border-theme-accent-opaque group hover:from-theme-accent-opaque bg-gradient-to-l">
        <CommandLineIcon className="w-6 h-6 group-focus-within:text-theme-accent group" />
        <input
          onChange={handleChange}
          value={searchTerm}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 bg-transparent rounded-md outline-none text-bg-theme-accent"
        />
      </div>
      <div className="relative flex flex-col gap-4 pb-4 ">
        {filteredData.map((article, index) => {
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

export default SnippetTimeLine;
