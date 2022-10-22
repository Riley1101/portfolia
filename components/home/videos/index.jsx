import {
  AspectRatio,
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { FiPlayCircle } from "react-icons/fi";
const Videos = ({ videos }) => {
  let cardBg = useColorModeValue("blue.50", "gray.900");

  return (
    <Box p="4" my="8" alignItems={"flex-start"}>
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          My Latest Videos
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          I love creating contents about web development.
        </Text>
      </VStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={[4, 7]}
        spacing={3}
        w="full"
        alignItems={"flex-start"}
      >
        {videos?.items?.slice(0, 3).map((ele) => (
          <a
            href={`https://www.youtube.com/watch?v=${ele?.snippet?.resourceId?.videoId}`}
            key={ele.id}
            target="_blank"
            rel="noreferrer"
          >
            <GridItem key={ele}>
              <VStack
                backgroundColor={cardBg}
                borderRadius={"3em"}
                transition={"all 200ms ease"}
                _hover={{
                  borderBottomRadius: "1.5em",
                }}
                alignItems={"flex-start"}
                cursor={"pointer"}
                w="full"
                spacing="0em"
              >
                <Box position={"relative"} w="full">
                  <AspectRatio
                    transition="all 250ms ease"
                    position={"relative"}
                    ratio={16 / 9}
                    maxH={["200px"]}
                    borderRadius={"2em"}
                    overflow="hidden"
                  >
                    <Image
                      src={ele.snippet.thumbnails.medium.url}
                      alt="yt thubmnail"
                      layout="fill"
                      objectFit="cover"
                    ></Image>
                  </AspectRatio>
                  <Box
                    w="full"
                    top="0"
                    transition="all 250ms ease"
                    borderRadius={"2em"}
                    left="0"
                    h="full"
                    _hover={{
                      backgroundColor: "rgba(0,0,0,0.1)",
                      backdropFilter: "blur(0px)",
                    }}
                    backgroundColor="rgba(0,0,0,0.2)"
                    backdropFilter={"blur(5px)"}
                    position={"absolute"}
                    display="grid"
                    placeItems={"center"}
                  ></Box>
                </Box>
                <Box p="8" pt="6" borderBottomRadius={"3em"} overflow="hidden">
                  <Text as="h2" fontSize={"xl"} fontWeight="bold">
                    {ele?.snippet?.title}
                  </Text>
                  <Text as="p" color={"gray.500"} noOfLines={3}>
                    {ele?.snippet?.description.slice(0, 300)}
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </a>
        ))}
      </Grid>
      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Link href="/space">
          <Button
            transition={"all 250ms ease"}
            rounded={"1em"}
            _hover={{
              rounded: ".5em",
            }}
            textAlign={"right"}
            rightIcon={<FiPlayCircle />}
            variant="outline"
          >
            More videos
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Videos;
