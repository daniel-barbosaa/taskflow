import { Inter } from "next/font/google";
import {
  Flex,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Box,
} from "@chakra-ui/react";
import { SignInButton } from "../components/SignInButton";
import { SignInButtonGoogle } from "../components/SignInButtonGoogle";
import Image from "next/image";
import IllustrationImage from "../assets/illustration.png"

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  return (
    <Flex>
      <Flex w="50%" bg="white" h="100vh" direction="column" padding="20px">
        <Heading as="h1" size="xs">
          taskFlow
        </Heading>
        <Flex justify="center" h="100%" align="center">
          <Box>
            <Flex direction="column" gap="10px">
              <Heading as="h3">Olá! Pronto para começar?</Heading>
              <Heading as="h4" size="2xs" fontWeight="500" color="gray.600">
                Gerencie seus projetos e tarefas de forma simples e eficiente.
              </Heading>
              <Text as="p" fontSize="xs" fontWeight="600" color="gray.500">
                Estamos felizes em vê-lo!
              </Text>

              <FormControl marginTop="1.5rem">
                <FormLabel fontSize="md" color="gray.600">
                  Email
                </FormLabel>
                <Input type="email" placeholder="Informe seu e-mail" />
                <FormLabel fontSize="md" color="gray.600" marginTop="1rem">
                  Senha
                </FormLabel>
                <Input type="email" placeholder="Sua senha" />
                <SignInButton />
                <SignInButtonGoogle />
              </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Flex width="50%" justify="center">
        <Flex align="center" >
          <Box position="relative" marginBottom="6rem">
           <Image src={IllustrationImage} alt="ilustração"/>
          </Box>
          <Box position="absolute" bottom="0" right="0" width="50%" h="50%" bg="transparent" backdropFilter="blur(10px)" opacity="0.8"></Box>
        </Flex>
      </Flex>

    </Flex>
  );
}
