import { Box, chakra, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import Image from "next/image";

import Link from "next/link";
import { Header } from "../components/Header";
import { SimpleButton } from "../components/SimpleButton";

export default function Home() {
  const [isLargerThan880] = useMediaQuery("(min-width: 880px)");
  const [isLargerThan1282] = useMediaQuery("(min-width: 1282px)");
  const [isLargerThan1011] = useMediaQuery("(min-width: 1011px)");
  const [isLargerThan864] = useMediaQuery("(min-width: 864px)");

  const OurImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });
  return (
    <Box
      pt="2.25rem"
      px="2.625rem"
      w="100%"
      h="34rem"
      bgGradient="linear(to-l, pink.100, orange.100)"
    >
      <Header />
      <Flex>
        <Flex
          flexDir="column"
          mt={isLargerThan880 ? "60px" : "10px"}
          ml={isLargerThan1282 ? "111px" : "11px"}
        >
          {isLargerThan1282 ? (
            <Text mb="21px" fontSize="34px" fontWeight="bold" color="white.100">
              Discover all
              <br /> possibilities of using <br /> this powerfull tool <br />{" "}
              and create science <br /> figures, posters and <br />{" "}
              infographics.
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
              width={"180px"}
              variant={"solid"}
              height={"40px"}
              borderRadius={"20px"}
              bgColor={"purple.100"}
              color={"white.100"}
            />
          </Link>
        </Flex>
        <Flex
          flexShrink={0.3}
          ml={isLargerThan1011 ? "144px" : "1px"}
          mt="50px"
        >
          {isLargerThan1282 ? (
            <OurImage
              src="/images/head02.png"
              width="650px"
              height="427px"
              alt="Mind the Graph tool
to create science
figures, posters and
infographics"
            />
          ) : (
            <OurImage
              objectFit="none"
              src="/images/head02.png"
              width="650px"
              height="427px"
              alt="Mind the Graph tool
to create science
figures, posters and
infographics"
            />
          )}
        </Flex>
      </Flex>
    </Box>
  );
}
