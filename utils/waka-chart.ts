import { useEffect, useState } from "react";
import groupByMonth from "./group-by-months";

import client from "./client";
import { accType, months } from "./group-by-months";

export interface Item {
  _id: string;
  releasedAt: string;
}


function transformData(data: accType<Item> | undefined): number[] {
  if (!data) {
    return [];
  }
  return months.map((month) => (data[month] ? data[month].length : 0));
}

export const useArticlePublishData = (): number[] => {
  const [articles, setArticles] = useState<accType<Item>>();
  useEffect(() => {
    const articles: Promise<Item[]> = getArticlesCount();
    articles.then((articles) => {
      if (articles) {
        setArticles(groupByMonth(articles));
      } else {
        setArticles(undefined);
      }
    });
  }, []);
  return transformData(articles);
};

export const useSnippetPublishedData = (): number[] => {
  const [snippets, setSnippets] = useState<accType<Item>>();
  useEffect(() => {
    const snippets: Promise<Item[]> = getSnippetCount();
    snippets.then((snippet) => {
      if (snippet) {
        setSnippets(groupByMonth(snippet));
      } else {
        setSnippets(undefined);
      }
    });
  }, []);
  return transformData(snippets);
};

export const getSnippetCount = async (): Promise<Item[]> => {
  const query = `*[_type == "snippet"][0..1000]{
        _id,
        releasedAt
    }`;
  return await client.fetch(query);
};

export const getArticlesCount = async (): Promise<Item[]> => {
  const query = `*[_type == "article"][0..1000]{
        _id,
        releasedAt
    }`;
  return await client.fetch(query);
};
