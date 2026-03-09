"use client";

import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "sanity";
import components from "./components";

type Props = {
  value: PortableTextBlock[];
};

export default function PortableBody({ value }: Props) {
  return <PortableText value={value} components={components} />;
}
