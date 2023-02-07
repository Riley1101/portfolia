import Meta from "@/components/common/meta";

export default async function Head() {
  const meta = {
    title: "Articles | Arkar Kaung Myat ",
    description:
      "Here is a list of thoughts and ideas that I have been thinking about. I hope you will enjoy reading them.",
    url: "https://arkardev.space/",
    tags: ["Blogs", "Thoughts"],
    mainImage: "/images/articles.png",
  };
  return (
    <>
      <Meta meta={meta} />
    </>
  );
}
