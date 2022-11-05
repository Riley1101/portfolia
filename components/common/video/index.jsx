import {
  IconButton,
  Box,
  Text,
  Badge,
  VStack,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { FiPlayCircle } from "react-icons/fi";
const Video = ({ video }) => {
  const text = useColorModeValue("#eff2f9", "#eff2f9");
  const image =
    video?.snippet?.thumbnails?.standard?.url || "/static/general/snippet.jpg";
  return (
    <Flex
      w="full"
      // backgroundColor={bg}
      h="full"
      p={[6, 10]}
      justifyContent="flex-end"
      position={"relative"}
      backgroundImage={`url("${image}")`}
      backgroundSize={"110%"}
      minH={["200px", "auto"]}
      backgroundPosition={"center"}
    >
      <Box
        w="full"
        h="full"
        position={"absolute"}
        bg="rgba(0,0,0,0.5)"
        top={0}
        left={0}
      ></Box>

      <VStack
        alignItems={"flex-start"}
        justifyContent="flex-end"
        zIndex={10}
        color={text}
        w="100%"
      >
        <Badge colorScheme="green">React</Badge>
        <Text as="h2" fontSize={"2xl"} fontWeight="bold">
          {video.snippet.title}
        </Text>
        <Text as="p">{video.snippet.description}</Text>
      </VStack>
      <IconButton
        transition={"all 250ms ease"}
        aria-label="Search database"
        borderRadius={"1em"}
        _hover={{
          borderRadius: ".5em",
        }}
        zIndex="12"
        icon={<FiPlayCircle size={"20"} />}
      />
    </Flex>
  );
};
export default Video;
