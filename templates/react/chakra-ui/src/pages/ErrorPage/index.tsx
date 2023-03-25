import { Box, Text } from "@chakra-ui/react";

const ErrorPage = () => {
    return (
        <Box
            display={"grid"}
            placeItems="center"
            minH={"100vh"}
            textAlign={"center"}
        >
            <Box display={"grid"} gap={2}>
                <Text fontSize={"2xl"}>Oops!</Text>
                <Text>Sorry, an unexpected error has occurred.</Text>
            </Box>
        </Box>
    );
};

export default ErrorPage;
