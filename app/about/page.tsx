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
      <div className="flex flex-col gap-4 mb-4">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus
          facere, magni praesentium in eaque minima quis fugiat deleniti rem
          autem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officiis
          reiciendis sapiente culpa quod, rem quis porro tempora consequatur
          earum.
        </p>
        <p>
          I now work at
          <a
            href="https://otterdev.io"
            rel="noreferrer"
            target={"_blank"}
            className="pl-4 cursor-pointer text-theme-primary"
          >
            Otterdev.io
          </a>
        </p>
      </div>
    </div>
  );
}
export default AboutPage;
