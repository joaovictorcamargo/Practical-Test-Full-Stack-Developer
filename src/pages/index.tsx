import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";

export default function Home() {
  return (
    <Box
      pt="2.25rem"
      px="2.625rem"
      w="100%"
      h="34rem"
      bgGradient="linear(to-l, pink.100, orange.100)"
    >
      <Header />
    </Box>
  );
}
