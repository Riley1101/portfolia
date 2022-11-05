import {
  Box,
  IconButton,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsArrow90DegLeft } from "react-icons/bs";
function Hits({ items, source }) {
  const border = useColorModeValue("gray.100", "gray.600");
  const iconButton = useColorModeValue("gray.900", "gray.200");
  if (items.length > 0)
    return (
      <VStack alignItems={"start"} w="full">
        <Box w="100%">
          <Text textTransform={"uppercase"} fontSize="sm" pt="2" pb="1" as="p">
            {source.sourceId}
          </Text>
          <VStack alignItems={"flex-start"} spacing="1">
            {items.map((itm) => {
              let obj = {
                snippet: `/snippet/${itm.slug}`,
                blog: `/blog/${itm.slug}`,
                goto: `${itm.slug}`,
                bookmarks: `${itm.link}`,
              };
              let url = obj[source.sourceId];
              return (
                <Link href={url} key={itm.id}>
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
                    minH="50px"
                    gridTemplateColumns="auto 1fr "
                  >
                    <IconButton
                      transform="rotate(180deg)"
                      _hover={{
                        background: "transparent",
                      }}
                      aria-label="Search"
                      fontSize="16px"
                      background={"transparent"}
                      icon={<BsArrow90DegLeft color={iconButton} />}
                    />
                    <Text w="full" noOfLines={1} fontSize="md">
                      {itm.title}
                    </Text>
                  </Box>
                </Link>
              );
            })}
          </VStack>
        </Box>
      </VStack>
    );
}

export default Hits;
