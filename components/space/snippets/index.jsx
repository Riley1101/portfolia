import BlogCard from "@/components/common/card";
import SnippetCard from "@/components/common/snippetCard";
import useSpaceQuery from "@/components/space/query";
import { gql } from "@apollo/client";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { HiOutlineCode } from "react-icons/hi";
const Snippets = () => {
  const SNIPPET_QUERY = gql`
    query Snippet_Query($limit: Int) {
      snippets(last: $limit) {
        id
        description
        categories {
          id
          name
        }
        publishedAt
        slug
        title
      }
    }
  `;
  const { data, loading, loadMore } = useSpaceQuery(SNIPPET_QUERY, 5);
  return (
    <Box my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Snippets.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Here and there some more codes.
        </Text>
      </VStack>
      <Grid
        templateColumns={["1fr", "repeat(6, 1fr)"]}
        gap={4}
        gridAutoFlow="dense"
      >
        {data?.snippets.map((post, index) => (
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
              <SnippetCard data={post} />
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
          rightIcon={<HiOutlineCode />}
          variant="outline"
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Snippets;
