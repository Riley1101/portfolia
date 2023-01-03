import Hero from "@/components/pages/hero";
import SnippetTimeLine from "@/components/pages/snippets/timeline";

import client from "@/utils/client";
import type { ArticlCardType } from "types/articles";
const hero = {
  title: "Snippets",
  subtitle: " Code Snippets",
  description:
    "Some of the code snippets that I came across in my explore or the internet !",
};

async function ArticlePage() {
  let query = `
*[_type=='snippet'] | order(releasedAt desc)  {
  title,
  'slug':slug.current,
  'categories':categories[]->title,
  description,
  releasedAt
}
`;

  const raw_data: ArticlCardType[] = await client.fetch(query);
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
      <SnippetTimeLine data={raw_data} />
    </div>
  );
}
export default ArticlePage;
