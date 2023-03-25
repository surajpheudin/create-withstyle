import { FC, PropsWithChildren } from "react";
import ThemeProvider from "./theme";

const Provider: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default Provider;
