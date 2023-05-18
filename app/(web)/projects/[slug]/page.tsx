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
      new URL(`/projects/${data?.slug}`, metaData?.url)
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
    <div>
      <div className="lg:w-[60%]">
        <Hero
          title={data.title}
          description={data.description}
          releasedAt={data.releasedAt}
          mainImage={data.mainImage}
        />
      </div>
      <div className="flex flex-col gap-2 lg:grid lg:grid-cols-[60%_40%] lg:gap-8  relative">
        <div className="col-starts-2 order-1 lg:order-2">
          <TableOfContents value={data.body} />
        </div>
        <div className="col-starts-1 order-2 lg:order-1">
          <PortableBody value={data.body} />
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;