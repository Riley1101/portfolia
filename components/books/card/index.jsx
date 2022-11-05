import { Progress, Box, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";

const BookCard = ({ data }) => {
  let cardBg = useColorModeValue("blue.50", "gray.900");
  return (
    <>
      <Box
        display={"flex"}
        transition={"all 250ms ease"}
        _hover={{
          borderRadius: "1em",
        }}
        borderRadius={"1.6em"}
        p="4"
        bg={cardBg}
        gap="1em"
        cursor="pointer"
      >
        <Box
          w={"100px"}
          minH={["110px", "130px"]}
          position={"relative"}
          overflow="hidden"
          rounded={"lg"}
        >
          <Image
            src={data.image}
            objectFit="cover"
            alt="the art of cs"
            layout="fill"
          />
        </Box>
        <Box flexBasis="75%" display={"flex"} flexDirection={"column"}>
          {data.progress !== 100 && data.progress !== 0 && (
            <Progress value={data.progress} mb="4px" rounded={"lg"} h="1px" />
          )}
          <Text my="auto" as="h3" fontSize={["sm", "lg"]} fontWeight="bold">
            {data.title}
          </Text>
          <Text color={"gray.500"} mb="auto" as="p" fontSize={[".6em", "sm"]}>
            {data.description}
          </Text>
        </Box>
      </Box>
    </>
  );
};
export default BookCard;
