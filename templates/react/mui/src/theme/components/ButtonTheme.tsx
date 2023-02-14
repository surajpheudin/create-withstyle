import {
    ComponentsOverrides,
    ComponentsProps,
    ComponentsVariants,
    Theme,
} from "@mui/material";

declare module "@mui/material/Button" {
    interface ButtonPropsVariantOverrides {
        // primary: true;
        // secondary: true;
        // outline: true;
        // danger: true;
        // invisible: true;
    }
}

export const ButtonTheme = (
    theme: Theme
): {
    defaultProps?: ComponentsProps["MuiButton"];
    styleOverrides?: ComponentsOverrides<Theme | unknown>["MuiButton"];
    variants?: ComponentsVariants["MuiButton"];
} => ({
    defaultProps: {
        variant: "contained",
        disableElevation: true,
        color: "secondary",
    },
    styleOverrides: {
        root: {
            borderRadius: theme.shape.borderRadius * 1.5,
            borderWidth: "1px",
            borderStyle: "solid",
            fontWeight: "600",
        },
    },
    variants: [
        {
            props: {
                color: "primary",
            },
            style: {
                borderColor: theme.palette.border.green.main,
            },
        },
        {
            props: {
                color: "secondary",
            },
            style: {
                borderColor: theme.palette.border.gray.main,
            },
        },
        {
            props: {
                variant: "outlined",
            },
            style: {
                borderColor: theme.palette.border.gray.main,
            },
        },
        {
            props: {
                variant: "text",
            },
            style: {
                border: "none",
            },
        },
    ],
});
