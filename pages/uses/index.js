import Meta from "@/components/common/meta";
import MainContainer from "@/layouts/container";
import {
  Box,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
export default function About() {
  let cardBg = useColorModeValue("blue.50", "gray.900");
  const title = useColorModeValue("gray.700", "gray.200");

  let codingTools = [
    {
      id: 1,
      title: "Visual Studio Code",
      description:
        "Code editor for my everyday frontend, backend, code and code. I love using with vim emulation extension.",
      icon: "/static/uses/vscode.png",
      link: "https://code.visualstudio.com/",
    },
    {
      id: 2,
      title: "Google Chrome",
      description: "Browser for my daily stackover searches.",
      icon: "/static/uses/chrome.svg",
      link: "https://www.google.com/chrome/",
    },
    {
      id: 3,
      title: "Fluent terminal",
      description: "Super performance terminal with beautiful ui.",
      icon: "/static/uses/fluent.png",
      link: "https://github.com/felixse/FluentTerminal",
    },
    {
      id: 4,
      title: "Window Subsystem for Linux ",
      description:
        "WSL2 with ubuntu on my window 11 because I play games sometimes.",
      icon: "/static/uses/ubuntu.png",
      link: "https://docs.microsoft.com/en-us/windows/wsl/install",
    },
  ];
  let secondaryTools = [
    {
      id: 1,
      title: "Figma",
      description:
        "Code editor for my everyday frontend, backend, code and code. I love using with vim emulation extension.",
      icon: "/static/uses/figma.svg",
      link: "https://www.figma.com/",
    },
    {
      id: 2,
      title: "Notion",
      description: "Browser for my daily stackover searches.",
      icon: "/static/uses/notion.png",
      link: "https://www.notion.so/",
    },
    {
      id: 3,
      title: "Neovim",
      description: "Super performance terminal with beautiful ui.",
      icon: "/static/uses/neovim.png",
      link: "https://neovim.io/",
    },
    {
      id: 4,
      title: "Kdenlive",
      description:
        "WSL2 with ubuntu on my window 11 because I play games sometimes.",
      icon: "/static/uses/kdenlive.png",
      link: "https://kdenlive.org/en/",
    },
    {
      id: 5,
      title: "Okular",
      description:
        "WSL2 with ubuntu on my window 11 because I play games sometimes.",
      icon: "/static/uses/okular.png",
      link: "https://okular.kde.org/",
    },

    {
      id: 7,
      title: "Pycharm",
      description:
        "WSL2 with ubuntu on my window 11 because I play games sometimes.",
      icon: "/static/uses/pycharm.png",
      link: "https://www.jetbrains.com/pycharm/",
    },
  ];

  let meta = {
    title: "Uses — An Inspiring Developer, travelling in CS",
    description:
      "Some of the tools for my daily coding, development and productivity.",
    url: "https://arkardev.space/uses",
    image: "/static/general/meta.png",
  };
  return (
    <MainContainer>
      <Meta meta={meta} />
      <VStack alignItems={"flex-start"} spacing=".2em" mt="8" mb="0" p="4">
        <Heading as="h2" fontSize={["2xl", "4xl"]}>
          Software development tools .
        </Heading>
        <Text fontSize={["xl", "3xl"]} fontWeight="bold" color={"gray.500"}>
          These are some of the software tools that I use frequently.
        </Text>
      </VStack>
      <VStack alignItems={"flex-start"} spacing=".2em" mb="4" p="4">
        <Text mb="4" fontSize={["xl", "3xl"]} fontWeight="bold" color={title}>
          Primary weapons
        </Text>
        <Box
          display={"flex"}
          flexWrap="wrap"
          gap="4"
          w="full"
          alignItems={"flex-start"}
        >
          {codingTools.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              isExternal
              _hover={{
                textDecoration: "none",
              }}
            >
              <Stack
                direction={["column", "row"]}
                transition={"all 250ms ease"}
                _hover={{
                  borderRadius: "1.5em",
                }}
                gap={["4", "8"]}
                alignItems={"center"}
                bg={cardBg}
                cursor={"pointer"}
                w="full"
                p="8"
                px="9"
                borderRadius={"3em"}
                spacing=".3em"
              >
                <Image
                  width={60}
                  height={60}
                  objectFit="contain"
                  src={item.icon}
                  alt="vscode"
                />

                <VStack alignItems={"flex-start"}>
                  <Text fontSize="xl" fontWeight="semibold">
                    {item.title}
                  </Text>

                  <Text>{item.description}</Text>
                </VStack>
              </Stack>
            </Link>
          ))}
        </Box>
      </VStack>
      <VStack
        alignItems={["center", "flex-start"]}
        spacing=".2em"
        mb="24"
        p="4"
      >
        <Text
          w="full"
          mb="4"
          fontSize={["xl", "3xl"]}
          fontWeight="bold"
          color={title}
        >
          Secondary weapons
        </Text>
        <Box
          display={"flex"}
          flexWrap="wrap"
          w="full"
          justifyContent={["center", "flex-start"]}
          alignItems={["center", "center"]}
          gap="4"
        >
          {secondaryTools.map((item) => (
            <Link href={item.link} isExternal key={item.id}>
              <Box
                flexGrow={[1, 0]}
                height={"100px"}
                minW="100px"
                w={["auto", "100px"]}
                display="grid"
                placeItems={"center"}
                transition={"all 250ms ease"}
                _hover={{
                  borderRadius: "1.5em",
                }}
                alignItems={"center"}
                bg={cardBg}
                cursor={"pointer"}
                borderRadius={"2.3em"}
              >
                <Image
                  width={60}
                  height={60}
                  objectFit="contain"
                  src={item.icon}
                  alt="vscode"
                />
              </Box>
            </Link>
          ))}
        </Box>
      </VStack>
    </MainContainer>
  );
}
