import {
  Grid,
  Box,
  GridItem,
  Text,
  HStack,
  Tooltip,
  AspectRatio,
  Badge,
  VStack,
  IconButton,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdOpenInNew } from "react-icons/md";
const Tool = () => {
  const bg = useColorModeValue("#eff2f9", "gray.900");
  return (
    <Tooltip
      placement="bottom"
      label="Chakra is the UI for build fast web experiences"
    >
      <Flex
        w="full"
        backgroundColor={bg}
        h="full"
        p={0}
        justifyContent="flex-end"
        position={"relative"}
        overflow="hidden"
        sx={{
          ".but:hover .text": { opacity: 1, transform: 'translateY("0px")' },
        }}
      >
        <AspectRatio
          ratio={16 / 8}
          w="full"
          position="relative"
          overflow={"hidden"}
          rounded="1em"
        >
          <Image
            src="/static/general/background.jpg"
            layout="fill"
            alt="image of link"
          />
        </AspectRatio>
        <Box
          w="full"
          top="0"
          transition="all 250ms ease"
          left="0"
          h="full"
          className="but"
          _hover={{
            backgroundColor: "rgba(0,0,0,0.1)",
            backdropFilter: "blur(5px)",
          }}
          backgroundColor="rgba(0,0,0,0.2)"
          backdropFilter={"blur(0px)"}
          position={"absolute"}
          display="grid"
          placeItems={"center"}
        >
          <VStack className="but">
            <IconButton
              aria-label="Search database"
              rounded="full"
              icon={<MdOpenInNew w="8" h="8" />}
            />
            <Text
              opacity={0}
              transform="translateY(10px)"
              className="text"
              fontSize="sm"
              textAlign={"center"}
              transition="all 250ms ease"
            >
              Chakra Ui for faster development and design
            </Text>
          </VStack>
        </Box>
      </Flex>
    </Tooltip>
  );
};
export default Tool;
