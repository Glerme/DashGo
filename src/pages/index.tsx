import { NextPage } from 'next';
import Router from 'next/router';

import { Flex, Button, Stack } from '@chakra-ui/react';

import Input from '../components/Form/Input';

const SingIn: NextPage = () => {
  return (
    <>
      <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          p="8"
          borderRadius={8}
          flexDir="column"
        >
          <Stack spacing="4">
            <Input name="email" type="email" placeholder="Email" />

            <Input name="password" type="password" placeholder="Senha" />
          </Stack>
          <Button
            type="button"
            marginTop="6"
            colorScheme="pink"
            size="lg"
            onClick={() => Router.push('dashboard')}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default SingIn;
