export const revalidate = 60;

import Hero from "@/components/pages/article/hero";
import PortableBody from "@/components/common/portable";
import TableOfContents from "@/components/common/toc";
import type { ArticleDetailType } from "@/types/articles";
import type { DetailPageParamTypes } from "@/types";
import { NewsLetter } from "@/components/common/newsletter";
import { Related } from "@/components/common/related";
import {
  getArticleBySlug,
  getArticleSEOContentBySlug,
} from "@/actions/postAcions";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data: ArticleDetailType = await getArticleSEOContentBySlug(params.slug);
  return {
    title: data?.title,
    description: data?.description,
    keywords: [...metaData.keywords, ...data?.categories],
    openGraph: getOpenGraph(
      data?.mainImage + "?w=1200&h=630",
      data?.title,
      data.description,
      new URL(`/snippets/${data?.slug}`, metaData?.url),
      "article",
    ),
    twitter: getTwitterCard(data?.mainImage, data.title, data.description),
  };
}

async function ArticleDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const data = await getArticleBySlug(params?.slug);
  if (data === null) return <></>;
  return (
    <div className="page-container md:gap-4 lg:gap-12">
      <div className="flex shrink page-left flex-col gap-4">
        <Hero
          title={data.title}
          description={data.description}
          categories={data.categories}
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
