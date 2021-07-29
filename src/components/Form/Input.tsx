import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import React from 'react';

interface IInput extends ChakraInputProps {
  name: string;
  placeholder: string;
}

const Input: React.FC<IInput> = ({ name, placeholder, ...rest }) => {
  return (
    <ChakraInput
      name={name}
      id={name}
      focusBorderColor="pink.500"
      bgColor="gray.900"
      variant="filled"
      _hover={{ bgColor: 'gray.900' }}
      size="lg"
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
