import { Palette } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typography:
    | TypographyOptions
    | ((palette: Palette) => TypographyOptions) = {
    htmlFontSize: 14,
    fontSize: 14,

    h1: {
        fontSize: "32px",
        fontWeight: 600,
        lineHeight: "48px",
        letterSpacing: "0.4px",
    },
    h2: {
        fontSize: "24px",
        fontWeight: 600,
        lineHeight: "36px",
        letterSpacing: "0.3px",
    },
    h3: {
        fontSize: "20px",
        fontWeight: 600,
        lineHeight: "30px",
        letterSpacing: "0.3px",
    },
    h4: {
        fontSize: "16px",
        fontWeight: 600,
        lineHeight: "24px",
    },
    h5: {
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: "20px",
    },
    h6: {
        fontSize: "12px",
        fontWeight: 600,
        lineHeight: "18px",
    },

    body1: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "-0.15px",
    },
};
