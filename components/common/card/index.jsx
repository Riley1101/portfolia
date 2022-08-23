import {
  Grid,
  Box,
  GridItem,
  Text,
  HStack,
  Badge,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
const Card = ({ data }) => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  return (
    <Link href={`/blog/${data.slug}`}>
      <Flex
        w="full"
        backgroundColor={bg}
        h="full"
        p={[6, 10]}
        justifyContent="flex-start"
      >
        <VStack alignItems={"flex-start"} justifyContent="flex-end">
          <HStack flexWrap={"wrap"} gap="1">
            {data?.categories.map((cate) => (
              <Badge colorScheme="green" key={cate.id}>
                {cate.name}
              </Badge>
            ))}
          </HStack>

          <Text as="h2" fontSize={"2xl"} fontWeight="bold">
            {data?.title}
          </Text>
          <Text as="p">{data?.description}</Text>
        </VStack>
      </Flex>
    </Link>
  );
};
export default Card;
