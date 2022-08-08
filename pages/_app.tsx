// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Box, ChakraProvider, HStack, useColorMode } from "@chakra-ui/react";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  // return <Component {...pageProps} />
  // import * as React from 'react'
  // const { colorMode, toggleColorMode } = useColorMode();
  // console.log("this is color ", colorMode);
  // 1. import `ChakraProvider` component
  const { colorMode, toggleColorMode } = useColorMode();

  // function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider theme={theme}>
      <HStack>
        <Box width={[0, 0.5, 0.3]} color={"black"}>
          {" "}
          {/* <MainSideBar> */}
          <Component {...pageProps} />
          {/* </MainSideBar> */}
        </Box>

        {/* <Box width={[0, 0.5, 0.3]}> </Box> */}
      </HStack>
    </ChakraProvider>
  );
  // }
}

export default MyApp;
