import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  HStack,
  Stack,
  Text,
  Tooltip,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
let style = `
.box:before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(-45deg, #0974f1 0%, #9fccfa 100% );
    transform: translate3d(0px, 20px, 0) scale(0.95);
    filter: blur(20px);
    opacity: var(0.7);
    transition: opacity 0.3s;
    border-radius: inherit;
}

.box::after {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: inherit;
    border-radius: inherit;
}
        `;
const Hero = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const github = useColorModeValue("black", "white");
  const twitter = useColorModeValue("blue.500", "blue.500");
  const linkedIn = useColorModeValue("cyan.800", "cyan.500");
  const description = useColorModeValue("gray.800", "gray.400");
  return (
    <Stack
      direction={["column-reverse", "row"]}
      spacing="2"
      p={4}
      my={[8, 12]}
      alignItems={["center", "flex-start"]}
      justifyContent={["center", "space-between"]}
      gap={[8, 0]}
    >
      <VStack w={["100%", "60%"]} alignItems="flex-start">
        <Heading
          w="full"
          fontSize={["xl", "5xl"]}
          mb="6"
          textAlign={["center", "left"]}
        >
          Hi, I’m <br></br>
          <Text fontSize={["2xl", "6xl"]} as="u" fontWeight="800">
            Arkar Kaung Myat.
          </Text>
        </Heading>
        <Text
          color={description}
          textAlign={["center", "left"]}
          fontSize={"xl"}
          pb="2"
        >
          I’m an inspiring full-stack engineer. I do{" "}
          <Text cursor={"pointer"} as="u" color={twitter}>
            Web development
          </Text>{" "}
          as a developer, and love teaching and sharing about technology,
          computer science and design.
        </Text>
        <HStack>
          <Button
            as={"a"}
            href="https://arkardev.space/github"
            size={"md"}
            target="_blank"
            rightIcon={<ExternalLinkIcon />}
            variant="outline"
            border={"none"}
            color={github}
            _hover={{
              textDecoration: "underline",
              background: bg,
            }}
          >
            Github
          </Button>

          <Button
            as={"a"}
            href="https://arkardev.space/twitter"
            rightIcon={<ExternalLinkIcon />}
            variant="outline"
            border={"none"}
            color={twitter}
            _hover={{
              textDecoration: "underline",
              background: bg,
            }}
          >
            Twitter
          </Button>

          <Button
            as="a"
            href="https://arkardev.space/linkedin"
            rightIcon={<ExternalLinkIcon />}
            variant="outline"
            border={"none"}
            color={linkedIn}
            _hover={{
              textDecoration: "underline",
              background: bg,
            }}
          >
            LinkedIn
          </Button>
        </HStack>
      </VStack>
      <Tooltip
        hasArrow
        placement="top"
        label="Digital Art by amazing artist Yee Chun Kyaw"
        aria-label="Digital Art by amazing artist Yee Chun Kyaw"
      >
        <Box
          sx={style}
          transition={"all 250ms ease"}
          _hover={{
            borderRadius: "20%",
            transform: "rotate(0deg)",
          }}
          transform="rotate(5deg)"
          border={"1px"}
          borderColor={useColorModeValue("gray.100", "gray.800")}
          borderRadius={"35%"}
          background={useColorModeValue("transparent", "gray.900")}
          w={["250px", "350px"]}
          h={["250px", "350px"]}
          position="relative"
          overflow={"hidden"}
          cursor="pointer"
        >
          <Image
            layout="fill"
            objectFit="cover"
            alt="My Photo"
            src="/static/general/avatar.png"
          />
        </Box>
      </Tooltip>
    </Stack>
  );
};
export default Hero;
