import "@/styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ModalProvider } from "../contexts/ModalControlProject";
import { ProjectProvider } from "../contexts/ManagementOfProject";
import "../services/firebase";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <ModalProvider>
          <ProjectProvider>
            <Component {...pageProps} />
          </ProjectProvider>
        </ModalProvider>
      </ChakraProvider>
    </>
  );
}
