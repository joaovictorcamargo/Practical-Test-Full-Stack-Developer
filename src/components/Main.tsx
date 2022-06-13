import React from "react";
import { chakra, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { SimpleButton } from "../components/SimpleButton";
import Link from "next/link";
import Image from "next/image";

function Main() {
  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  const [isLargerThan880] = useMediaQuery("(min-width: 880px)");
  const [isLargerThan1282] = useMediaQuery("(min-width: 1282px)");
  const [isLargerThan1011] = useMediaQuery("(min-width: 1011px)");
  const [isLargerThan864] = useMediaQuery("(min-width: 864px)");
  return (
    <Flex flexDir={isLargerThan1011 ? "row" : "column"}>
      <Flex
        flexDir="column"
        mt={isLargerThan880 ? "3.75rem" : "0.625rem"}
        ml={isLargerThan1282 ? "6.875rem" : "0.625rem"}
      >
        {isLargerThan1282 ? (
          <Text
            mb="1.25rem"
            fontSize="2.125rem"
            fontWeight="bold"
            color="white.100"
          >
            Discover all
            <br /> possibilities of using <br /> this powerfull tool <br /> and
            create science <br /> figures, posters and <br /> infographics.
          </Text>
        ) : (
          <Text
            mb="1.25rem"
            fontSize={isLargerThan864 ? "2.125rem" : "1.5rem"}
            fontWeight="bold"
            color="white.100"
          >
            Discover all possibilities of using this powerfull tool and create
            science figures, posters and infographics.
          </Text>
        )}

        <Link href={"/"}>
          <SimpleButton
            text={"Start creating now"}
            width={["9.375rem", "10rem", "10.625rem", "11.25rem"]}
            variant={"solid"}
            height={"2.5rem"}
            borderRadius={"1.25rem"}
            bgColor={"purple.100"}
            color={"white.100"}
            fontSizeText={["0.875rem", "0.875rem", "1rem", "1rem"]}
          />
        </Link>
      </Flex>
      <Flex
        flexShrink={0.3}
        ml={isLargerThan1011 ? "9rem" : "0.125rem"}
        mt="3.125rem"
      >
        <OurImage
          src="/images/head02.png"
          width="650px"
          height="427px"
          alt="Mind the Graph tool
to create science
figures, posters and
infographics"
        />
      </Flex>
    </Flex>
  );
}

export default Main;
