import Meta from "@/components/common/meta";
import Blogs from "@/components/home/blogs";
import Hero from "@/components/home/hero";
import Snippets from "@/components/home/snippets";
import Video from "@/components/home/videos";
import MainContainer from "@/layouts/container";
import client from "@/utils/query/client";
import server from "@/utils/server";
import { gql } from "@apollo/client";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  Text,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import { useEffect } from "react";
const HOME_QUERY = gql`
  query MyQuery {
    posts(last: 3) {
      id
      publishedAt
      slug
      title
      date
      content
      description
    }
    snippets: snippets(last: 6) {
      id
      slug
      title
      description
    }
  }
`;

export default function Home({ posts, snippets, videos }) {
  const {
    isOpen: drawer,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  useEffect(() => {
    let first = localStorage.getItem("firstVisitCheck");
    if (!first) {
      setTimeout(() => {
        onDrawerOpen();
      }, 5000);
      localStorage.setItem("firstVisitCheck", true);
    }
  }, []);
  const shadow = useColorModeValue("sm", "none");
  return (
    <MainContainer>
      <Drawer placement={"top"} onClose={onDrawerClose} isOpen={drawer}>
        <DrawerContent shadow={shadow}>
          <DrawerBody>
            <Text textAlign={"center"} fontSize="xs">
              Thank you for visiting.Website is still in beta and some of the
              pages are still developing.
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
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
