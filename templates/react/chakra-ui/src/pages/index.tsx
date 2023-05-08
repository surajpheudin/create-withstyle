import { Button, Grid, Text } from "@chakra-ui/react";
const Home = () => {
    return (
        <Grid
            width={"300px"}
            justifyContent="center"
            mx={"auto"}
            gap={4}
            pt={12}
        >
            <Text>Normal Text</Text>
            <Text variant={"disabled"}>Disabled Text</Text>
            <Text variant={"error"}>Error Text</Text>
            <Button>Solid Primary</Button>
            <Button colorScheme="secondary">Solid Secondary</Button>
        </Grid>
    );
};
export default Home;
