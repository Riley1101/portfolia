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
      <meta charSet="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Meta meta={defaultMeta} />
      
    </head>
  );
}
