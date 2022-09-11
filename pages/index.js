import Meta from "@/components/common/meta";
import Blogs from "@/components/home/blogs";
import Hero from "@/components/home/hero";
import Snippets from "@/components/home/snippets";
import Video from "@/components/home/videos";
import MainContainer from "@/layouts/container";
import client from "@/utils/query/client";
import server from "@/utils/server";
import { gql } from "@apollo/client";

const HOME_QUERY = gql`
  query HomeQuery {
    posts(first: 3, orderBy: publishedAt_DESC) {
      id
      publishedAt
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

export default function Home({ posts, snippets, videos }) {
  return (
    <MainContainer>
      <Meta />
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
