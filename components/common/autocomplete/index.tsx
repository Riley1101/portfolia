//@ts-nocheck
import { createAutocomplete } from "@algolia/autocomplete-core";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import React from "react";
import searchClient from "@/utils/search-client";
import {
  KBarProvider,
  KBarPortal,
  KBarPositioner,
  KBarAnimator,
  KBarResults,
  KBarSearch,
  useMatches,
} from "kbar";
function Autocomplete() {
  const [autocompleteState, setAutocompleteState] = React.useState({});
  const querySuggestionsPlugin = createQuerySuggestionsPlugin({
    searchClient,
    indexName: "blogs_query_suggestions",
    getSearchParams({ state }) {
      return { hitsPerPage: state.query ? 5 : 10 };
    },
  });

  const autocomplete = React.useMemo(
    () =>
      createAutocomplete({
        plugins: [querySuggestionsPlugin],
        onStateChange({ state }) {
          // (2) Synchronize the Autocomplete state with the React state.
          setAutocompleteState(state);
        },

        getSources() {
          return [
            // (3) Use an Algolia index source.
            {
              sourceId: "goto",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "navigation",
                      query,
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
            {
              sourceId: "blog",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "blogs",
                      query,
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
            {
              sourceId: "snippet",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "snippets",
                      query,
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
            {
              sourceId: "bookmarks",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "bookmarks",
                      query,
                    },
                  ],
                });
              },
              getItemUrl({ item }) {
                return item.url;
              },
            },
          ];
        },
      }),
    []
  );

  return (
    <div>
      <KBarPortal>
        <KBarPositioner>
          <KBarAnimator>
            <KBarSearch />
            <KBarResults items={} />
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {/* <div
        {...autocomplete.getRootProps({})}
        className="w-[400px] h-auto min-h-[300px] bg-gray-800 p-4 rounded-md"
      >
        <div>
          <input {...autocomplete.getInputProps({})} />
          <div>
            <SearchIcon />
          </div>
        </div>
        <div>
          {autocompleteState.query < 4 && <Suggession />}
          {autocompleteState.isOpen &&
            autocompleteState.collections.map((collection) => {
              const { source, items } = collection;
              return (
                <div source={source} items={items} key={source.sourceId} />
              );
            })}
        </div>
      </div> */}
    </div>
  );
}
export default Autocomplete;
