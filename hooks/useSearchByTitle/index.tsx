import { useState, useEffect } from "react";
import type { Post } from "@/types/index";

const useSearchByTitle = (
  items: Post[]
): {
  data: Post[];
  keyword: string;
  // eslint-disable-next-line no-unused-vars
  setKeyword: (keyword: string) => void;
} => {
  const [data, setData] = useState(items);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (keyword.length > 3) {
      let tmp = data.filter((item) =>
        item.title.toLowerCase().includes(keyword.toLowerCase())
      );
      setData(tmp);
    } else if (keyword.length < 3) {
      setData(items);
    }
  }, [keyword]);
  return { data, keyword, setKeyword };
};
export default useSearchByTitle;
