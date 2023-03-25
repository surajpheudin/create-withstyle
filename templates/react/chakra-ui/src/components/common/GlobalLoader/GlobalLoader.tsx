import { Box, Grid, Progress } from "@chakra-ui/react";
import { ViteIcon } from "@assets/svgs";

const GlobalLoader = () => {
    return (
        <Box
            position={"fixed"}
            top={0}
            bottom={0}
            left={0}
            right={0}
            display="grid"
            placeItems={"center"}
        >
            <Grid gap={2}>
                <ViteIcon />
                <Progress colorScheme={"primary"} size="xs" isIndeterminate />
            </Grid>
        </Box>
    );
};

export default GlobalLoader;
