import { FC, PropsWithChildren } from "react";
import ThemeProvider from "./ThemeProvider";

const Providers: FC<PropsWithChildren> = ({ children }) => {
    return <ThemeProvider>{children}</ThemeProvider>;
};

export default Providers;
