import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "100": "##EEEEEE",
    },
    white: {
      "100": "#FFFFFF",
    },
    pink: {
      "100": "#DC1866",
    },
    orange: {
      "100": "#FF9226",
    },
    purple: {
      "100": "#7833FF",
      "200": "#5F29CC",
    },
    black: {
      "100": "#212121",
    },
  },
  fonts: {
    heading: "Lato",
    body: "Lato",
  },
  styles: {
    global: {
      body: {
        bg: "gray.100",
        color: "black.100",
      },
    },
  },
});
