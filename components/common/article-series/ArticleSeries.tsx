import React from "react";
import type { Serie } from "@/types/series";
import client from "@/utils/client";
import { ArticlCardType } from "@/types/articles";
import { ArticleSerieCard } from "../article-serie-card/ArticleSerieCard";

type Props = {};

const query = `
*[_type=='serie']   {
    _id,
    title,
    description, 
    'articles':articles[]->{
    title,
    'categories':categories[]->title,
    'slug':slug.current,
    releasedAt,
  },
}`;

export async function ArticleSeries({}: Props) {
  const series: Serie[] = await client.fetch(query);
  return (
    <div className="flex flex-col gap-8 w-full">
      {!!series &&
        series.map((serie) => (
          <div key={serie._id} className="flex  flex-col w-full">
            <h2 className="text-xl text-theme-primary mb-2">{serie.title}</h2>
            <p className="text-theme-body">{serie.description}</p>
            <div className="py-4  pb-4 flex gap-4 overflow-x-scroll md:max-w-[700px]">
              {serie.articles.map((e: ArticlCardType) => (
                <ArticleSerieCard key={e._id} article={e} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
