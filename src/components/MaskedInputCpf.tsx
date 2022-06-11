import { Input } from "@chakra-ui/react";
import React from "react";
import InputMask from "react-input-mask";

const onlyNumbers = (str) => str.replace(/[^0-9]/g, "");

const MaskedCpfInput = ({ value, onChange, placeholder }) => {
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        value: onlyNumbers(event.target.value),
      },
    });
  }
  return (
    <InputMask
      w="92"
      mask="999.999.999-99"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    >
      {(inputProps) => <Input {...inputProps} />}
    </InputMask>
  );
};

export default MaskedCpfInput;
