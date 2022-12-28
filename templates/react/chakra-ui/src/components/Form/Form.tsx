import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  Link,
} from "@chakra-ui/react";
import { FC } from "react";

const Form: FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <Heading
        as="h1"
        size={"4xl"}
        my={8}
        fontFamily="body"
        borderBottom={"4px solid"}
        borderColor="brand.500"
        pb={4}
      >
        Form
      </Heading>
      <Flex
        direction="column"
        gap={4}
        boxShadow="lg"
        p={18}
        maxW="lg"
        mx={"auto"}
      >
        <Heading>Login</Heading>
        <Input placeholder="Email" type="email" required></Input>
        <Input placeholder="Password" type="password" required></Input>

        <Flex justify={"space-between"}>
          <Checkbox color={"gray.600"}>Remember Me</Checkbox>

          <Link>Forgot Password?</Link>
        </Flex>
        <Button type="submit" isLoading={false}>
          Login
        </Button>
      </Flex>
    </form>
  );
};

export default Form;
