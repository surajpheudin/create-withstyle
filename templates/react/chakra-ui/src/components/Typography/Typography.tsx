import { Box, Heading, Text } from "@chakra-ui/react";
import { FC } from "react";

const Typography: FC = () => {
  return (
    <Box>
      <Heading
        as="h1"
        size={"4xl"}
        my={8}
        fontFamily="body"
        borderBottom={"4px solid"}
        borderColor="brand.500"
        pb={4}
      >
        Typography
      </Heading>
      <Heading as="h1" size={"4xl"}>
        Heading1
      </Heading>
      <Heading as="h2" size={"3xl"}>
        Heading2
      </Heading>
      <Heading as="h3" size={"2xl"}>
        Heading3
      </Heading>
      <Heading as="h4" size={"xl"}>
        Heading4
      </Heading>
      <Heading as="h5" size="lg">
        Heading5
      </Heading>
      <Heading as="h6" size={"md"}>
        Heading6
      </Heading>

      <Text
        noOfLines={{
          base: 3,
          md: 2,
        }}
      >
        Paragraph: create-withstyle is a nodejs package for scaffolding your web
        project with most popular frontend frameworks pre-setup with styling
        library.
      </Text>
    </Box>
  );
};

export default Typography;
