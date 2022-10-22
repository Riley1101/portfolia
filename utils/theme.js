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

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
