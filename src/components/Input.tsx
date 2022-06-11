import {
  Dispatch,
  forwardRef,
  ForwardRefRenderFunction,
  SetStateAction,
} from "react";
import { FieldError } from "react-hook-form";
import {
  Input as ChakraInput,
  FormLabel,
  FormControl,
  InputProps as ChakraInputProps,
  FormErrorMessage,
  Flex,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  placeholder?: string;
  width?: string;
  higth?: string;
  margin?: string;
  marginLabel?: string;
  marginAlert?: string;
  formMargin?: string;
  onChangeText?: Dispatch<SetStateAction<string>>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    label,
    placeholder,
    higth,
    marginLabel,
    margin,
    width,
    formMargin,

    onChangeText,
    marginAlert,

    error = null,
    ...rest
  },
  ref
) => {
  return (
    <Flex>
      <FormControl ml={formMargin} isInvalid={!!error}>
        {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

        <ChakraInput
          id={name}
          name={name}
          ref={ref}
          w={width}
          onChangeText={onChangeText}
          h={higth}
          focusBorderColor="black"
          bgColor="white"
          variant="filled"
          _hover={{
            bgColor: "white",
          }}
          placeholder={placeholder}
          borderColor="light.100"
          {...rest}
        />

        {!!error && (
          <Flex>
            <FormErrorMessage>{error.message}</FormErrorMessage>
          </Flex>
        )}
      </FormControl>
    </Flex>
  );
};

export const Input = forwardRef(InputBase);
