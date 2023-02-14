import { PaletteMode } from "@mui/material";
import React from "react";

interface IColorModeContext {
    colorMode: PaletteMode;
    toggleColorMode: () => void;
    setColorMode: (colorMode: PaletteMode) => void;
}

export const ColorModeContext = React.createContext<IColorModeContext>(
    {} as IColorModeContext
);

export const useColorMode = () => {
    const context = React.useContext(ColorModeContext);
    if (!context) {
        throw new Error("useColorMode must be used within a ColorModeProvider");
    }

    return context;
};
