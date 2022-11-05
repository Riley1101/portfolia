import {
  Box,
  Container,
  Stack,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function LargeWithAppLinksAndSocial() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <SocialButton
              label={"Twitter"}
              href={"https://arkardev.space/twitter"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"YouTube"}
              href={"https://arkardev.space/youtube"}
            >
              <FaYoutube />
            </SocialButton>
            <SocialButton
              label={"Instagram"}
              href={"https://arkardev.space/instagram"}
            >
              <FaInstagram />
            </SocialButton>
            <SocialButton
              label={"Github"}
              href={"https://arkardev.space/github"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"facebook"}
              href={"https://arkardev.space/facebook"}
            >
              <FaFacebook />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
