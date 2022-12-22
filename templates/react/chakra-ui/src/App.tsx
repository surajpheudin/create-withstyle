import reactLogo from "./assets/react.svg";
import "./App.css";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

function App() {
  return (
    <Container p={10}>
      <Heading
        as={"h1"}
        textAlign={"center"}
        fontSize={{ base: "2xl", md: "3xl" }}
      >
        Best of Luck for This Amazing Project
      </Heading>
      <Flex justify={"center"} mt={"100px"}>
        <Image src={reactLogo} height={{ base: "80px", md: "120px" }}></Image>
      </Flex>
    </Container>
  );
}

export default App;
