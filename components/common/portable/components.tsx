import Link from "next/link";
import { PortableTextComponents } from "@portabletext/react";
import CodeBlock from "./code";
import KatexBlock from "./katex";
import NextImage from "./image";
import BlockQuote from "./blockquote";
import { InlineMath } from "react-katex";
import { LinkIcon } from "@heroicons/react/20/solid";

const components: PortableTextComponents = {
  marks: {
    latex: ({ children }: any) => (
      <InlineMath className="mx-2">{children[0]}</InlineMath>
    ),
    em: ({ children }) => (
      <em className="font-semibold text-theme-accent">{children}</em>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <Link
          href={value?.href}
          target={target}
          className="inline hover:underline text-theme-accent"
        >
          {children} <LinkIcon className="inline w-4 h-4 ml-1" />
        </Link>
      );
    },
  },
  types: {
    code: CodeBlock,
    image: NextImage,
    latex: KatexBlock,
  },
  block: {
    h1: ({ children }) => (
      <h1 className="mt-10 text-3xl font-bold text-theme-primary">
        # {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-bold text-theme-primary">
        # {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-xl font-bold text-theme-primary">
        # {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-10 mb-4 text-lg font-bold text-theme-primary">
        # {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-base leading-loose text-theme-body">{children}</p>
    ),
    blockquote: BlockQuote,
  },
  list: {
    bullet: ({ children }) => <ul className="ml-8 list-disc">{children}</ul>,
    number: ({ children }) => <ol className="ml-8 list-decimal">{children}</ol>,
  },
};
export default components;
