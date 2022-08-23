import {
  Grid,
  Box,
  Heading,
  GridItem,
  VStack,
  Button,
  Text,
} from "@chakra-ui/react";
import VideoCard from "@/components/common/video";
import { RiVideoLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import server from "@/utils/server";
const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [limit, setLimit] = useState(4);

  useEffect(() => {
    fetch(`${server}/api/playlist?limit=${limit}`)
      .then((res) => res.json())
      .then((res) => setVideos(res));
  }, [limit]);
  let loadMore = () => {
    setLimit(limit + 2);
  };
  return (
    <Box my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Videos.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Record, talk and have fun.
        </Text>
      </VStack>
      <Grid templateColumns={["1fr", "repeat(6, 1fr)"]} gap={4}>
        {videos?.items?.map((vid) => {
          return (
            <GridItem
              key={vid.id}
              colSpan={[1, 3]}
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
              <a
                href={`https://www.youtube.com/playlist?list=${vid.id}`}
                target={"_blank"}
                rel="noreferrer"
              >
                <VideoCard video={vid} />
              </a>
            </GridItem>
          );
        })}
      </Grid>

      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Button
          onClick={() => loadMore()}
          transition={"all 250ms ease"}
          rounded={"1em"}
          _hover={{
            rounded: ".5em",
          }}
          textAlign={"right"}
          rightIcon={<RiVideoLine />}
          variant="outline"
        >
          Load More
        </Button>
      </Box>
    </Box>
  );
};

export default Videos;
