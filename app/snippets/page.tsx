import Hero from "@/components/pages/hero";
import SnippetTimeLine from "@/components/pages/snippets/timeline";

const hero = {
  title: "Snippets",
  subtitle: " Code Snippets",
  description:
    "Some of the code snippets that I came across in my explore or the internet !",
};

function ArticlePage() {
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
      <h2 className="text-xl font-bold">Browse </h2>
      <SnippetTimeLine />
    </div>
  );
}
export default ArticlePage;
