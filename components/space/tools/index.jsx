import {
  Grid,
  Box,
  Heading,
  GridItem,
  VStack,
  Button,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import BookmarkCard from "@/components/common/bookmarkCard";
import { HiOutlineCode } from "react-icons/hi";
import { gql } from "@apollo/client";
import useSpaceQuery from "@/components/space/query";
import PlaceHolderGrid from "@/components/common/placeholder";
const Tools = () => {
  const TOOL_QUERY = gql`
    query TOOL_QUERY($limit: Int) {
      bookmarks(last: $limit) {
        id
        categories {
          id
          name
        }
        description
        createdAt
        title
        link
      }
    }
  `;
  const { data, loading, loadMore } = useSpaceQuery(TOOL_QUERY, 5);
  if (loading) return <PlaceHolderGrid />;
  return (
    <Box my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Tools and Bookmarks.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Somethings of the things I found on the internet.
        </Text>
      </VStack>
      <Grid
        templateColumns={["1fr", "repeat(6, 1fr)"]}
        gap={4}
        gridAutoFlow="dense"
      >
        {data?.bookmarks.map((post, index) => (
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
              <BookmarkCard data={post} />
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

export default Tools;
