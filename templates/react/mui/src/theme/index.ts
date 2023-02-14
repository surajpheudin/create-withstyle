import { PaletteMode, ThemeOptions } from "@mui/material";
import {
    breakpoints,
    paletteDark,
    paletteLight,
    typography,
} from "./foundations";

type paletteType = typeof paletteLight;

declare module "@mui/material/styles" {
    interface Palette extends paletteType {}
}

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    spacing: 4,
    shape: {
        borderRadius: 4,
    },
    breakpoints,
    typography,
    palette: {
        mode,
        ...(mode === "light" ? paletteLight : paletteDark),
    },
});
