import React from "react";
import type { Serie } from "@/types/series";
import { ArticlCardType } from "@/types/articles";
import { ArticleSerieCard } from "@/components/common/article-serie-card";
import { getArticleSeries } from "@/actions/postAcions";

export async function ArticleSeries() {
  const series: Serie[] = await getArticleSeries();
  return (
    <div className="flex flex-col gap-8 w-full">
      {!!series &&
        series.map((serie) => (
          <div key={serie._id} className="flex  flex-col w-full">
            <h2 className="text-xl text-theme-primary mb-2">{serie.title}</h2>
            <p className="text-theme-body">{serie.description}</p>
            <div className="py-4  pb-4 flex gap-4 overflow-x-scroll md:max-w-[700px]">
              {serie.articles.map((e: ArticlCardType) => (
                <ArticleSerieCard key={e.slug} article={e} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}
