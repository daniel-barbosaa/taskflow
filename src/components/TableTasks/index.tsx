import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
} from "@chakra-ui/react";
import { ActionPopoverTasks } from "../ActionsPopoverTasks";
import { useEffect, useState } from "react";
import { getAllTasksByIdOfUser } from "@/src/services/projectService";
import moment from "moment";
import "moment/locale/pt-br"; 
import { useManagementTask } from "@/src/contexts/ManagementOfTask";

moment.locale("pt-br"); 

interface Task {
  id: string;
  taskName: string;
  status: string;
  projectName: string;
  projectId: string;
  createdAt?: any;
  updatedAt?: any;
}

export function TableTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const userId = "rFJ6ijVTQQPSjZshkPAh";
  const {setTaskId} = useManagementTask()

  useEffect(() => {
    getAllTasksByIdOfUser(userId, (projects) => {
      setTasks(projects);
    });
  }, [userId]);

  return (
    <TableContainer
      bg="#ffffff"
      borderRadius="8px"
      padding="5px 0 0"
      border="0.2px solid #cbd5e075"
    >
      <Table size="sm">
        <Thead>
          <Tr>
            <Th color="gray.500">Tarefa</Th>
            <Th color="gray.500">Projeto</Th>
            <Th color="gray.500">Status</Th>
            <Th isNumeric color="gray.500">
              Atualização
            </Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody color="gray.500">
          {tasks.map((task) => (
            <Tr cursor="pointer" key={task.id}>
              <Td>
                <Text
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    _after: {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      right: 0,
                      width: "100%",
                      height: "3rem",
                      bg: "linear-gradient( to right, transparent, white)",
                    },
                  }}
                >
                  {`${task.taskName}`.substring(0, 35)}
                  ...
                </Text>
              </Td>
              <Td>{task.projectName}</Td>
              <Td>
                <Flex align="center" gap="5px">
                  <Flex
                    bg={
                      task.status === "finalizado"
                        ? "#38cb898f"
                        : task.status === "na fila"
                        ? "#ffc75860"
                        : "#a361ff83"
                    }
                    borderRadius="50%"
                    p="2px"
                    align="center"
                    justify="center"
                    border={
                      task.status === "finalizado"
                        ? "1px solid #38cb892d"
                        : task.status === "na fila"
                        ? "1px solid #ffc75826"
                        : "1px solid #a361ff1f"
                    }
                  >
                    <Text
                      className="material-symbols-outlined"
                      fontSize="sm"
                      color={
                        task.status === "finalizado"
                          ? "#38CB89"
                          : task.status === "na fila"
                          ? "#ffc758"
                          : "#A461FF"
                      }
                    >
                      check
                    </Text>
                  </Flex>
                  {task.status === "finalizado"
                    ? "Finalizado"
                    : task.status === "na fila"
                    ? "Na fila"
                    : "Em progresso"}
                </Flex>
              </Td>
              <Td isNumeric>{moment(task.updatedAt).fromNow()}</Td>
              <Td isNumeric onClick={() => {
                setTaskId(task.id)
              }}>
                <ActionPopoverTasks taskId={task.id} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
