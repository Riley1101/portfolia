import { useQuery } from "@apollo/client";
import { useState } from "react";

const useSpaceQuery = (QUERY, lim = 5) => {
  const [limit, setLimit] = useState(lim);

  const { loading, error, data } = useQuery(QUERY, {
    variables: {
      limit,
    },
  });
  const loadMore = () => {
    setLimit(limit + 5);
  };
  return {
    data,
    loading,
    error,
    loadMore,
  };
};
export default useSpaceQuery;
