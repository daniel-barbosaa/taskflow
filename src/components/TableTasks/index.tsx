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
  Accordion,
  AccordionItem,
  Heading,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { ActionPopoverTasks } from "../ActionsPopoverTasks";
import moment from "moment";
import "moment/locale/pt-br";
import { useManagementTask } from "@/src/contexts/ManagementOfTask";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

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
  const { setTaskId, tasks, loaded } = useManagementTask();

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
                <Accordion allowMultiple>
                  <AccordionItem border="none" maxW={270}>
                    <SkeletonText noOfLines={1} isLoaded={loaded}>
                      <h2>
                        <AccordionButton
                          p="4px"
                          sx={{
                            _hover: {
                              bg: "none",
                            },
                          }}
                        >
                          <Flex gap="5px">
                            <AccordionIcon />
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
                          </Flex>
                        </AccordionButton>
                      </h2>
                    </SkeletonText>

                    <AccordionPanel m="0" pb={4}>
                      <SkeletonText noOfLines={1} isLoaded={loaded}>
                        <Text whiteSpace="balance" textTransform="lowercase">
                          {task.taskName}
                        </Text>
                      </SkeletonText>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </Td>
              <Td>
                <SkeletonText noOfLines={1} isLoaded={loaded}>
                  {task.projectName}
                </SkeletonText>
              </Td>
              <Td>
                <SkeletonText noOfLines={1} isLoaded={loaded}>
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
                        {task.status === "finalizado"
                          ? "check"
                          : task.status === "na fila"
                          ? "draft"
                          : "update"}
                      </Text>
                    </Flex>
                    {task.status === "finalizado"
                      ? "Finalizado"
                      : task.status === "na fila"
                      ? "Na fila"
                      : "Em progresso"}
                  </Flex>
                </SkeletonText>
              </Td>

              <Td isNumeric>
                {" "}
                <SkeletonText noOfLines={1} isLoaded={loaded}>
                  {moment(task.updatedAt).fromNow()}
                </SkeletonText>
              </Td>
              <Td
                isNumeric
                onClick={() => {
                  setTaskId(task.id);
                }}
              >
                <ActionPopoverTasks
                  taskId={task.id}
                  projectId={task.projectId}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
