export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { ArticleDetailType } from "types/articles";
import PortableBody from "@/components/common/portable";
import TableOfContents from "@/components/common/toc";
import type { DetailPageParamTypes } from "types";
import ArticleJson from "@/components/common/article-json";
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

async function ArticleDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const data: ArticleDetailType = await client.fetch(query, {
    slug: params?.slug,
  });
  if (data === null) return <div>404</div>;
  return (
    <div>
    <div className="lg:w-[60%]">
      <Hero
        title={data.title}
        description={data.description}
        categories={data.categories}
        mainImage={data.mainImage}
        releasedAt={data.releasedAt}
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
      <ArticleJson
        meta={{
          useAppDir: true,
          url: `https://arkar.space/articles/${data.slug}`,
          title: data.title,
          images: data.mainImage,
          datePublished: data.releasedAt,
          dateModified: data.releasedAt,
          authorName: "Arkar Kaung Myat",
          publisherName: "Arkar Kaung Myat",
          publisherLogo: "/profile.jpg",
          description: data.description,
        }}
      />
    </div>
  );
}

export default ArticleDetailPage;
