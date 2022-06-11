import { Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ICanDoCardProps {
  image: any;
  text1: ReactNode;
  text2: ReactNode;
}

function CanDoCard({ image, text1, text2 }: ICanDoCardProps) {
  const oii = ">";
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mb="12px"
    >
      {image}

      <Text
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        color="purple.100"
      >
        {text1}
      </Text>

      <Text mb="66px" textAlign="center" fontSize="20px" color="black.100">
        {text2}
      </Text>
      <Text
        as="button"
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        color="purple.100"
      >
        {oii} LEARN MORE
      </Text>
    </Flex>
  );
}

export default CanDoCard;
