import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import CanDoCard from "../components/CanDoCard";
import Image_2 from "../assets/image_2.svg";
import Image_3 from "../assets/image_3.svg";
import Image_1 from "../assets/image_1.svg";

function CardsSection() {
  const oii = ">";
  return (
    <>
      <Flex
        mt="6.125rem"
        mb="5.5rem"
        alignItems="center"
        justifyContent="center"
      >
        <Text
          textAlign="center"
          fontSize="2.125rem"
          fontWeight="bold"
          color="purple.100"
        >
          Visualize what Mind the Graph can do for you
        </Text>
      </Flex>

      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        flexDir={["column", "column", "row", "row"]}
      >
        <CanDoCard
          text3Size={["0.875rem", "1rem", "1.25rem", "1.25rem"]}
          text2size={["0.875rem", "1rem", "1.25rem", "1.25rem"]}
          fontweighttext2="medium"
          text1size={["1rem", "1.25rem", "1.5rem", "1.5rem"]}
          text3={<>{oii} LEARN MORE</>}
          text2color="black.100"
          text1color="purple.100"
          image={<Image_2 />}
          text1={
            <>
              Graphical Abstracts
              <br />
              and Infographics
            </>
          }
          text2={
            <>
              Improve your papers impact <br />
              and visibility through quality visual
              <br /> communication
            </>
          }
        />

        <Flex
          alignItems="center"
          justifyContent="center"
          flexDir="column"
          mb="0.75rem"
        >
          <CanDoCard
            text3Size={["0.875rem", "1rem", "1.25rem", "1.25rem"]}
            text2size={["0.875rem", "1rem", "1.25rem", "1.25rem"]}
            fontweighttext2="medium"
            text1size={["1rem", "1.25rem", "1.5rem", "1.5rem"]}
            text3={<>{oii} LEARN MORE</>}
            text2color="black.100"
            text1color="purple.100"
            image={<Image_3 />}
            text1={
              <>
                Scientific Poster
                <br /> in a few clicks
              </>
            }
            text2={
              <>
                Add visual impact to your
                <br /> posters with scientific
                <br /> illustrations and graphics
              </>
            }
          />
        </Flex>

        <CanDoCard
          text3Size={["0.875rem", "1rem", "1.25rem", "1.25rem"]}
          text2size={["0.875rem", "1rem", "1.25rem", "1.25rem"]}
          fontweighttext2="medium"
          text1size={["1rem", "1.25rem", "1.5rem", "1.5rem"]}
          text3={<>{oii} LEARN MORE</>}
          text2color="black.100"
          text1color="purple.100"
          image={<Image_1 />}
          text1={
            <>
              Make better
              <br /> Slide Presentation
            </>
          }
          text2={
            <>
              Transform your lectures,
              <br /> meetings and classes into
              <br /> high-impact visual experiences
            </>
          }
        />
      </Flex>
    </>
  );
}

export default CardsSection;
