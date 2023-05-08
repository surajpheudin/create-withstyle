import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./components/buttonTheme";
import textTheme from "./components/textTheme";
import breakpoints from "./foundations/breakpoints";
import { colors } from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontWeights from "./foundations/fontWeights";
import styles from "./styles";

const theme = extendTheme({
    styles,
    fonts,
    breakpoints,
    fontWeights,
    colors,
    components: {
        Text: textTheme,
        Button: buttonTheme,
    },
});

export default theme;
