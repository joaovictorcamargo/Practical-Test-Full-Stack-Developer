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
        mt={isLargerThan880 ? "60px" : "10px"}
        ml={isLargerThan1282 ? "111px" : "11px"}
      >
        {isLargerThan1282 ? (
          <Text mb="21px" fontSize="34px" fontWeight="bold" color="white.100">
            Discover all
            <br /> possibilities of using <br /> this powerfull tool <br /> and
            create science <br /> figures, posters and <br /> infographics.
          </Text>
        ) : (
          <Text
            mb="21px"
            fontSize={isLargerThan864 ? "34px" : "24px"}
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
            width={["150px", "160px", "170px", "180px"]}
            variant={"solid"}
            height={"40px"}
            borderRadius={"20px"}
            bgColor={"purple.100"}
            color={"white.100"}
            fontSizeText={["14px", "15px", "16px", "17px"]}
          />
        </Link>
      </Flex>
      <Flex flexShrink={0.3} ml={isLargerThan1011 ? "144px" : "1px"} mt="50px">
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
