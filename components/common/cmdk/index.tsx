"use client";
import "react-cmdk/dist/cmdk.css";
import CommandPalette, {
  filterItems,
  getItemIndex,
  useHandleOpenCommandPalette,
} from "react-cmdk";
import { useState, useEffect } from "react";
import {
  HomeIcon,
  UserIcon,
  PencilIcon,
  CodeBracketIcon,
  PlayIcon,
} from "@heroicons/react/20/solid";
import { ArrowUturnDownIcon } from "@heroicons/react/20/solid";
interface Props {
  open: boolean;
  setOpen: any;
}

const CommandMenu = ({ open, setOpen }: Props) => {
  const [page, setPage] = useState<"root" | "projects">("root");
  const [search, setSearch] = useState("");
  useHandleOpenCommandPalette(setOpen);
  const filteredItems = filterItems(
    [
      {
        heading: "Articles",
        id: "articles",
        items: [
          {
            id: "developer-settings",
            children: "Developer settings",
            icon: PencilIcon,
            href: "#",
          },
        ],
      },
      {
        heading: "Navigation",
        id: "home",
        items: [
          {
            id: "home",
            children: "Home",
            icon: HomeIcon,
            href: "/",
          },
          {
            id: "about",
            children: "About",
            icon: UserIcon,
            href: "/about",
          },
          {
            id: "articles",
            children: "Articles",
            icon: PencilIcon,
            href: "/articles",
          },
          {
            id: "snippets",
            children: "Snippets",
            icon: CodeBracketIcon,
            href: "/snippets",
          },
          {
            id: "videos",
            children: "Videos",
            icon: PlayIcon,
            href: "/videos",
          },
        ],
      },
    ],
    search
  );
  // useEffect(() => {
  //   function handleKeyDown(e: KeyboardEvent) {
  //     if (e.metaKey && e.key === "y") {
  //       e.preventDefault();
  //       e.stopPropagation();

  //       setOpen((currentValue: boolean) => {
  //         return !currentValue;
  //       });
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  useEffect(() => {
    console.log(search);
  }, [search]);
  return (
    <CommandPalette
      onChangeSearch={setSearch}
      onChangeOpen={setOpen}
      search={search}
      isOpen={open}
      page={page}
    >
      <CommandPalette.Page id="root">
        {filteredItems.length ? (
          filteredItems.map((list) => (
            <CommandPalette.List key={list.id} heading={list.heading}>
              {list.items.map(({ id, ...rest }) => (
                <CommandPalette.ListItem
                  key={id}
                  index={getItemIndex(filteredItems, id)}
                  {...rest}
                />
              ))}
            </CommandPalette.List>
          ))
        ) : (
          <CommandPalette.FreeSearchAction />
        )}
      </CommandPalette.Page>

      <CommandPalette.Page id="projects">
        {/* Projects page */}
      </CommandPalette.Page>
    </CommandPalette>
  );
};

export default CommandMenu;
