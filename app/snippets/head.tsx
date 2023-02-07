import Meta from "@/components/common/meta";

export default async function Head() {
  const meta = {
    title: "Snippets | Arkar Kaung Myat ",
    description:
      "A list of code snippets that I have been using in my projects. Some of them may useful for you, some of them may not.",
    url: "https://arkardev.space/",
    tags: ["Snippets", "Code"],
    mainImage: "/images/snippets.png",
  };
  return (
    <>
      <Meta meta={meta} />
    </>
  );
}
