import { defineStyleConfig } from "@chakra-ui/react";

const textTheme = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        color: "black",
    },
    variants: {
        disabled: {
            color: "gray.300",
        },
        error: {
            color: "red.500",
        },
    },
});

export default textTheme;
