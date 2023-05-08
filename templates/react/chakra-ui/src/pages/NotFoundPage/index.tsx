import { Box, Text, Button } from "@chakra-ui/react";
import { NAVIGATION_ROUTES } from "@src/routes/constants";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <Box
            display={"grid"}
            placeItems="center"
            minH={"100vh"}
            textAlign={"center"}
        >
            <Box display={"grid"} gap={2}>
                <Text fontSize={"4xl"}>404</Text>
                <Text fontSize={"2xl"}>Oops! Page Not Found</Text>
                <Text>
                    Sorry, the page you are looking for doesn&apos;t exist.
                </Text>
                <Button>
                    <Link to={NAVIGATION_ROUTES.HOME}>Return Home</Link>
                </Button>
            </Box>
        </Box>
    );
}
