export const revalidate = 60;

import Hero from "@/components/pages/article/hero";
import PortableBody from "@/components/common/portable";
import TableOfContents from "@/components/common/toc";
import client from "@/utils/client";
import type { DetailPageParamTypes } from "@/types";
import type { Project } from "@/types/page/testimonials";
import { getOpenGraph, getTwitterCard, metaData } from "@/utils/metadata";
import { redirect } from "next/navigation";

const query = `
*[_type == "project" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'mainImage':mainImage.asset->{url}.url,
  body,
}`;
export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
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
  const { slug } = await params;
  const data: Project = await client.fetch(query, {
    slug: slug,
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
