import "@/styles/globals.css";
import "material-icons/iconfont/material-icons.css";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ModalProvider } from "../contexts/ModalControlProject";
import { ProjectProvider } from "../contexts/ManagementOfProject";
import { TaskProvider } from "../contexts/ManagementOfTask";
import { AuthProvider } from "../contexts/Auth/AuthContext";
import "../services/firebase";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <AuthProvider>
          <ModalProvider>
            <ProjectProvider>
              <TaskProvider>
                <Component {...pageProps} />
              </TaskProvider>
            </ProjectProvider>
          </ModalProvider>
        </AuthProvider>
      </ChakraProvider>
    </>
  );
}
