// theme.js

// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    heading: `Inter, sans-serif`,
    body: `Inter, sans-serif`,
  },
};

const extras = {
  colors: {
    brand: {
      500: "#1D1D1D",
      400: "#404040",
      300: "#6A6A6A",
      200: "#D9D9D9",
      100: "#fdfdfd",
    },
  },
};
// 3. extend the theme
const theme = extendTheme({ config, ...extras });

export default theme;
