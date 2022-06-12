import { Box, Flex, Text } from "@chakra-ui/react";
import CanDoCard from "../components/CanDoCard";
import CardsSection from "../components/CardsSection";
import Ico_Drag from "../assets/ico_drag.svg";
import Ico_Premade from "../assets/ico_premade.svg";
import Ico_Platform from "../assets/ico_platform.svg";
import Ico_Odemand from "../assets/ico_odemand.svg";
import Ico_Multiple from "../assets/ico_multiple.svg";
import Ico_Share from "../assets/ico_share.svg";

import { Header } from "../components/Header";
import Main from "../components/Main";
import { SimpleButton } from "../components/SimpleButton";
import Footer from "../components/Footer";

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
      <Main />
      <CardsSection />
      <Footer />
    </Box>
  );
}
