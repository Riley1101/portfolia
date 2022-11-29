import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { GetServerSidePropsContext } from "next";
import type { ArticleDetailType } from "types/articles";
import PortableBody from "@/components/common/portable";
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

async function ArticleDetailPage(props: GetServerSidePropsContext) {
  const { params } = props;
  const data: ArticleDetailType = await client.fetch(query, {
    slug: params?.slug,
  });
  return (
    <div>
      <Hero
        title={data.title}
        description={data.description}
        categories={data.categories}
        mainImage={data.mainImage}
      />
      <PortableBody value={data.body} />
    </div>
  );
}

export default ArticleDetailPage;
