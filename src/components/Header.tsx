import { Flex, useMediaQuery } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import LogoMindTheGraph from "../assets/logo_mindthegraph.svg";
import { SimpleButton } from "../components/SimpleButton";
import { Options } from "./Options";

export function Header() {
  const [isLargerThan880] = useMediaQuery("(min-width: 880px)");
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)");

  return (
    <Flex
      justifyContent="space-between"
      flexDir={isLargerThan760 ? "row" : "column"}
    >
      <Link href="/">
        <Flex as="button">
          <LogoMindTheGraph />
        </Flex>
      </Link>
      <Flex alignItems="center">
        {isLargerThan760 ? (
          <>
            <Options title={"Templates"} />

            <Flex mx="2.5rem">
              <Options title={"Pricing"} />
            </Flex>

            <Options title={"Blog"} />
            <Flex mx="2.5rem">
              <Options title={"Jobs"} />
            </Flex>
          </>
        ) : (
          <>
            <Flex flexDir="column" alignItems="center">
              <Options title={"Templates"} />
              <Flex mx="2.5rem" mt="1rem">
                <Options title={"Pricing"} />
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Options title={"Blog"} />
              <Flex mx="2.5rem" mt="1rem">
                <Options title={"Jobs"} />
              </Flex>
            </Flex>
          </>
        )}
        {isLargerThan880 ? (
          <>
            <Flex mr="1rem">
              <Link href={"/LoginPage"}>
                <SimpleButton
                  text={"Login"}
                  width={["4.375rem", "5rem", "6.25rem", "6.25rem"]}
                  fontSizeText={["0.625rem", "0.75rem", "1rem", "1rem"]}
                  variant={"outline"}
                  borderColor={"with.100"}
                  height={"2.5rem"}
                  borderRadius={"1.25rem"}
                  color={"white.100"}
                />
              </Link>
            </Flex>
            <Link href={"/RegisterUser"}>
              <SimpleButton
                text={"Sign up free"}
                width={["5rem", "6.25rem", "9.375rem", "10.625rem"]}
                fontSizeText={["0.625rem", "0.75rem", "1rem", "1rem"]}
                variant={"solid"}
                height={"2.5rem"}
                borderRadius={"1.25rem"}
                bgColor={"purple.100"}
                color={"white.100"}
              />
            </Link>
          </>
        ) : (
          <>
            <Flex flexDir="column" alignItems="center">
              <Link href={"/RegisterUser"}>
                <SimpleButton
                  text={"Sign up free"}
                  width={["5rem", "6.25rem", "9.375rem", "10.625rem"]}
                  fontSizeText={["0.625rem", "0.75rem", "1rem", "1rem"]}
                  variant={"solid"}
                  height={"2.5rem"}
                  borderRadius={"1.25rem"}
                  bgColor={"purple.100"}
                  color={"white.100"}
                />
              </Link>

              <Flex mt="1rem">
                <Link href={"/LoginPage"}>
                  <SimpleButton
                    text={"Login"}
                    width={["4.375rem", "5rem", "6.25rem", "6.25rem"]}
                    fontSizeText={["0.625rem", "0.75rem", "1rem", "1rem"]}
                    variant={"outline"}
                    borderColor={"with.100"}
                    height={"2.5rem"}
                    borderRadius={"1.25rem"}
                    color={"white.100"}
                  />
                </Link>
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
