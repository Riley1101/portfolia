export const revalidate = 60;
import Hero from "@/components/pages/hero";
import ArticleTimeLine from "@/components/pages/article/timeline";

const hero = {
  title: "Article",
  subtitle: "Published Articles",
  description:
    "Here is where you'll find a wealth of information on Next.js, React, JavaScript, and web development. Whether you're just getting started in web development or looking to deepen your knowledge and skills, this page has something for you. ",
};

function ArticlePage() {
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
      <ArticleTimeLine />
    </div>
  );
}
export default ArticlePage;
