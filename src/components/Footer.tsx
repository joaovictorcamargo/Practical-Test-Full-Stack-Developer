import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import CanDoCard from "../components/CanDoCard";
import Ico_Drag from "../assets/ico_drag.svg";
import Ico_Premade from "../assets/ico_premade.svg";
import Ico_Platform from "../assets/ico_platform.svg";
import Ico_Odemand from "../assets/ico_odemand.svg";
import Ico_Multiple from "../assets/ico_multiple.svg";
import Ico_Share from "../assets/ico_share.svg";
import { SimpleButton } from "../components/SimpleButton";

function Footer() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Flex
        flexDir="column"
        pt={["1px", "10px", "51px", "81px"]}
        mt="73px"
        w="1054px"
        h={["2150", "2150", "1200", "1200"]}
        bgColor="purple.200"
        borderRadius="24px"
        mb="121px"
      >
        <Text
          textAlign="center"
          fontSize="34px"
          fontWeight="bold"
          color="white.100"
          mb="55px"
        >
          Create effective science figures in minutes
        </Text>
        <Text
          textAlign="center"
          fontSize={["15px", "15px", "20px", "20px"]}
          fontWeight="regular"
          color="white.100"
          mb={["20px", "30px", "94px", "94px"]}
        >
          We built Mind the Graph for simplicity. The platform is easy to use
          and just about anybody
          <br /> can use it to create great infographics and presentations -
          from beginners to professionals, <br /> individuals to groups and
          small labs to large organisations
        </Text>

        <Flex
          mb={["1px", "15px", "81px", "81px"]}
          alignItems="center"
          flexDir={["column", "column", "row", "row"]}
          justifyContent="space-evenly"
        >
          <CanDoCard
            text2size={["15px", "17px", "20px", "20px"]}
            fontweighttext2="regular"
            text2color="white.100"
            text1size={["17px", "20px", "24px", "24px"]}
            text1color="white.100"
            image={<Ico_Drag />}
            text1={<>Drag and Drop</>}
            text2={
              <>
                Easily select and
                <br /> manage illustrations, <br /> text and templates
              </>
            }
          />
          <CanDoCard
            text2size={["15px", "17px", "20px", "20px"]}
            fontweighttext2="regular"
            text2color="white.100"
            text1size={["17px", "20px", "24px", "24px"]}
            text1color="white.100"
            image={<Ico_Premade />}
            text1={<>Pre-Made Resources</>}
            text2={
              <>
                Don’t waste time!
                <br /> Use our templates and just
                <br /> customize colours, text etc
              </>
            }
          />
          <CanDoCard
            text2size={["15px", "17px", "20px", "20px"]}
            fontweighttext2="regular"
            text2color="white.100"
            text1size={["17px", "20px", "24px", "24px"]}
            text1color="white.100"
            image={<Ico_Platform />}
            text1={<>Online Platform</>}
            text2={
              <>
                Access your creations
                <br /> at any time and from <br /> anywhere
              </>
            }
          />
        </Flex>

        <Flex
          alignItems="center"
          justifyContent="space-evenly"
          flexDir={["column", "column", "row", "row"]}
        >
          <CanDoCard
            text2size={["15px", "17px", "20px", "20px"]}
            fontweighttext2="regular"
            text2color="white.100"
            text1size={["17px", "20px", "24px", "24px"]}
            text1color="white.100"
            image={<Ico_Odemand />}
            text1={
              <>
                On-demand
                <br /> Illustrations
              </>
            }
            text2={
              <>
                Don’t find exactly what <br /> you need? We will design <br />
                it for you!
              </>
            }
          />
          <CanDoCard
            text2size={["15px", "17px", "20px", "20px"]}
            fontweighttext2="regular"
            text2color="white.100"
            text1size={["17px", "20px", "24px", "24px"]}
            text1color="white.100"
            image={<Ico_Multiple />}
            text1={
              <>
                Multiple Sizing
                <br /> Options
              </>
            }
            text2={
              <>
                Ready-to-go templates
                <br />
                in all popular sizes
              </>
            }
          />
          <CanDoCard
            text2size={["15px", "17px", "20px", "20px"]}
            fontweighttext2="regular"
            text2color="white.100"
            text1size={["17px", "20px", "24px", "24px"]}
            text1color="white.100"
            image={<Ico_Share />}
            text1={<>Share creations</>}
            text2={
              <>
                Share your creations
                <br /> with your team or
                <br /> other users
              </>
            }
          />
        </Flex>

        <Flex alignItems="center" justifyContent="center">
          <SimpleButton
            fontSizeText={["10px", "12px", "16px", "16px"]}
            text={"EXPLORE MIND THE GRAPH"}
            width={["200px", "220px", "290px", "290px"]}
            variant={"outline"}
            borderColor={"with.100"}
            height={"40px"}
            borderRadius={"20px"}
            color={"white.100"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Footer;
