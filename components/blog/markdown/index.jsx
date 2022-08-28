import { Box } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown from "react-markdown";
import useMarkdownTheme from "@/components/blog/markdown/theme";
const BlogContent = ({ data }) => {
  const { theme } = useMarkdownTheme();

  return (
    <Box w={["100%", "70%"]} mx={["0", "auto"]} p="4">
      <ReactMarkdown components={ChakraUIRenderer(theme)} skipHtml>
        {data?.content}
      </ReactMarkdown>
    </Box>
  );
};
export default BlogContent;
