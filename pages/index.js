import Meta from "@/components/common/meta";
import MainContainer from "@/layouts/container";
import client from "@/utils/query/client";
import server from "@/utils/server";
import { gql } from "@apollo/client";
import dynamic from "next/dynamic";
const Hero = dynamic(() => import("@/components/home/hero"), {
  suspense: true,
});
const Blogs = dynamic(() => import("@/components/home/blogs"), {
  suspense: true,
});
const Snippets = dynamic(() => import("@/components/home/snippets"), {
  suspense: true,
});
const Video = dynamic(() => import("@/components/home/videos"), {
  suspense: true,
});
const HOME_QUERY = gql`
  query HomeQuery {
    posts(first: 3, orderBy: createdAt_DESC) {
      id
      createdAt
      slug
      title
      date
      content
      description
    }
    snippets: snippets(first: 6, orderBy: updatedAt_DESC) {
      id
      slug
      title
      description
    }
  }
`;

let defaultMeta = {
  title: "Arkar Kaung Myat — An Inspiring Developer, travelling in CS",
  description:
    "An inspiring developer who loves computer science, frontend technlogies,coding and designs.",
  url: "https://arkardev.space/",
  tags: ["Welcome", "Home"],
  image: "/static/general/meta.png",
};
export default function Home({ posts, snippets, videos }) {
  return (
    <MainContainer>
      <Meta meta={defaultMeta} />

      <Hero />
      <Blogs posts={posts} />
      <Snippets snippets={snippets} />
      <Video videos={videos} />
    </MainContainer>
  );
}
export async function getStaticProps() {
  const { data } = await client.query({
    query: HOME_QUERY,
  });
  let url = `${server}/api/playlist/PLJznl3g92X7P4T3S2lLW8Ws43KfjPCmYs`;
  let response = await fetch(url)
    .then((res) => res.json())
    .then((res) => res);

  return {
    props: {
      videos: response,
      ...data,
    },
  };
}
