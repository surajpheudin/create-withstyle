import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solidPrimary = defineStyle({
    background: "primary.300",
    _hover: {
        background: "primary.400",
    },
});

const solidLightPrimary = defineStyle({
    background: "primary.50",
    color: "primary.400",
    _hover: {
        color: "primary.600",
    },

    _dark: {
        background: "primary.50",
        color: "primary.400",
    },
});

const solidSecondary = defineStyle({
    background: "secondary.500",
    color: "white",
    _hover: {
        background: "secondary.600",
    },

    _dark: {
        background: "secondary.500",
        color: "white",
    },
});

export const buttonTheme = defineStyleConfig({
    baseStyle: {
        borderRadius: "xl",
        fontWeight: "medium",
    },
    variants: {
        solid: ({ colorScheme }) => ({
            ...(colorScheme === "primary" && solidPrimary),
            ...(colorScheme === "primary-light" && solidLightPrimary),
            ...(colorScheme === "secondary" && solidSecondary),
        }),
        outline: ({ colorScheme }) => ({
            ...(colorScheme === "primary" && {
                color: "primary.300",
            }),
        }),
    },
    defaultProps: {
        colorScheme: "primary",
    },
});
