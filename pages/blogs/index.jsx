import MainContainer from "@/layouts/container";
import Meta from "@/components/common/meta";
import client from "@/utils/query/client";
import useSearchByTitle from "@/hooks/useSearchByTitle";
import {
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Input,
} from "@chakra-ui/react";
import { gql } from "@apollo/client";
import BlogCard from "@/components/common/card";
let meta = {
  title: "Blogs | Arkar Kaung Myat — An Inspiring Developer, travelling in CS",
  description:
    "An inspiring developer who loves computer science, frontend technlogies,coding and designs.",
  url: "https://arkardev.space/",
  image: "/static/general/meta.png",
};

const Blogs = ({ data }) => {
  const { keyword, setKeyword, data: posts } = useSearchByTitle(data.posts);
  let structure = (index) => (index <= 1 ? 3 : 2);
  return (
    <MainContainer>
      <Meta meta={meta}></Meta>

      <Box my="8" px="4">
        <VStack alignItems={"flex-start"} spacing=".5em" mb="6">
          <Heading as="h2" fontSize={["2xl", "4xl"]}>
            Blogs.
          </Heading>
          <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
            A little bit of here and there.
          </Text>
          <Input
            value={keyword}
            transition="all 250ms ease"
            borderRadius={"1.3em"}
            _active={{
              borderRadius: ".5em",
            }}
            _hover={{
              borderRadius: ".5em",
            }}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Search"
          />
        </VStack>
        <Grid
          templateColumns={["1fr", "repeat(6, 1fr)"]}
          gap={4}
          gridAutoFlow="dense"
          mb="12"
        >
          {posts.map((post, index) => (
            <GridItem
              key={index}
              colSpan={[1, structure(index)]}
              w="100%"
              minH={["auto", "320px"]}
              overflow="hidden"
              borderRadius={"3em"}
              cursor="pointer"
              transition={"all 250ms ease"}
              _hover={{
                borderRadius: "1.5em",
              }}
            >
              <BlogCard data={post} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </MainContainer>
  );
};
export default Blogs;
export async function getStaticProps() {
  const ALL_POSTS = gql`
    query GET_ALL_POSTS {
      posts(orderBy: publishedAt_DESC) {
        id
        publishedAt
        slug
        title
        date
        description
        tags
        categories {
          id
          name
        }
      }
    }
  `;
  const { data } = await client.query({
    query: ALL_POSTS,
  });
  return {
    props: {
      data,
    },
  };
}
