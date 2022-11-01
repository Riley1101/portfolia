import Head from "next/head";

let defaultMeta = {
  title: "Arkar Kaung Myat — An Inspiring Developer, travelling in CS",
  description:
    "An inspiring developer who loves computer science, frontend technlogies,coding and designs.",
  url: "https://arkardev.space/",
  image: "/static/general/meta.png",
};
const Meta = ({ meta = defaultMeta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="title" content={meta.title} />
      <meta name="description" content={meta.description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={meta.url} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta
        property="og:image"
        content={`https://arkardev.space/api/og?title=${meta.title}&description=${meta.description}`}
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={meta.url} />
      <meta property="twitter:title" content={meta.title} />
      <meta property="twitter:description" content={meta.description} />
      <meta
        property="twitter:image"
        content={`https://arkardev.space/api/og?title=${meta.title}&description=${meta.description}`}
      ></meta>
    </Head>
  );
};
export default Meta;
