import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import SocialButton from "@/components/common/socialButton";
import {
  Stack,
  HStack,
  Box,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import dateFormat from "dateformat";
import readingTime from "reading-time";
const Meta = ({ data }) => {
  let bg = useColorModeValue("gray.800", "gray.800");
  return (
    <Box p="4">
      <Box
        px={[8, 14]}
        display="flex"
        flexDir="column"
        gap="4"
        backgroundImage="url('/static/general/background.jpg')"
        backgroundSize="cover"
        transition="all 250ms ease"
        cursor="pointer"
        py={[8, 12]}
        borderRadius={"3em"}
        _hover={{
          borderRadius: "2em",
        }}
      >
        <Heading
          color={bg}
          fontWeight="600"
          fontSize={["3xl", "5xl"]}
          w={["100%", "80%"]}
        >
          {data?.title}
        </Heading>
        <Text fontSize={["xl", "2xl"]} color="gray.500" fontWeight="400">
          {data?.description}
        </Text>
        <HStack fontSize={"sm"} color="gray.800">
          <Text>{dateFormat(data?.publishedAt, "mediumDate")}</Text>
          <Text>-</Text>
          <Text>{readingTime(data.content).text}</Text>
        </HStack>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Twitter"} href={"#"}>
            <FaTwitter style={{ color: "#1a202c" }} />
          </SocialButton>
          <SocialButton label={"LinkedIn"} href={"#"}>
            <FaLinkedin style={{ color: "#1a202c" }} />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaFacebook color="red.500" style={{ color: "#1a202c" }} />
          </SocialButton>
        </Stack>
      </Box>
    </Box>
  );
};
export default Meta;
