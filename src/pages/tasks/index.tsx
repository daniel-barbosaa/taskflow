import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";

import { Flex, Box, Text } from "@chakra-ui/react";
import { ButtonAddNew } from "@/src/components/ButtonAddNew";
import { TableTasks } from "@/src/components/TableTasks";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh" position="relative">
      <Header />
      <ButtonAddNew>Adicionar tarefas</ButtonAddNew>
      <Flex maxW={1280} mx="left">
        <Sidebar />
        <Flex
          as="section"
          padding="40px 40px 0 70px"
          w="100%"
          direction="column"
          gap="3rem"
        >
          <Flex
            justify="space-between"
            bg="white"
            p="20px 50px"
            borderRadius="8px"
            shadow="0 2px 8px 0 #0000001d"
          >
            <Flex direction="column" gap="10px">
              <Flex
                w="30px"
                h="30px"
                bg="#38cb898f"
                borderRadius="50%"
                p="2px"
                align="center"
                justify="center"
                border="1px solid #38cb892d"
              >
                <Text
                  className="material-symbols-outlined"
                  fontSize="xl"
                  color="#38CB89"
                >
                  check
                </Text>
              </Flex>
              <Text color="gray.500">Finalizado</Text>
              <Text color="gray.500" fontWeight="bold">
                10
              </Text>
            </Flex>
            <Flex direction="column" gap="10px">
              <Flex
                w="30px"
                h="30px"
                bg="#a361ff83"
                borderRadius="50%"
                p="2px"
                align="center"
                justify="center"
                border="1px solid #a361ff1f"
              >
                <Text
                  className="material-symbols-outlined"
                  fontSize="xl"
                  color="#A461FF"
                >
                  update
                </Text>
              </Flex>
              <Text color="gray.500"> Em andamento</Text>
              <Text color="gray.500" fontWeight="bold">
                10
              </Text>
            </Flex>
            <Flex direction="column" gap="10px">
              <Flex
                w="30px"
                h="30px"
                bg="#ffc75860"
                borderRadius="50%"
                p="3px"
                align="center"
                justify="center"
                border="1px solid #ffc75826"
              >
                <Text
                  className="material-symbols-outlined"
                  fontSize="xl"
                  color="#ffc758"
                >
                  draft
                </Text>
              </Flex>
              <Text color="gray.500">Na fila</Text>
              <Text color="gray.500" fontWeight="bold">
                10
              </Text>
            </Flex>
          </Flex>

          <Box as="section">
            <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="10px">
              Tarefas
            </Text>
            <TableTasks />
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
