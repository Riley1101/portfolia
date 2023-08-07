"use client";
import { useEffect } from "react";
import CodeBlock from "@/components/common/portable/code";
import Prism from "prismjs";

type Props = {
  value: {
    code: string;
    language: string;
  };
};

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-python");
export default function SnippetCodeBlock({ value }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <CodeBlock value={{ code: value.code, language: value.language }} />;
}
