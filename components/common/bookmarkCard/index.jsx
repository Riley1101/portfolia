import {
  Badge,
  Flex,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
const BookmarkCard = ({ data }) => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  return (
    <a href={`${data.link}`} target="_blank" rel="noreferrer">
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
    </a>
  );
};
export default BookmarkCard;
