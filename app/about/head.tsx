import Meta from "@/components/common/meta";

export default async function Head() {
  let defaultMeta = {
    title: "About | Arkar Kaung Myat",
    description:
      "An inspiring developer who loves computer science, frontend technlogies,coding and designs.",
    url: "https://arkardev.space/",
    mainImage: "/images/profile.jpeg",
    tags: ["Welcome", "Home"],
  };
  return (
    <>
      <Meta meta={defaultMeta} />
    </>
  );
}
