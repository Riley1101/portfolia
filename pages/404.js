import MainContainer from "@/layouts/container";
import { Button } from "@chakra-ui/react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

const NotFound = () => {
  return (
    <MainContainer>
      <Box w="100%" h="90vh" display="grid" placeItems="center">
        <Box textAlign="center" px={6}>
          <Box display="inline-block">
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              bg={"red.500"}
              rounded={"50px"}
              w={"55px"}
              h={"55px"}
              textAlign="center"
            >
              <CloseIcon boxSize={"20px"} color={"white"} />
            </Flex>
          </Box>
          <Heading as="h2" size="xl" mt={6} mb={2}>
            Content Not Found !
          </Heading>
          <Text color={"gray.500"}>
            It is possible that the website is in still development.
          </Text>
          {/* <Button colorScheme="whiteAlpha">Go To Home</Button> */}
        </Box>
      </Box>
    </MainContainer>
  );
};
export default NotFound;
