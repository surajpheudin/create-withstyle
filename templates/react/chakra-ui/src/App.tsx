import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Form from "./components/Form/Form";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import Typography from "./components/Typography/Typography";

function App() {
  return (
    <Container maxW={"container.xl"} pb={10}>
      <Box py={4}>
        <ThemeToggler></ThemeToggler>
      </Box>
      <Typography></Typography>
      <Form></Form>

      <Box py={8}>
        <Text fontSize={"6xl"} textAlign="center">
          Best of luck for this amazing project!
        </Text>
        <Text textAlign={"right"}>- create-withstyle family</Text>
      </Box>
    </Container>
  );
}

export default App;
