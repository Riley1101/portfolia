import Hero from "@/components/pages/hero";
import React from "react";
const hero = {
  title: "About",
  subtitle: "More about Me",
  description:
    "I’m an inspiring full-stack engineer. I do Web development as a developer, and love teaching and sharing about technology, computer science and design.",
};

function AboutPage() {
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
export default AboutPage;
