import {
  Box,
  Heading,
  Stack,
  Text,
  HStack,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
const HeroAlt = () => {
  const github = useColorModeValue("black", "black");
  const twitter = useColorModeValue("blue.500", "blue.500");
  const linkedIn = useColorModeValue("cyan.800", "cyan.800");

  return (
    <Stack p="4" direction={["column", "row"]} alignItems="center">
      <Box
        background="url('/static/general/background.jpg')"
        px={["8", "14"]}
        py={["8", "14"]}
        rounded={"3em"}
        display="flex"
        flexDir={"column"}
        justifyContent="flex-end"
        gap="4"
        backgroundSize={"cover"}
      >
        <Heading fontSize={["3xl", "7xl"]} color="gray.800">
          Arkar Kaung Myat
        </Heading>
        <Text fontSize={["18", "22px"]} fontWeight="bold" color="gray.700">
          An inspiring frontend developer who loves problem solving and design
        </Text>
        <HStack>
          <Button
            size={"md"}
            rightIcon={<ExternalLinkIcon />}
            variant="outline"
            border={"none"}
            color={github}
            _hover={{
              textDecoration: "underline",
            }}
          >
            Github
          </Button>
          <Button
            rightIcon={<ExternalLinkIcon />}
            variant="outline"
            border={"none"}
            color={twitter}
            _hover={{
              textDecoration: "underline",
            }}
          >
            Twitter
          </Button>
          <Button
            rightIcon={<ExternalLinkIcon />}
            variant="outline"
            border={"none"}
            color={linkedIn}
            _hover={{
              textDecoration: "underline",
            }}
          >
            LinkedIn
          </Button>
        </HStack>
      </Box>
      <Box
        transition={"all 250ms ease"}
        _hover={{
          borderRadius: "2em",
        }}
        backgroundColor="gray.200"
        borderRadius={"4em"}
        w={["200px", "300px"]}
        h={["200px", "300px"]}
        position="relative"
        overflow={"hidden"}
        cursor="pointer"
      >
        <Image layout="fill" alt="My Photo" src="/static/general/profile.jpg" />
      </Box>
    </Stack>
  );
};

export default HeroAlt;
