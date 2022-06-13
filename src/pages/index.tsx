import { Box } from "@chakra-ui/react";

import CardsSection from "../components/CardsSection";

import { Header } from "../components/Header";
import Main from "../components/Main";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box
      pt="2.25rem"
      px="2.625rem"
      minWidth="500px"
      w="100%"
      h="34rem"
      bgGradient="linear(to-l, pink.100, orange.100)"
    >
      <Header />
      <Main />
      <CardsSection />
      <Footer />
    </Box>
  );
}
