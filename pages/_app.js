import "highlight.js/styles/base16/dracula.css";
import "nprogress/nprogress.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import theme from "@/utils/theme";
import useNProgress from "@/utils/nProgress";
import client from "@/utils/query/client";

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
