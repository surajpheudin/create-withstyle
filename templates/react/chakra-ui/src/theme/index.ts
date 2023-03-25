import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import breakpoints from "./foundations/breakpoints";
import fonts from "./foundations/fonts";
import fontWeights from "./foundations/fontWeights";
import { colors } from "./foundations/colors";
import Text from "./components/Text";
import { buttonTheme } from "./components/buttonTheme";

const theme = extendTheme({
    styles,
    fonts,
    breakpoints,
    fontWeights,
    colors,
    components: {
        Text: Text,
        Button: buttonTheme
    },
});

export default theme;
