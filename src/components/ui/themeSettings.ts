import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    recipes: {},
  },
});

export const customTheme = createSystem(defaultConfig, config);
