import Meta from "@/components/common/meta";

export default async function Head() {
  let defaultMeta = {
    title: "Arkar Kaung Myat — An Inspiring Developer, travelling in CS",
    description:
      "An inspiring developer who loves computer science, frontend technlogies,coding and designs.",
    url: "https://arkar.space/",
    tags: ["Welcome", "Home"],
    mainImage: "/images/arkar.png",
  };
  return (
    <>
      <Meta meta={defaultMeta} />
    </>
  );
}
