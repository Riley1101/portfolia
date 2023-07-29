export const revalidate = 60;
import { NewsLetter } from "@/components/common/newsletter";
import { Related } from "@/components/common/related";
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { ArticleDetailType } from "@/types/articles";
import PortableBody from "@/components/common/portable";
import TableOfContents from "@/components/common/toc";
import type { DetailPageParamTypes } from "@/types";
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
  "related": *[_type == "article" && _id != ^._id && count(categories[@._ref in ^.^.categories[]._ref]) > 0] | order(releasedAt desc, _createdAt desc) [0..2] {
     title,
     _id,
    'mainImage':mainImage.asset->{url}.url,
     "slug": slug.current,
     description
   }
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
    <div className="page-container md:gap-4 lg:gap-12">
      <div className="flex shrink page-left flex-col gap-4">
        <Hero
          title={data.title}
          description={data.description}
          categories={data.categories}
          mainImage={data.mainImage}
          releasedAt={data.releasedAt}
        />
        <div className="block lg:hidden">
          <TableOfContents value={data.body} />
        </div>
        <div className="flex flex-col">
          <PortableBody value={data.body} />
          <NewsLetter />
          <Related data={data.related} />
        </div>
      </div>

      <div className="hidden min-w-[200px] lg:block pt-24">
        <TableOfContents value={data.body} />
      </div>
    </div>
  );
}

export default ArticleDetailPage;
