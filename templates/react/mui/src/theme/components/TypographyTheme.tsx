import { ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const TypographyTheme = (
    theme: Theme
): {
    defaultProps?: ComponentsProps["MuiTypography"];
    variants?: ComponentsVariants["MuiTypography"];
} => ({
    defaultProps: {
        color: theme.palette.typography.gray.dark,
    },
});
