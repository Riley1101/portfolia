export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { DetailPageParamTypes } from "types";
import type { SnippetDetailType } from "types/articles";
import CodeBlock from "@/components/pages/snippets/codeblock";
import ArticleJson from "@/components/common/article-json";

const query = `
*[_type == "snippet" && slug.current == $slug][0]{
  title,
  'slug':slug.current,
  releasedAt,
  description,
  'categories':categories[]->title,
  'mainImage':mainImage.asset->{url}.url,
  snippet
}
  `;

async function SnippetDetailPage(props: DetailPageParamTypes) {
  const { params } = props;
  const data: SnippetDetailType = await client.fetch(query, {
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
      <CodeBlock
        value={{ code: data.snippet.code, language: data.snippet.language }}
      />
      <ArticleJson
        meta={{
          useAppDir: true,
          url: `https://arkar.space/snippets/${data.slug}`,
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

export default SnippetDetailPage;
