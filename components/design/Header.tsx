import React from "react";
import { Link } from "./Typography";

type Props = {};

export function Header({}: Props) {
  return (
    <header className="bg-background w-full h-[3.5em] px-4 md:px-12 flex items-center border-b">
      <Link className="no-underline">Arkar Myat</Link>
    </header>
  );
}
