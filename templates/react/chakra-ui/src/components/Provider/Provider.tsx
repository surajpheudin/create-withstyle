import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { FC } from "react";
import { theme } from "../../theme";
import { IProvider } from "./interface";

const Provider: FC<IProvider> = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default Provider;
