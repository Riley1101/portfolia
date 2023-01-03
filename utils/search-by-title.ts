import { useState, useEffect } from "react";

function useSearchByTitle<T extends { filter: Function }>(data: T) {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState<T>(data);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const results = data.filter((item: any) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm]);

  return { searchTerm, handleChange, filteredData, setFilteredData };
}

export default useSearchByTitle;
