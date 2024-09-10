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
  Button,
} from "@chakra-ui/react";
import { ActionPopover } from "../ActionsPopover";
import { ActionPopoverTasks } from "../ActionsPopoverTasks";

export function TableTasks() {
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
          <Tr cursor="pointer">
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
                {`Esta é uma frase longa, mas eu quero mostrar apenas parte dela.`.substring(
                  0,
                  35
                )}
                ...
              </Text>
            </Td>
            <Td>Ignews</Td>
            <Td>
              <Flex align="center" gap="5px">
                <Flex
                  bg="#38cb898f"
                  borderRadius="50%"
                  p="2px"
                  align="center"
                  justify="center"
                  border="1px solid #38cb892d"
                >
                  <Text
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color="#38CB89"
                  >
                    check
                  </Text>
                </Flex>
                Finalizado
              </Flex>
            </Td>
            <Td isNumeric>há 1 minuto</Td>
            <Td isNumeric>
              <ActionPopoverTasks />
            </Td>
          </Tr>
          <Tr>
            <Td>Remover bug</Td>
            <Td>Dahsgo.</Td>
            <Td>
              <Flex align="center" gap="5px">
                <Flex
                  bg="#ffc75860"
                  borderRadius="50%"
                  p="2px"
                  align="center"
                  justify="center"
                  border="1px solid #ffc75826"
                >
                  <Text
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color="#ffc758"
                  >
                    draft
                  </Text>
                </Flex>
                Na fila
              </Flex>
            </Td>
            <Td isNumeric>3 horas atrás</Td>
            <Td isNumeric>
              <ActionPopoverTasks />
            </Td>
          </Tr>
          <Tr>
            <Td>Nova tela</Td>
            <Td>MyFintech</Td>
            <Td>
              {" "}
              <Flex align="center" gap="5px">
                <Flex
                  bg="#a361ff83"
                  borderRadius="50%"
                  p="2px"
                  align="center"
                  justify="center"
                  border="1px solid #a361ff1f"
                >
                  <Text
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color="#A461FF"
                  >
                    update
                  </Text>
                </Flex>
                Em andamento
              </Flex>
            </Td>
            <Td isNumeric>ontem</Td>
            <Td isNumeric>
              <ActionPopoverTasks />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
