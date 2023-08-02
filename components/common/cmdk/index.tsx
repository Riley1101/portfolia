// @ts-nocheck
"use client";
import {
  MagnifyingGlassIcon,
  ArrowUturnLeftIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import searchClient from "@/utils/search-client";
import { social } from "../nav-aside";
import React, { useEffect } from "react";
import { getAlgoliaResults } from "@algolia/autocomplete-preset-algolia";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { useHotkeys } from "react-hotkeys-hook";

const CommandMenu = () => {
  const [open, setOpen] = React.useState(false);
  const [autocompleteState, setAutocompleteState] = React.useState({});
  const inputRef = React.useRef<HTMLInputElement>(null);
  const autocomplete = React.useMemo(
    () =>
      createAutocomplete({
        onStateChange({ state }) {
          setAutocompleteState(state);
        },
        getSources() {
          return [
            {
              sourceId: "articles",
              getItemInputValue({ item }) {
                return item.query;
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: "articles",
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
              sourceId: "snippets",
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
          ];
        },
      }),
    []
  );

  useHotkeys(
    "ctrl+/",
    () => {
      setOpen((prev) => !prev);
    },
    { preventDefault: true }
  );

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  function handleClose(e: React.MouseEventHandler<HTMLButtonElement>) {
    setOpen(false);
  }

  return (
    <>
      {open && (
        <div
          onClick={handleClose}
          className="fixed top-0 left-0 grid w-full h-screen isolate z-[999] text-theme-accent place-items-center backdrop-filter backdrop-blur-lg"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            {...autocomplete.getRootProps({})}
            className="relative gradient-box rounded-lg  bg-[#121212] lg:w-[600px] min-h-[400px] md:w-[600px] w-[300px]  px-4 "
          >
            <div className="flex items-center px-4 mt-4 border-b rounded-md border-opacity-30 group border-theme-accent hover:from-theme-accent-opaque bg-gradient-to-l">
              <MagnifyingGlassIcon className="w-6 h-6 group-focus-within:text-theme-accent group" />
              {/* @ts-ignore */}
              <input
                ref={inputRef}
                // @ts-ignore
                spellCheck={false}
                // @ts-ignore
                type="text"
                // @ts-ignore
                {...autocomplete.getInputProps({})}
                id="algolia_search"
                placeholder="Search "
                className="w-full px-4 py-3 bg-transparent rounded-md outline-none group text-bg-theme-accent "
              />
              <button
                className="p-1 px-2 text-sm border rounded-md hover:bg-gray-800 border-theme-accent-opaque"
                onClick={() => {
                  setOpen(false);
                }}
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-4 py-4 max-h-[350px] overflow-y-scroll hide-scrollbar">
              {autocompleteState.isOpen &&
                autocompleteState.collections.map((collection) => {
                  const { source, items } = collection;
                  if (items.length > 0) {
                    return (
                      <div key={source.sourceId}>
                        <span className="text-sm capitalize text-theme-primary">
                          {source.sourceId}
                        </span>
                        <div className="flex flex-col gap-3 mt-2">
                          {items.map((itm) => {
                            let obj = {
                              snippets: `/snippets/${itm.slug}`,
                              articles: `/articles/${itm.slug}`,
                            };
                            let url = obj[source.sourceId];
                            return (
                              <Link
                                key={itm.objectID}
                                href={url}
                                onClick={(e) => {
                                  setOpen(false);
                                }}
                                className="flex items-center gap-4 px-2 py-3 border-b border-r border-gray-800 rounded-md group hover:bg-gradient-to-l hover:from-theme-accent-opaque"
                              >
                                <ArrowUturnLeftIcon className="w-4 h-4 rotate-180 group-hover:text-theme-primary group" />
                                <span className="text-theme-body">
                                  {itm.title}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  } else <></>;
                })}

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
            </div>
          </div>
        </div>
      )}
      <input
        onClick={() => {
          setOpen(true);
        }}
        type="text"
        placeholder="Search | Ctrl + /"
        className="w-full px-4 mb-2 py-2 pt-3 bg-transparent border border-theme-accent-opaque rounded-md outline-none placeholder:text-sm placeholder:text-theme-accent"
      />
    </>
  );
};

export default CommandMenu;
