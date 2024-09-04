import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { Flex, SimpleGrid, Box, Heading, Text, Button, Progress } from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex maxW={1280} mx="left" >
        <Sidebar />
        <Flex padding="40px 40px 0 40px" w="100%"  maxH="300px">
          <Box maxW={200}>
            <Heading as="h2" size="md">
              Adicionar projeto
            </Heading>
            <Text color="gray.500" mt="5px">
              Criar um novo projeto no taskFlow, vincule ao seu ambiente de
              trabalho local.
            </Text>
            <Flex
              align="center"
              as="div"
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
                  cursor: "pointer",
                  _hover: {
                    color: "#1e6ae4",
                  },
                  transition: "all .3s ease",
                }}
              >
                Criar novo projeto
              </Text>
            </Flex>
          </Box>
          <SimpleGrid flex="1" marginLeft="2rem" minChildWidth='200px'  gap="10px"  >
          <Box  maxW={200} bg="#ffffff" p="15px" borderRadius="8px" shadow="0 2px 8px #00000014" >
            <Text color="gray.500" fontSize="sm">
              20 de jul, 2024
            </Text>
            <Text fontSize="2xl" color="gray.700" fontWeight="bold" textAlign="center" mt="25px">Ignews</Text>
            <Text fontSize="sm" color="gray.500" textAlign="center" mt="5px">Blog</Text>
            <Box mt="60px">
              <Text fontSize="sm" fontWeight="600" color="gray.700">Progresso</Text>
              <Progress value={20} size='xs' colorScheme='blue' mt="5px" borderRadius="8px" />
              <Text textAlign="right" fontSize="sm" fontWeight="bold" color="gray.700" mt="5px">50%</Text>
            </Box>
          </Box>
          <Box maxW={200}   bg="#ffffff" p="15px" borderRadius="8px" shadow="0 2px 8px #00000014" >
            <Text color="gray.500" fontSize="sm">
              20 de jul, 2024
            </Text>
            <Text fontSize="2xl" color="gray.700" fontWeight="bold" textAlign="center" mt="25px">Ignews</Text>
            <Text fontSize="sm" color="gray.500" textAlign="center" mt="5px">Blog</Text>
            <Box mt="60px">
              <Text fontSize="sm" fontWeight="600" color="gray.700">Progresso</Text>
              <Progress value={20} size='xs' colorScheme='blue' mt="5px" borderRadius="8px" />
              <Text textAlign="right" fontSize="sm" fontWeight="bold" color="gray.700" mt="5px">50%</Text>
            </Box>
          </Box>
          <Box  maxW={200}   bg="#ffffff" p="15px" borderRadius="8px" shadow="0 2px 8px #00000014" >
            <Text color="gray.500" fontSize="sm">
              20 de jul, 2024
            </Text>
            <Text fontSize="2xl" color="gray.700" fontWeight="bold" textAlign="center" mt="25px">Ignews</Text>
            <Text fontSize="sm" color="gray.500" textAlign="center" mt="5px">Blog</Text>
            <Box mt="60px">
              <Text fontSize="sm" fontWeight="600" color="gray.700">Progresso</Text>
              <Progress value={20} size='xs' colorScheme='blue' mt="5px" borderRadius="8px" />
              <Text textAlign="right" fontSize="sm" fontWeight="bold" color="gray.700" mt="5px">50%</Text>
            </Box>
          </Box>
        </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
