import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
  Box,
  Text,
} from "@chakra-ui/react";

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
            <Th>Projeto</Th>
            <Th>Status</Th>
            <Th isNumeric>Ultima atualização</Th>
          </Tr>
        </Thead>
        <Tbody color="gray.500">
          <Tr>
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
          </Tr>
          <Tr>
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
          </Tr>
          <Tr>
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
                Em progresso
              </Flex>
            </Td>
            <Td isNumeric>ontem</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
