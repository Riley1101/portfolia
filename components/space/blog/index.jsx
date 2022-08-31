import BlogCard from "@/components/common/card";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  VStack,
  Skeleton,
} from "@chakra-ui/react";
import { FaRegNewspaper } from "react-icons/fa";
import { gql } from "@apollo/client";
import useSpaceQuery from "@/components/space/query";
const Blogs = () => {
  const BLOG_QUERY = gql`
    query BlogQuery($limit: Int!) {
      posts(first: $limit, orderBy: publishedAt_DESC) {
        id
        slug
        categories {
          id
          name
        }
        title
        description
      }
    }
  `;
  const { data, loading, loadMore } = useSpaceQuery(BLOG_QUERY, 5);
  return (
    <Box my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Blogs.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          A little bit of here and there.
        </Text>
      </VStack>
      <Grid
        templateColumns={["1fr", "repeat(6, 1fr)"]}
        gap={4}
        gridAutoFlow="dense"
      >
        {data?.posts.map((post, index) => (
          <GridItem
            key={index}
            colSpan={[1, 2]}
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
            <Skeleton isLoaded={!loading} w="full" h="full">
              <BlogCard data={post} />
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Button
          isLoading={loading}
          onClick={() => loadMore()}
          transition={"all 250ms ease"}
          rounded={"1em"}
          _hover={{
            rounded: ".5em",
          }}
          textAlign={"right"}
          rightIcon={<FaRegNewspaper />}
          variant="outline"
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Blogs;
