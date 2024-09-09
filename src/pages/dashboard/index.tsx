import { Header } from "@/src/components/Header";
import { ProjectChart } from "@/src/components/ProjectChart";
import { Sidebar } from "@/src/components/Sidebar";
import { TableTasks } from "@/src/components/TableProjects";
import { TasksCharts } from "@/src/components/TasksCharts";
import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Button,
  Progress,
} from "@chakra-ui/react";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex maxW={1280} mx="left">
        <Sidebar />
        <Flex
          as="section"
          padding="40px 40px 0 70px"
          w="100%"
          direction="column"
          gap="3rem"
        >
          <Flex direction="column">
            {" "}
            <SimpleGrid flex="1" minChildWidth="200px" gap="10px">
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
              <Box
                maxW={200}
                bg="#ffffff"
                p="15px"
                borderRadius="8px"
                shadow="0 2px 8px #00000014"
              >
                <Text color="gray.500" fontSize="sm">
                  20 de jul, 2024
                </Text>
                <Text
                  fontSize="2xl"
                  color="gray.700"
                  fontWeight="bold"
                  textAlign="center"
                  mt="25px"
                >
                  Ignews
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  textAlign="center"
                  mt="5px"
                >
                  Blog
                </Text>
                <Box mt="60px">
                  <Text fontSize="sm" fontWeight="600" color="gray.700">
                    Progresso
                  </Text>
                  <Progress
                    value={20}
                    size="xs"
                    colorScheme="blue"
                    mt="5px"
                    borderRadius="8px"
                  />
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray.700"
                    mt="5px"
                  >
                    50%
                  </Text>
                </Box>
              </Box>
              <Box
                maxW={200}
                bg="#ffffff"
                p="15px"
                borderRadius="8px"
                shadow="0 2px 8px #00000014"
              >
                <Text color="gray.500" fontSize="sm">
                  20 de jul, 2024
                </Text>
                <Text
                  fontSize="2xl"
                  color="gray.700"
                  fontWeight="bold"
                  textAlign="center"
                  mt="25px"
                >
                  Ignews
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  textAlign="center"
                  mt="5px"
                >
                  Blog
                </Text>
                <Box mt="60px">
                  <Text fontSize="sm" fontWeight="600" color="gray.700">
                    Progresso
                  </Text>
                  <Progress
                    value={20}
                    size="xs"
                    colorScheme="blue"
                    mt="5px"
                    borderRadius="8px"
                  />
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray.700"
                    mt="5px"
                  >
                    50%
                  </Text>
                </Box>
              </Box>
              <Box
                maxW={200}
                bg="#ffffff"
                p="15px"
                borderRadius="8px"
                shadow="0 2px 8px #00000014"
              >
                <Text color="gray.500" fontSize="sm">
                  20 de jul, 2024
                </Text>
                <Text
                  fontSize="2xl"
                  color="gray.700"
                  fontWeight="bold"
                  textAlign="center"
                  mt="25px"
                >
                  Ignews
                </Text>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  textAlign="center"
                  mt="5px"
                >
                  Blog
                </Text>
                <Box mt="60px">
                  <Text fontSize="sm" fontWeight="600" color="gray.700">
                    Progresso
                  </Text>
                  <Progress
                    value={20}
                    size="xs"
                    colorScheme="blue"
                    mt="5px"
                    borderRadius="8px"
                  />
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray.700"
                    mt="5px"
                  >
                    50%
                  </Text>
                </Box>
              </Box>
            </SimpleGrid>
          </Flex>

          <Box>
            <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="10px">
              Projetos recentes
            </Text>
            <TableTasks />
          </Box>
          <SimpleGrid minChildWidth="400px" gap="2rem">
            <TasksCharts />
            <ProjectChart />
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
