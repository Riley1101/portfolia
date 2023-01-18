import { connectSearchBox } from "react-instantsearch-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
function SearchBox({ refine }: any) {
  return (
    <>
      <div className="flex items-center px-4 mt-4 border-b rounded-md border-opacity-30 group border-theme-accent hover:from-theme-accent-opaque bg-gradient-to-l">
        <MagnifyingGlassIcon className="w-6 h-6 group-focus-within:text-theme-accent group" />
        <input
          spellCheck={false}
          type="text"
          id="algolia_search"
          placeholder="Search "
          onChange={(e) => refine(e.currentTarget.value)}
          className="w-full px-4 py-3 bg-transparent rounded-md outline-none group text-bg-theme-accent "
        />
      </div>
    </>
  );
}

export default connectSearchBox(SearchBox);
