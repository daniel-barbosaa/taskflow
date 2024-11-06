import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import { Flex, Box, Text } from "@chakra-ui/react";
import { TableTasks } from "@/src/components/TableTasks";
import { ModalNewTask } from "@/src/components/ModalNewTask";
import { AlertOfDeleteTask } from "@/src/components/AlertOfDeleteTask";
import { useModal } from "../../contexts/ModalControlProject";
import { useManagementTask } from "@/src/contexts/ManagementOfTask";

export default function Dashboard() {
  const { modalType } = useModal();
  const { tasks } = useManagementTask();
  const existsTasks = tasks.length >= 1;

  let taskInLine = [];
  let taskInProgress = [];
  let taskFinished = [];

  tasks.forEach((task) => {
    switch (task.status) {
      case "na fila":
        taskInLine.push(task);
        break;
      case "em progresso":
        taskInProgress.push(task);
        break;
      case "finalizado":
        taskFinished.push(task);
        break;
    }
  });

  return (
    <Flex direction="column" h="100vh" position="relative">
      <Header />
      <ModalNewTask />
      {modalType === "delete" && <AlertOfDeleteTask />}
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
                {taskFinished.length}
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
                {taskInProgress.length}
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
                {taskInLine.length}
              </Text>
            </Flex>
          </Flex>

          <Box as="section">
            {existsTasks ? (
              <>
                <Text
                  fontSize="sm"
                  color="gray.500"
                  fontWeight="normal"
                  mb="10px"
                >
                  Tarefas
                </Text>
                <TableTasks />
              </>
            ) : (
              <Flex
                flexDirection="column"
                align="center"
                justify="center"
                as="section"
                mt="30px"
                gap="10px"
              >
                <Text fontSize="xl" fontWeight="400" color="gray.600">
                  Nenhuma tarefa por enquanto. Que tal começar com a primeira?
                </Text>
                <Text fontWeight="400" color="gray.500" mt="10px">
                  Crie suas tarefas com apenas um clique!
                </Text>

                <Text
                  className="material-symbols-outlined"
                  fontSize="7xl"
                  color="#9f9fa47b"
                >
                  add_task
                </Text>
              </Flex>
            )}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}
