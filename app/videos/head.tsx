import Meta from "@/components/common/meta";

export default async function Head() {
  const meta = {
    title: "Videos | Arkar Kaung Myat ",
    description:
      "Videos and tutorials I did on youtube. All about web development, programming and design",
    url: "https://arkardev.space/videos",
    tags: ["Videos", "Tuts"],
    mainImage: "/images/videos.png",
  };
  return (
    <head>
      <Meta meta={meta} />
    </head>
  );
}
