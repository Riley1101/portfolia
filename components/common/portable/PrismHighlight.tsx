"use client";

import { useEffect, type ReactNode } from "react";
import Prism from "prismjs";

require("prismjs/components/prism-javascript");
require("prismjs/components/prism-typescript");
require("prismjs/components/prism-css");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-python");
require("prismjs/components/prism-bash");
require("prismjs/components/prism-lua");
require("prismjs/components/prism-rust");
require("prismjs/components/prism-git");

type Props = { children: ReactNode };

export function PrismHighlight({ children }: Props) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return <>{children}</>;
}
