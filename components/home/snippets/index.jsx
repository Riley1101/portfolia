import {
  Box,
  Heading,
  VStack,
  Text,
  IconButton,
  useColorModeValue,
  Button,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiTerminal } from "react-icons/fi";
import { HiOutlineCode } from "react-icons/hi";
const Snippets = ({ snippets }) => {
  let cardBg = useColorModeValue("blue.50", "gray.900");
  let iconColor = useColorModeValue("#fff", "gray.800");
  return (
    <Box p="4" alignItems={"flex-start"} my="8">
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Code Snippets
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          Some of the snippets I stumble along my journey
        </Text>
      </VStack>
      <Grid
        templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={[2, 7]}
        spacing={3}
        w="full"
        alignItems={"flex-start"}
      >
        {snippets.map((ele) => (
          <Link href={`/snippet/${ele.slug}`} key={ele.id}>
            <GridItem>
              <VStack
                borderRadius={"3em"}
                backgroundColor={cardBg}
                transition={"all 200ms ease"}
                _hover={{
                  borderRadius: "1.5em",
                }}
                alignItems={"flex-start"}
                cursor={"pointer"}
                w="full"
                spacing="0em"
              >
                <Box p="8" borderBottomRadius={"3em"}>
                  <IconButton
                    background={iconColor}
                    mb="2"
                    rounded={"1.3rem"}
                    aria-label="Code"
                    icon={<FiTerminal />}
                  />
                  <Text as="h2" fontSize={"xl"} fontWeight="bold">
                    {ele.title}
                  </Text>
                  <Text as="p" color={"gray.500"}>
                    {ele.description}
                  </Text>
                </Box>
              </VStack>
            </GridItem>
          </Link>
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
            rightIcon={<HiOutlineCode />}
            variant="outline"
          >
            More codes
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
export default Snippets;
