import { Inter } from "next/font/google";
import {
  Flex,
  Input,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Box,
  InputGroup,
  InputRightElement,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";

import { SignInButton } from "../components/SignInButton";
import { SignInButtonGoogle } from "../components/SignInButtonGoogle";
import Image from "next/image";
import IllustrationImage from "../assets/illustration.png";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const andBigScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Flex>
      <Flex
        w={andBigScreen ? "50%" : "full"}
        bg="white"
        h="100vh"
        direction="column"
        padding="20px"
      >
        <Heading as="h1" size="xs">
          taskFlow
        </Heading>
        <Flex justify="center" h="100%" align={andBigScreen ? 'center' : 'auto'}  mt={andBigScreen ? '0' :  '2rem'}>
          <Box>
            <Flex direction="column" gap="10px" w={andBigScreen ? "full" : 'xs'}>
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
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={show ? "text" : "password"}
                      placeholder="Sua senha"
                    />
                    <InputRightElement width="4.5rem">
                      <Button
                        h="1.75rem"
                        size="sm"
                        onClick={handleClick}
                        bg="transparent"
                        sx={{
                          _hover: {
                            bg: "transparent",
                          },
                        }}
                      >
                        {show ? (
                          <Text
                            className="material-icons-outlined"
                            color="#718096"
                            fontSize="16px"
                          >
                            visibility_off
                          </Text>
                        ) : (
                          <Text
                            className="material-icons-outlined"
                            color="#718096"
                            fontSize="16px"
                          >
                            visibility
                          </Text>
                        )}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <SignInButton />
                  <SignInButtonGoogle />
                </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      {andBigScreen && (
        <Flex width="50%" justify="center">
          <Flex align="center">
            <Box position="relative" marginBottom="6rem">
              <Image src={IllustrationImage} alt="ilustração" />
            </Box>
            <Box
              position="absolute"
              bottom="0"
              right="0"
              width="50%"
              h="50%"
              bg="transparent"
              backdropFilter="blur(10px)"
              opacity="0.8"
            ></Box>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}
