import { ChakraProvider } from "@chakra-ui/react";
import theme from "@src/theme";
import { FC, PropsWithChildren } from "react";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
