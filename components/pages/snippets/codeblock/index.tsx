"use client";
import Prism from "prismjs";
import { useEffect } from "react";
import CodeBlock from "@/components/common/portable/code";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-python");

type Props = {
  value: {
    code: string;
    language: string;
  };
};

export default function SnippetCodeBlock({ value }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <div>
      <CodeBlock value={{ code: value.code, language: value.language }} />
    </div>
  );
}
