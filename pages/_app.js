import "nprogress/nprogress.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import theme from "@/utils/theme";
import useNProgress from "@/utils/nProgress";
import client from "@/utils/query/client";
import "dracula-prism/dist/css/dracula-prism.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import "katex/dist/katex.min.css";
function MyApp({ Component, pageProps }) {
  useNProgress();

  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default MyApp;
