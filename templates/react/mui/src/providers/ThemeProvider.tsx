import React, { FC, PropsWithChildren } from "react";
import {
    createTheme,
    CssBaseline,
    PaletteMode,
    ThemeProvider as MuiThemeProvider,
} from "@mui/material";
import { getDesignTokens } from "../theme";
import { ColorModeContext } from "../hooks/hook.theme";
import { ButtonTheme, TypographyTheme } from "../theme/components";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [mode, setMode] = React.useState<PaletteMode>("light");

    const colorMode = React.useMemo(
        () => ({
            colorMode: mode,
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
            setColorMode: (colorMode: PaletteMode) => {
                setMode(colorMode);
            },
        }),
        [mode]
    );

    // Update the theme only if the mode changes
    const theme = React.useMemo(
        () => createTheme(getDesignTokens(mode)),
        [mode]
    );

    theme.components = {
        MuiTypography: TypographyTheme(theme),
        MuiButton: ButtonTheme(theme),
    };

    return (
        <ColorModeContext.Provider value={colorMode}>
            <CssBaseline />
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
        </ColorModeContext.Provider>
    );
};

export default ThemeProvider;
