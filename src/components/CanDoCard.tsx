import { Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ICanDoCardProps {
  image: any;
  text1: ReactNode;
  text2: ReactNode;
  text3?: ReactNode;
  text1color: string;
  text2color: string;
  text1size: string;
  fontweighttext2: string;
}

function CanDoCard({
  image,
  text1,
  text2,
  text3,
  text1color,
  text2color,
  text1size,
  fontweighttext2,
}: ICanDoCardProps) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      mb="12px"
    >
      {image}

      <Text
        mb="13px"
        textAlign="center"
        fontSize={text1size}
        fontWeight={fontweighttext2}
        color={text1color}
      >
        {text1}
      </Text>

      <Text mb="66px" textAlign="center" fontSize="20px" color={text2color}>
        {text2}
      </Text>
      <Text
        as="button"
        textAlign="center"
        fontSize="20px"
        fontWeight="bold"
        color="purple.100"
      >
        {text3}
      </Text>
    </Flex>
  );
}

export default CanDoCard;
