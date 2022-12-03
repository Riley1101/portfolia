import Meta from "@/components/common/meta";
import type { ArticleDetailType } from "types/articles";
import client from "@/utils/client";

export default async function Head(props: any) {
  const { params } = props;
  const query = `
*[_type == "article" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  description,
  'categories':categories[]->title,
}`;

  const data: ArticleDetailType = await client.fetch(query, {
    slug: params?.slug,
  });

  const meta = {
    title: `${data.title} | Arkar Kaung Myat `,
    description: data.description,
    url: `https://arkardev.space/articles/${data.slug}`,
    tags: data.categories || [],
  };
  return (
    <head>
      <Meta meta={meta} />
    </head>
  );
}
