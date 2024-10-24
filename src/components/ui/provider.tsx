"use client"

import { ChakraProvider } from "@chakra-ui/react"
import { ColorModeProvider } from "./color-mode"
import { customTheme } from "./themeSettings"

export function Provider(props: React.PropsWithChildren) {
  return (
    <ChakraProvider value={customTheme}>
      <ColorModeProvider enableSystem={false}>{props.children}</ColorModeProvider>
    </ChakraProvider>
  )
}
