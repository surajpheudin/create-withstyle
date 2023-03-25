import { ChakraProvider } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";
import theme from "../theme";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
