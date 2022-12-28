import {
  extendTheme,
  type ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";
import styles from "./styles";
import colors from "./foundations/colors";
import breakpoints from "./foundations/breakpoints";
import fonts from "./foundations/fonts";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const overrides = {
  config,
  colors,
  styles,
  fonts,
  breakpoints,
  components: {
    h1: {
      fontSize: "48px",
    },
  },
};

export const theme = extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: "brand",
  })
);
