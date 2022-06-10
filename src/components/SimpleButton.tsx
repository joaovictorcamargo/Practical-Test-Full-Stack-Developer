import { Button } from "@chakra-ui/react";

interface SimpleButtonProps {
  text: string;
  onClick?: () => void;
  borderColor?: string;
  borderRadius: string;
  bgColor?: string;
  color?: string;
  width: string;
  height: string;
  variant: string;
}

export const SimpleButton = ({
  text,
  borderColor,
  bgColor,
  borderRadius,
  color,
  width,
  height,
  onClick,
  variant,
}: SimpleButtonProps) => {
  return (
    <Button
      w={width}
      h={height}
      borderColor={borderColor}
      variant={variant}
      bgColor={bgColor}
      borderRadius={borderRadius}
      color={color}
      _hover={{
        borderColor: "gray.50",
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
