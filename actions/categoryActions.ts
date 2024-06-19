import { Category } from "@/types/articles";
import client from "@/utils/client";
import { cache } from "react";

export const getCategories = cache(async function (): Promise<Category[]> {
  const query = `
*[_type=='category']{
  title,
    _id
}
`;
  return await client.fetch(query);
});
