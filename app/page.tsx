import Hero from "@/components/pages/hero";
import LatestPostHome from "@/components/pages/home/latest-blogs";
const hero = {
  title: "Home",
  subtitle: "Arkar Kaung Myat",
  description:
    "I’m an inspiring full-stack engineer. I do Web development as a developer, and love teaching and sharing about technology, computer science and design.",
};

export default async function Home() {
  return (
    <div>
      <Hero
        title={hero.title}
        description={hero.description}
        subtitle={hero.subtitle}
      ></Hero>
      <div className="flex flex-col gap-4">
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
      <LatestPostHome />
    </div>
  );
}
