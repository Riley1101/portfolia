import {
  Box,
  Heading,
  VStack,
  Text,
  HStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";

import Link from "next/link";
import { FaRegNewspaper } from "react-icons/fa";
import readingTime from "reading-time";
import dateFormat from "dateformat";
const Blogs = ({ posts }) => {
  let cardBg = useColorModeValue("blue.50", "gray.900");
  return (
    <Box p="4" my={["1.5em"]} alignItems={"flex-start"}>
      <VStack alignItems={"flex-start"} spacing=".2em" my="8">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          My Articles.
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Web development, with a focus on the React ecosystem.
        </Text>
      </VStack>
      <VStack spacing={7} w="full" alignItems={"flex-start"}>
        {posts.map((ele) => (
          <Link href={`/blog/${ele.slug}`} key={ele.id}>
            <VStack
              transition={"all 250ms ease"}
              _hover={{
                borderRadius: "1.5em",
              }}
              alignItems={"flex-start"}
              bg={cardBg}
              cursor={"pointer"}
              w="full"
              p="8"
              px="9"
              borderRadius={"3em"}
              spacing=".3em"
            >
              <Text fontSize="xl" fontWeight="semibold">
                {ele.title}
              </Text>
              <HStack fontSize={"sm"} color="gray.500">
                <Text>{readingTime(ele.content).text}</Text>
                <Text>-</Text>
                <Text>{dateFormat(ele.publishedAt, "mediumDate")}</Text>
              </HStack>
              <Text>{ele.description}</Text>
            </VStack>
          </Link>
        ))}
      </VStack>
      <Box w="full" mt="7" display={"flex"} justifyContent="flex-end">
        <Link href={"/space"}>
          <Button
            transition={"all 250ms ease"}
            rounded={"1em"}
            _hover={{
              rounded: ".5em",
            }}
            textAlign={"right"}
            rightIcon={<FaRegNewspaper />}
            variant="outline"
          >
            More articles
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Blogs;
