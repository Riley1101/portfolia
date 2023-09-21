export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { Project } from "@/types/page/testimonials";
import PortableBody from "@/components/common/portable";
import TableOfContents from "@/components/common/toc";
import type { DetailPageParamTypes } from "@/types";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";

const query = `
*[_type == "project" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'mainImage':mainImage.asset->{url}.url,
  body,
}`;
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const seoQuery = `
*[_type == "project" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  description,
  'mainImage':mainImage.asset->{url}.url
}`;

  const data: Project = await client.fetch(seoQuery, {
    slug: params?.slug,
  });

  return {
    title: data?.title,
    description: data?.description,
    keywords: [...metaData.keywords],
    openGraph: getOpenGraph(
      data?.mainImage,
      data?.title,
      data.description,
      new URL(`/projects/${data?.slug}`, metaData?.url),
    ),
    twitter: getTwitterCard(data?.mainImage, data.title, data.description),
  };
}
async function ProjectDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const data: Project = await client.fetch(query, {
    slug: params?.slug,
  });
  if (data === null) return <div>404</div>;
  return (
    <div className="page-container md:gap-4 lg:gap-12">
      <div className="flex shrink page-left flex-col gap-4">
        <Hero
          title={data.title}
          description={data.description}
          releasedAt={data.releasedAt}
        />
        <div className="block lg:hidden">
          <TableOfContents value={data.body} />
        </div>
        <div className="flex flex-col">
          <PortableBody value={data.body} />
        </div>
      </div>

      <div className="hidden min-w-[200px] lg:block pt-24">
        <TableOfContents value={data.body} />
      </div>
    </div>
  );
}

export default ProjectDetailPage;
