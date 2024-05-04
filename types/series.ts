import { ArticlCardType } from "./articles";

export interface Serie {
  _id: string;
  title: string;
  description:string;
  articles: ArticlCardType[];
}
