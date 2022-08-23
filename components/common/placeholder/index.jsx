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
const Card = ({ data }) => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  return (
    <Flex
      w="full"
      backgroundColor={bg}
      h="full"
      p={[6, 10]}
      justifyContent="flex-start"
    ></Flex>
  );
};
export default Card;
