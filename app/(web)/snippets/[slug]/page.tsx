export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { DetailPageParamTypes } from "@/types";
import type { SnippetDetailType } from "@/types/articles";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import CodeBlock from "@/components/pages/snippets/codeblock";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
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
      new URL(`/snippets/${data?.slug}`, metaData?.url)
    ),
    twitter: getTwitterCard(data?.mainImage, data.title, data.description),
  };
}
async function SnippetDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const data: SnippetDetailType = await client.fetch(query, {
    slug: params?.slug,
  });
  if (data === null) return <div>404</div>;
  return (
    <div className="w-full lg:w-[60%] " >
      <Hero
        title={data.title}
        description={data.description}
        categories={data.categories}
        mainImage={data.mainImage}
        releasedAt={data.releasedAt}
      />
      <CodeBlock
        value={{ code: data.snippet.code, language: data.snippet.language }}
      />
    </div>
  );
}

export default SnippetDetailPage;
