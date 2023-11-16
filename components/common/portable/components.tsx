import Link from "next/link";
import { toUrl } from "@/utils/to-url";
import { PortableTextComponents } from "@portabletext/react";
import CodeBlock from "./code";
import KatexBlock from "./katex";
import NextImage from "./image";
import BlockQuote from "./blockquote";
import { InlineMath } from "react-katex";
import { LinkIcon } from "@heroicons/react/20/solid";
import { Embed } from "./Embeded";
import { TableBlock } from "./table";

const components: PortableTextComponents = {
  marks: {
    latex: (props: any) => {
      return (
        <span className="mx-2 text-theme-accent text-[14px]">
          <InlineMath>{props.text}</InlineMath>
        </span>
      );
    },
    em: ({ children }) => (
      <em className="italic text-theme-accent underline ">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="text-theme-accent">
        {children}
      </strong>
    ),
    code: ({ children }) => (
      <code className="bg-theme-primary-opaque p-1 text-[14px] rounded-md">
        {children}
      </code>
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
    youtube: Embed,
    table: TableBlock,
  },
  block: {
    h1: ({ children }) => (
      <h1
        className="mt-10 text-4xl font-bold text-theme-primary"
        id={toUrl(children)}
      >
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        className="mt-10 mb-4 text-3xl font-bold text-theme-primary"
        id={toUrl(children)}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-10 mb-4 text-2xl font-bold text-theme-primary">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="mt-10 mb-4 text-xl font-bold text-theme-primary">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="my-4 text-lg leading-loose text-theme-body">{children}</p>
    ),
    blockquote: BlockQuote,
  },
  list: {
    bullet: ({ children }) => (
      <ul className="ml-6 md:ml-12 space-y-2 list-disc leading-loose">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="ml-6 md:ml-12 space-y-2 list-decimal leading-loose">{children}</ol>
    ),
  },
};
export default components;
