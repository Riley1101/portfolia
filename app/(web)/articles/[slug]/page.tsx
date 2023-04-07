export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { ArticleDetailType } from "types/articles";
import PortableBody from "@/components/common/portable";
import type { DetailPageParamTypes } from "types";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

const query = `
*[_type == "article" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url,
  body,
}`;
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const seoQuery = `
*[_type == "article" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url
}`;

  const data: ArticleDetailType = await client.fetch(seoQuery, {
    slug: params?.slug,
  });

  
  return {
    title: data?.title,
    description: data?.description,
    keywords: [...metaData.keywords, ...data?.categories],
    openGraph: getOpenGraph(
      data?.mainImage,
      data?.title,
      data.description,
      new URL(`/snippets/${data?.slug}`, metaData?.url)
    ),
    twitter: getTwitterCard(data?.mainImage, data.title, data.description),
  };
}
async function ArticleDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const data: ArticleDetailType = await client.fetch(query, {
    slug: params?.slug,
  });
  if (data === null) return <div>404</div>;
  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        categories={data.categories}
        mainImage={data.mainImage}
        releasedAt={data.releasedAt}
      />
      <div className="relative overflow-hidden ">
        <PortableBody value={data.body} />
      </div>
    </div>
  );
}

export default ArticleDetailPage;
