import Meta from "@/components/common/meta";

export default async function Head() {
  let defaultMeta = {
    title: "Arkar Kaung Myat — An Inspiring Developer, travelling in CS",
    description:
      "An inspiring developer who loves computer science, frontend technlogies,coding and designs.",
    url: "https://arkardev.space/",
    tags: ["Welcome", "Home"],
  };
  return (
    <head>
      <Meta meta={defaultMeta} />
    </head>
  );
}