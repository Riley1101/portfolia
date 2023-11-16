"use client";
import { PortableText } from "@portabletext/react";
import { useEffect } from "react";
import Prism from "prismjs";
import components from "./components";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-python");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-lua");
require("prismjs/components/prism-rust");
require("prismjs/components/prism-git");
require("prismjs/components/prism-git");

type Props = {
  value: any;
};

export default function PortableBody({ value }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <PortableText value={value} components={components} />;
}
