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
        <p>Hello 👋</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias,
          similique, dicta libero tempore voluptatem animi fugit dolorem
          voluptates laboriosam illo sint cum est eveniet eius assumenda
          sapiente, quisquam nihil adipisci?
        </p>

        <p>I now work at ...</p>
      </div>
      <LatestPostHome />
    </div>
  );
}
