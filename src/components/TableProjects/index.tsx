import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Flex,
  Text,
} from "@chakra-ui/react";
import {useManagementProject} from '../../contexts/ManagementOfProject'
import moment from "moment";
import { useEffect, useState } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: string;
  createdAt?: any;
  updatedAt?: any;
}


export function TableProjects() {
  moment.locale("pt-br");
  const {projects} = useManagementProject()
  
  const justThreeRecent = projects.slice(0, 3)
  

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
          {justThreeRecent.map((project) => (
            <Tr>
            <Td>{project.name}</Td>
            <Td>
              <Flex align="center" gap="5px">
                <Flex
                  bg={project.status === "finalizado"
                    ? "#38cb898f"
                    : project.status === "na fila"
                    ? "#ffc75860"
                    : "#a361ff83"}
                  borderRadius="50%"
                  p="2px"
                  align="center"
                  justify="center"
                  border={project.status === "finalizado"
                    ? "1px solid #38cb892d"
                    : project.status === "na fila"
                    ? "1px solid #ffc75826"
                    : "1px solid #a361ff1f"}
                >
                  <Text
                    className="material-symbols-outlined"
                    fontSize="sm"
                    color={  project.status === "finalizado"
                      ? "#38CB89"
                      : project.status === "na fila"
                      ? "#ffc758"
                      : "#A461FF"}
                  >
                    {project.status === 'finalizado' ? 'check' : project.status === 'na fila' ? 'draft' : 'update'}
                  </Text>
                </Flex>
                {project.status === 'finalizado' ? 'Finalizado' : project.status === 'na fila' ? 'Na fila' : 'Em progresso'}
              </Flex>
            </Td>
            <Td isNumeric>{moment(project.updatedAt).fromNow()}</Td>
          </Tr>
          ))}
          {/* <Tr>
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
          </Tr> */}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
