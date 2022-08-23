import React from "react";
import searchClient from "@/utils/search/client";
import { createQuerySuggestionsPlugin } from "@algolia/autocomplete-plugin-query-suggestions";
import { Box, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import Suggession from "@/components/common/search/Suggesstion";

import Hints from "@/components/common/search/hint";
function Autocomplete() {
  // (1) Create a React state.
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
    <Box w="full" {...autocomplete.getRootProps({})}>
      <InputGroup w="full" my="2">
        <Input
          variant="flushed"
          placeholder="Search"
          type="search"
          {...autocomplete.getInputProps({})}
        />
        <InputRightElement>
          <SearchIcon />
        </InputRightElement>
      </InputGroup>
      <Box pb="2">
        {autocompleteState.query < 4 && <Suggession />}
        {autocompleteState.isOpen &&
          autocompleteState.collections.map((collection) => {
            const { source, items } = collection;
            return (
              <Hints source={source} items={items} key={source.sourceId} />
            );
          })}
      </Box>
    </Box>
  );
}
export default Autocomplete;
