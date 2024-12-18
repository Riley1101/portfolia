export const revalidate = 60;

import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { DetailPageParamTypes } from "@/types";
import type { SnippetDetailType } from "@/types/articles";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import CodeBlock from "@/components/pages/snippets/codeblock";
import { redirect } from "next/navigation";

const query = `
*[_type == "snippet" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url,
  snippet
}
  `;

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const seoQuery = `
  *[_type == "snippet" && slug.current == $slug][0]{
    title,
    'slug':slug.current,
    description,
    'categories':categories[]->title,
    'mainImage':mainImage.asset->{url}.url
  }`;
  const data: SnippetDetailType = await client.fetch(seoQuery, {
    slug: params?.slug,
  });

  return {
    title: data?.title,
    description: data?.description,
    keywords: [...metaData.keywords, ...data?.categories],
    openGraph: getOpenGraph(
      data?.mainImage,
      data.title,
      data.description,
      new URL(`/snippets/${data?.slug}`, metaData?.url),
      "article",
    ),
    twitter: getTwitterCard(data?.mainImage, data.title, data.description),
  };
}

async function SnippetDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const { slug } = await params;
  const data: SnippetDetailType = await client.fetch(query, {
    slug,
  });
  if (data === null) {
    return redirect("/404");
  }
  return (
    <div className="page-container md:gap-4 lg:gap-12">
      <div className="flex shrink page-left flex-col gap-4">
        <Hero
          title={data.title}
          description={data.description}
          categories={data.categories}
          releasedAt={data.releasedAt}
        />
        <div className="flex flex-col">
          <CodeBlock
            value={{ code: data.snippet.code, language: data.snippet.language }}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default SnippetDetailPage;
