export const revalidate = 60;
import Hero from "@/components/pages/article/hero";
import client from "@/utils/client";
import type { DetailPageParamTypes } from "types";
import type { SnippetDetailType } from "types/articles";
import CodeBlock from "@/components/pages/snippets/codeblock";

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
    </div>
  );
}

export default SnippetDetailPage;
