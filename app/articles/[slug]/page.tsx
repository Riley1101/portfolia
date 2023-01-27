export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { ArticleDetailType } from "types/articles";
import PortableBody from "@/components/common/portable";
import type { DetailPageParamTypes } from "types";

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
      <Hero
        title={data.title}
        description={data.description}
        categories={data.categories}
        mainImage={data.mainImage}
        releasedAt={data.releasedAt}
      />
      <div className="relative overflow-hidden">
        <PortableBody value={data.body} />
      </div>
    </div>
  );
}

export default ArticleDetailPage;
