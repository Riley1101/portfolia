export const revalidate = 60;
import Hero from "@/components/pages/hero";
import ArticleTimeLine from "@/components/pages/article/timeline";

const hero = {
  title: "Article",
  subtitle: "Published Articles",
  description:
    "Here's a collection of articles I've written for the Gatsby Blog and various other online publications, including; Contentful, Storybook, Netlify, Smashing Magazine and CSS Tricks.",
};

function ArticlePage() {
  return (
    <div>
      {/* <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      /> */}

      <ArticleTimeLine />
    </div>
  );
}
export default ArticlePage;
