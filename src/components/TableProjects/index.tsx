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
  useBreakpointValue,
  
} from "@chakra-ui/react";
import { SkeletonText } from "../../components/ui/skeleton";

import { useManagementProject } from "../../contexts/ManagementOfProject";
import moment from "moment";
import Image from "next/image";
import AddProject from "../../assets/addDraw.png";

export function TableProjects() {
  moment.locale("pt-br");
  const { projects, loaded } = useManagementProject();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    md: true,
  });

  const justThreeRecent = projects.slice(0, 3);

  if (projects.length === 0) {
    return (
      <Flex direction={["column", "row"]} justify="center">
        {isWideVersion && (
          <Text fontSize="xl" maxW={200} color="gray.500" fontWeight="normal">
            Nenhum projeto foi criado ainda. Crie seu primeiro projeto agora!
          </Text>
        )}

        <Image src={AddProject} alt="add project" width={300}></Image>
      </Flex>
    );
  }

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
            <Tr key={project.id}>
              <Td height="100%">
                <SkeletonText noOfLines={1} h="4" isLoaded={loaded}>
                  {project.name}
                </SkeletonText>
              </Td>
              <Td height="100%">
                <SkeletonText noOfLines={1} h={5} isLoaded={loaded}>
                  <Flex align="center" gap="5px">
                    <Flex align="center" gap="5px"></Flex>

                    <Flex
                      bg={
                        project.status === "finalizado"
                          ? "#38cb898f"
                          : project.status === "na fila"
                          ? "#ffc75860"
                          : "#a361ff83"
                      }
                      borderRadius="50%"
                      p="2px"
                      align="center"
                      justify="center"
                      border={
                        project.status === "finalizado"
                          ? "1px solid #38cb892d"
                          : project.status === "na fila"
                          ? "1px solid #ffc75826"
                          : "1px solid #a361ff1f"
                      }
                    >
                      <Text
                        className="material-symbols-outlined"
                        fontSize="sm"
                        color={
                          project.status === "finalizado"
                            ? "#38CB89"
                            : project.status === "na fila"
                            ? "#ffc758"
                            : "#A461FF"
                        }
                      >
                        {project.status === "finalizado"
                          ? "check"
                          : project.status === "na fila"
                          ? "draft"
                          : "update"}
                      </Text>
                    </Flex>

                    {project.status === "finalizado"
                      ? "Finalizado"
                      : project.status === "na fila"
                      ? "Na fila"
                      : "Em progresso"}
                  </Flex>
                </SkeletonText>
              </Td>
              <Td isNumeric height="100%">
                <SkeletonText noOfLines={1}  h="4" isLoaded={loaded}>
                  {moment(project.updatedAt).fromNow()}
                </SkeletonText>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
