import {
  Box,
  Button,
  Code,
  Image,
  OrderedList,
  Text,
  Link,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import useClipboard from "react-use-clipboard";
const prism = require("prismjs");
import React from "react";
require("prismjs/components/prism-javascript");

require("prismjs/components/prism-css");

require("prismjs/components/prism-jsx");

const PreBlock = ({ children, className }) => {
  return <pre className={`${className}`}>{children}</pre>;
};
const CodeBlock = ({ children, ...props }) => {
  const [isCopied, setCopied] = useClipboard(children);

  React.useEffect(() => {
    prism.highlightAll();
  }, []);
  return (
    <Box position="relative">
      <Button
        onClick={() => {
          setCopied(children);
        }}
        aria-label="Copy"
        size="xs"
        position={["absolute", "absolute"]}
        colorScheme="blue"
        zIndex="10"
        right={"1.5em"}
        top={"1.5em"}
      >
        {isCopied ? "Copied" : "Copy"}
      </Button>
      <Code
        className={props.className}
        colorScheme={"dark"}
        transition="all 250ms ease"
        display="block"
        my="1.5em"
        _hover={{
          borderRadius: "2em",
        }}
        style={{
          padding: "2em",
          whiteSpace: "pre-wrap",
          // borderRadius:'2em'
        }}
      >
        {children}
      </Code>
    </Box>
  );
};
const useMarkdownTheme = () => {
  const pColor = useColorModeValue("gray.600", "gray.400");
  const quoteColor = useColorModeValue("rgba(0,0,0,0.5)", "white");

  const markdownTheme = {
    a: (props) => {
      const { children } = props;
      return (
        <Link
          {...props}
          _hover={{
            color: "blue.500",
          }}
          isExternal
          colorScheme="blue"
        >
          {children} <ExternalLinkIcon mx="2px" />
        </Link>
      );
    },
    pre: (props) => {
      return <PreBlock {...props} />;
    },
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

    code: (props) => {
      const { children } = props;
      return <CodeBlock className={props.className}>{children}</CodeBlock>;
    },
    img: (props) => {
      return (
        <Image
          mx="auto"
          borderRadius="3em"
          _hover={{
            borderRadius: "1.5em",
          }}
          transition="all 250ms ease"
          {...props}
          width={["100%", "auto"]}
          objectFit="contain"
          height={["100%", "auto"]}
          maxH={["auto", "350px"]}
          my="8"
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