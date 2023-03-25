import { defineStyleConfig } from "@chakra-ui/react";

const Text = defineStyleConfig({
    // The styles all button have in common
    baseStyle: {
        color: "black",
    },
    variants: {
        secondary: {
            color: "gray.300",
        },
        error: {
            color: "red.500",
        },
    },
});

export default Text;
