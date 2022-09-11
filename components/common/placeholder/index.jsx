import { Grid, Skeleton, useColorModeValue, VStack } from "@chakra-ui/react";
const Card = () => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  return (
    <Skeleton
      w="full"
      backgroundColor={bg}
      h="full"
      minH="200px"
      borderRadius="3em"
      _hover={{
        borderRadius: "1.5em",
      }}
      justifyContent="flex-start"
    ></Skeleton>
  );
};

const PlaceHolderGrid = () => {
  return (
    <>
      <VStack alignItems={"flex-start"} spacing=".2em" my="7">
        <Skeleton
          w={["90px", "200px"]}
          h="35px"
          borderRadius="3em"
          _hover={{
            borderRadius: "1.5em",
          }}
          mb="2"
        ></Skeleton>
        <Skeleton
          w={["170px", "500px"]}
          h="35px"
          borderRadius="3em"
          _hover={{
            borderRadius: "1.5em",
          }}
          fontWeight="bold"
          color={"gray.500"}
        ></Skeleton>
      </VStack>
      <Grid
        w="full"
        templateColumns={["1fr", "repeat(3, 1fr)"]}
        gap={4}
        gridAutoFlow="dense"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
    </>
  );
};
export default PlaceHolderGrid;
