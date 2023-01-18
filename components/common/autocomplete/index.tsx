import searchClient from "@/utils/search-client";
import { InstantSearch } from "react-instantsearch-dom";
import Hits from "../cmdk/hits";
import SearchBox from "../cmdk/searchbox";

function Autocomplete() {
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName="blogs">
        <SearchBox />
        <Hits />
      </InstantSearch>
    </div>
  );
}
export default Autocomplete;
