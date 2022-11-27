import Hero from "@/components/pages/hero";

const hero = {
  title: "Snippets",
  subtitle: " Code Snippets",
  description:
    "Here's a collection of articles I've written for the Gatsby Blog and various other online publications, including; Contentful, Storybook, Netlify, Smashing Magazine and CSS Tricks.",
};

function ArticlePage() {
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      />
    </div>
  );
}
export default ArticlePage;
