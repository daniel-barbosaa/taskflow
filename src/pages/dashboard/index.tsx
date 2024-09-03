import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { Flex, SimpleGrid, Box, Heading, Text, Button } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%">
        <Sidebar />
        <Flex as="section" padding="40px" w="100%" h="15rem">
          <Box maxW={250}>
            <Heading as="h2" size="md">
              Adicionar projeto
            </Heading>
            <Text color="gray.500" mt="5px">
              Criar um novo projeto no taskFlow, vincule ao seu ambiente de
              trabalho local.
            </Text>
            <Button
              padding="0"
              bg="none"
              gap="10px"
              mt="20px"
              sx={{
                _hover: {
                  bg: "none",
                },
              }}
            >
              <Box
                as="button"
                w="40px"
                h="40px"
                bg="#3A84FF"
                borderRadius="50%"
                sx={{
                  _hover: {
                    bg: "#1e6ae4",
                  },
                  transition: "all .3s ease",
                }}
              >
                <Text fontSize="20px" color="#ffffff">
                  +
                </Text>
              </Box>
              <Text
                color="#3A84FF"
                fontWeight="bold"
                sx={{
                  _hover: {
                    color: "#1e6ae4",
                  },
                  transition: "all .3s ease",
                }}
              >
                Criar novo projeto
              </Text>
            </Button>
          </Box>
          <SimpleGrid minChildWidth="300px" flex="1" marginLeft="2rem" gap="0">
          <Box maxW={250} bg="#ffffff" h="100%">
            teste
          </Box>
          <Box maxW={250} bg="#ffffff">
            teste
          </Box>
          <Box maxW={250} bg="#ffffff">
            teste
          </Box>

        </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
