import { Text } from "@chakra-ui/react";
import React from "react";

interface IOptionsProp {
  title: string;
}

export function Options({ title }: IOptionsProp) {
  return (
    <>
      <Text as="button" color="white.100" fontWeight="bold">
        {title}
      </Text>
    </>
  );
}
