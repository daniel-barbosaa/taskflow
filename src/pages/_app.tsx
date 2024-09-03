import "@/styles/globals.css";
import 'material-icons/iconfont/material-icons.css';
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
