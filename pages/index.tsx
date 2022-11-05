import Meta from "@/components/common/meta";
import MainContainer from "@/layouts/container";
import client from "@/utils/query/client";
import server from "@/utils/server";
import { gql } from "@apollo/client";
import Blogs from "@/components/home/blogs";
import Hero from "@/components/home/hero";
import Video from "@/components/home/videos";
import Snippets from "@/components/home/snippets";
import type { Post, Snippet, PageQuery, VideoAPIType } from "@/types/index";
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
interface HomeProps {
  posts: Post[];
  snippets: Snippet[];
  videos: VideoAPIType;
}
export default function Home(props: HomeProps) {
  const { posts, snippets, videos } = props;
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
  const {
    data,
  }: PageQuery<{
    posts: Post[];
    snippets: Snippet[];
  }> = await client.query({
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
