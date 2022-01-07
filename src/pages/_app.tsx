import { NextPage } from 'next';
import Head from 'next/head';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Dashgo</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
