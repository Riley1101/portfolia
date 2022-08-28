import {
  Box,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrow90DegLeft } from "react-icons/bs";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
function Suggestion() {
  let border = useColorModeValue("gray.100", "gray.600");
  let iconButton = useColorModeValue("gray.900", "gray.200");
  let nav = [
    {
      name: "Space",
      slug: "space",
      icon: <BsArrow90DegLeft color={iconButton} />,
    },
    {
      name: "Uses",
      slug: "uses",
      icon: <BsArrow90DegLeft color={iconButton} />,
    },
    {
      name: "Books",
      icon: <BsArrow90DegLeft color={iconButton} />,
      slug: "books",
    },
    {
      name: "About",
      slug: "about",
      icon: <BsArrow90DegLeft color={iconButton} />,
    },
  ];
  const social = [
    {
      name: "Github",
      slug: "github",
      icon: <FaGithub color={iconButton} />,
    },
    {
      name: "Facebook",
      icon: <FaFacebook color={iconButton} />,
      slug: "facebook",
    },
    {
      name: "Twitter",
      slug: "twitter",
      icon: <FaTwitter color={iconButton} />,
    },
  ];
  return (
    <>
      <VStack alignItems={"start"} w="full">
        <Box w="100%">
          <Text textTransform={"uppercase"} fontSize="sm" pt="2" pb="2" as="p">
            GOTO
          </Text>
          <VStack alignItems={"flex-start"} spacing="1">
            {nav.map((na) => (
              <Link href={`/${na.slug}`} key={na.slug}>
                <Box
                  cursor={"pointer"}
                  w="full"
                  border={"1px"}
                  borderColor={border}
                  display={"grid"}
                  px="2"
                  transition={"all 250ms ease"}
                  _hover={{
                    background: "blue.500",
                    color: "white",
                    borderRadius: ".3em",
                  }}
                  alignItems="center"
                  borderRadius={"1em"}
                  gap="2"
                  minH="30px"
                  gridTemplateColumns="auto 1fr "
                >
                  <IconButton
                    transform={"rotate(180deg)"}
                    _hover={{
                      background: "transparent",
                    }}
                    aria-label="Search"
                    fontSize="16px"
                    background={"transparent"}
                    icon={na.icon}
                  />
                  <Text w="full" noOfLines={1} fontSize="md">
                    {na.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </VStack>
        </Box>
        <Box w="100%">
          <Text textTransform={"uppercase"} fontSize="sm" pt="2" pb="2" as="p">
            Connect me
          </Text>
          <VStack alignItems={"flex-start"} spacing="1">
            {social.map((na) => (
              <Link href={`/${na.slug}`} key={na.slug}>
                <Box
                  cursor={"pointer"}
                  w="full"
                  border={"1px"}
                  borderColor={border}
                  display={"grid"}
                  px="2"
                  transition={"all 250ms ease"}
                  _hover={{
                    background: "blue.500",
                    color: "white",
                    borderRadius: ".3em",
                  }}
                  alignItems="center"
                  borderRadius={"1em"}
                  gap="2"
                  minH="30px"
                  gridTemplateColumns="auto 1fr "
                >
                  <IconButton
                    _hover={{}}
                    aria-label="Search"
                    fontSize="16px"
                    background={"transparent"}
                    icon={na.icon}
                  />
                  <Text w="full" noOfLines={1} fontSize="md">
                    {na.name}
                  </Text>
                </Box>
              </Link>
            ))}
          </VStack>
        </Box>
      </VStack>
    </>
  );
}

export default Suggestion;
