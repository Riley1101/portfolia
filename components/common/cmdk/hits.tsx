// ./components/Search/CustomHits.js
import { connectStateResults } from "react-instantsearch-dom";
import Link from "next/link";
import React from "react";
import { ArrowUturnLeftIcon } from "@heroicons/react/20/solid";
import { social } from "../nav-aside";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { createAutocomplete } from "@algolia/autocomplete-core";
import searchClient from "@/utils/search-client";
function Hits({ searchState, searchResults }: any) {
  const [autocompleteState, setAutocompleteState] = React.useState({});
  const validQuery = searchState.query?.length >= 3;
  // @ts-ignore
  const autocomplete = React.useMemo(
    () =>
      createAutocomplete({
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
    <>
      {searchResults?.hits.length > 0 && validQuery && (
        <div>
          <span className="text-sm text-theme-primary">Article</span>
          <div className="flex flex-col gap-3 mt-2">
            {searchResults.hits.map((hit: any) => (
              <Link
                key={hit.objectID}
                href={`/articles/${hit.slug}`}
                className="flex items-center gap-4 px-2 py-3 border-b border-r border-gray-800 rounded-md group hover:bg-gradient-to-l hover:from-theme-accent-opaque"
              >
                <ArrowUturnLeftIcon className="w-4 h-4 rotate-180 group-hover:text-theme-primary group" />
                <span className="text-theme-body">{hit.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
      <div>
        <span className="text-sm text-theme-primary">Connect me</span>
        <div className="flex flex-col gap-3 mt-2">
          {social.map((nav) => (
            <Link
              key={nav.id}
              target="_blank"
              href={nav.href}
              className="flex items-center gap-4 px-2 py-3 border-b border-r border-gray-800 rounded-md group hover:bg-gradient-to-l hover:from-theme-accent-opaque"
            >
              <div className="text-white group-hover:text-theme-accent">
                {nav.icon}
              </div>
              <span className="text-theme-body">{nav.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default connectStateResults(Hits);
