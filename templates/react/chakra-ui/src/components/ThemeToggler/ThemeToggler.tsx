import { FormControl, FormLabel, Switch, useColorMode } from "@chakra-ui/react";
import { FC } from "react";

const ThemeToggler: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel fontWeight={"bold"} htmlFor="dark-mode" mb="0">
        Dark Mode
      </FormLabel>
      <Switch
        id="dark-mode"
        colorScheme={"blue"}
        isChecked={colorMode === "dark"}
        onChange={() => {
          toggleColorMode();
        }}
      />
    </FormControl>
  );
};

export default ThemeToggler;
