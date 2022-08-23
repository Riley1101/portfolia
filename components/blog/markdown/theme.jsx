import {
  Text,
  OrderedList,
  useColorModeValue,
  Image,
  Box,
  Code,
  UnorderedList,
} from "@chakra-ui/react";
import hljs from "highlight.js";
const useMarkdownTheme = () => {
  const pColor = useColorModeValue("gray.600", "gray.400");
  const codeBg = useColorModeValue("#171a23", "#171a23");
  const quoteColor = useColorModeValue("rgba(0,0,0,0.5)", "white");
  let codeStyle = {
    overflow: "hidden",
    overflowX: "auto",
    color: "white",
    padding: "1em",
    borderRadius: "2em",
    paddingInline: "2.5em",
    marginBlock: "1.5em",
    backgroundColor: codeBg,
  };
  const markdownTheme = {
    h1: (props) => {
      const { children } = props;
      return (
        <Text
          as="h1"
          fontWeight={"bold"}
          color={pColor}
          fontSize="5xl"
          my="2"
          mt="8"
        >
          {children}
        </Text>
      );
    },
    h2: (props) => {
      const { children } = props;
      return (
        <Text
          as="h1"
          fontWeight={"bold"}
          color={pColor}
          fontSize="4xl"
          my="2"
          mt="8"
        >
          {children}
        </Text>
      );
    },
    h3: (props) => {
      const { children } = props;
      return (
        <Text as="h1" fontWeight={"bold"} fontSize="3xl" my="2" mt="8">
          {children}
        </Text>
      );
    },
    h4: (props) => {
      const { children } = props;
      return (
        <Text as="h1" fontWeight={"bold"} fontSize="2xl" my="2" mt="8">
          {children}
        </Text>
      );
    },
    h5: (props) => {
      const { children } = props;
      return (
        <Text as="h1" fontWeight={"bold"} fontSize="xl" my="2" mt="8">
          {children}
        </Text>
      );
    },
    p: (props) => {
      const { children } = props;
      return (
        <Text as="p" color={pColor} mb="4">
          {children}
        </Text>
      );
    },
    pre: (props) => {
      const { children } = props;
      return (
        <pre className={props.className} style={codeStyle}>
          {children}
        </pre>
      );
    },
    code: (props) => {
      const { children } = props;
      return (
        <Code
          w="full"
          bg="facebook"
          colorScheme="twitter"
          className={props.className}
          style={{ fontSize: "1em" }}
        >
          {children}
        </Code>
      );
    },
    img: (props) => {
      return (
        <Image
          borderRadius="3em"
          _hover={{
            borderRadius: "1.5em",
          }}
          transition="all 250ms ease"
          {...props}
          width={["100%", "auto"]}
          objectFit="contain"
          height={["100%", "auto"]}
          my="8"
          mx="auto"
          alt={""}
          layout="fill"
        />
      );
    },
    blockquote: (props) => {
      return (
        <Box
          my="8"
          fontSize={"xl"}
          borderLeft={`5px solid ${quoteColor}`}
          pl="8"
          fontStyle="italic"
          {...props}
        >
          <blockquote>{props.children}</blockquote>
        </Box>
      );
    },
    ol: (props) => {
      return (
        <OrderedList my="2" color={pColor} pl="4" {...props}>
          {props.children}
        </OrderedList>
      );
    },
    ul: (props) => {
      return (
        <UnorderedList my="2" color={pColor} pl="4" {...props}>
          {props.children}
        </UnorderedList>
      );
    },
  };
  return {
    theme: markdownTheme,
  };
};

export default useMarkdownTheme;
