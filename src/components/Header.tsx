import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import LogoMindTheGraph from "../assets/logo_mindthegraph.svg";
import { SimpleButton } from "../components/SimpleButton";
import { Options } from "./Options";

export function Header() {
  const [isLargerThan880] = useMediaQuery("(min-width: 880px)");
  const [isLargerThan760] = useMediaQuery("(min-width: 760px)");

  return (
    <Flex justifyContent="space-between">
      <LogoMindTheGraph />
      <Flex alignItems="center">
        {isLargerThan760 ? (
          <>
            <Text as="button" color="white.100" fontWeight="bold">
              Templates
            </Text>
            <Flex mx="2.5rem">
              <Text as="button" color="white.100" fontWeight="bold">
                Pricing
              </Text>
            </Flex>

            <Text as="button" color="white.100" fontWeight="bold">
              Blog
            </Text>
            <Flex mx="2.5rem">
              <Text as="button" color="white.100" fontWeight="bold">
                Jobs
              </Text>
            </Flex>
          </>
        ) : (
          <>
            <Flex flexDir="column" alignItems="center">
              <Text as="button" color="white.100" fontWeight="bold">
                Templates
              </Text>
              <Flex mx="2.5rem" mt="1rem">
                <Text as="button" color="white.100" fontWeight="bold">
                  Pricing
                </Text>
              </Flex>
            </Flex>
            <Flex flexDir="column" alignItems="center">
              <Text as="button" color="white.100" fontWeight="bold">
                Blog
              </Text>
              <Flex mx="2.5rem" mt="1rem">
                <Text as="button" color="white.100" fontWeight="bold">
                  Jobs
                </Text>
              </Flex>
            </Flex>
          </>
        )}
        {isLargerThan880 ? (
          <>
            <Flex mr="1rem">
              <SimpleButton
                text={"Login"}
                width={"100px"}
                variant={"outline"}
                borderColor={"with.100"}
                height={"40px"}
                borderRadius={"20px"}
                color={"white.100"}
              />
            </Flex>

            <SimpleButton
              text={"Sign up free"}
              width={"180px"}
              variant={"solid"}
              height={"40px"}
              borderRadius={"20px"}
              bgColor={"purple.100"}
              color={"white.100"}
            />
          </>
        ) : (
          <>
            <Flex flexDir="column" alignItems="center">
              <SimpleButton
                text={"Sign up free"}
                width={"180px"}
                variant={"solid"}
                height={"40px"}
                borderRadius={"20px"}
                bgColor={"purple.100"}
                color={"white.100"}
              />
              <Flex mt="1rem">
                <SimpleButton
                  text={"Login"}
                  width={"100px"}
                  variant={"outline"}
                  borderColor={"with.100"}
                  height={"40px"}
                  borderRadius={"20px"}
                  color={"white.100"}
                />
              </Flex>
            </Flex>
          </>
        )}
      </Flex>
    </Flex>
  );
}
