import { Header } from "@/src/components/Header";
import { ProjectChart } from "@/src/components/ProjectChart";
import { Sidebar } from "@/src/components/Sidebar";
import { TableProjects } from "@/src/components/TableProjects";
import { TasksCharts } from "@/src/components/TasksCharts";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import { ModalNewProject } from "@/src/components/ModalNewProject";
import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Progress,
} from "@chakra-ui/react";
import _ from "lodash";
import moment from "moment";
import "moment/locale/pt-br";
import { useModal } from "@/src/contexts/ModalControlProject";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

// Adicinar autenticalçao

export default function Dashboard() {
  const { onOpen, setModalOfInfo, setModalType } = useModal();
  const { projects, loaded } = useManagementProject();
  const { user } = useAuth();

  console.log(projects, user);

  const sortedProjects = projects
    .sort((a, b) => (a.taskCount ? -b.progress : 0))
    .slice(0, 3);

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <ModalNewProject />
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
              <Box
                onClick={() => {
                  onOpen();
                  setModalOfInfo(true);
                  setModalType("add");
                }}
                maxW={200}
                sx={{
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, background 0.3s ease-in-out",
                  cursor: "pointer",
                  background: " rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  padding: "20px",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  _hover: {
                    transform: "scale(1.02)",
                    border: "1px solid rgba(255, 255, 255, 0.4)",
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <Heading as="h2" size="md">
                  Adicionar projeto
                </Heading>
                <Text color="gray.500" mt="10px">
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
                >
                  <Box
                    as="button"
                    w="40px"
                    h="40px"
                    bg="#3A84FF"
                    borderRadius="50%"
                  >
                    <Text fontSize="20px" color="#ffffff">
                      +
                    </Text>
                  </Box>
                  <Text color="#3A84FF" fontWeight="bold">
                    Criar novo projeto
                  </Text>
                </Flex>
              </Box>
              {sortedProjects.map((project) => (
                <Box
                  maxW={200}
                  bg="#ffffff"
                  p="15px"
                  borderRadius="8px"
                  shadow="0 2px 8px #00000014"
                  key={project.name}
                >
                  <SkeletonText noOfLines={1} isLoaded={loaded}>
                    <Text color="gray.500" fontSize="sm">
                      {moment(project.createdAt).format("DD [de] MMM, YYYY")}
                    </Text>
                  </SkeletonText>
                  <SkeletonText
                    noOfLines={1}
                    skeletonHeight={4}
                    isLoaded={loaded}
                  >
                    <Text
                      fontSize="2xl"
                      color="gray.700"
                      fontWeight="bold"
                      textAlign="center"
                      mt="25px"
                    >
                      {_.capitalize(project.name)}
                    </Text>
                  </SkeletonText>
                  <SkeletonText
                    noOfLines={1}
                    skeletonHeight={2}
                    isLoaded={loaded}
                  >
                    <Text
                      fontSize="sm"
                      color="gray.500"
                      textAlign="center"
                      mt="5px"
                    >
                      App
                    </Text>
                  </SkeletonText>

                  <Box mt="60px">
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={2}
                      isLoaded={loaded}
                      w={70}
                    >
                      <Text fontSize="sm" fontWeight="500" color="gray.500">
                        Tarefas: {project.taskCount}
                      </Text>
                    </SkeletonText>
                  </Box>
                  <Box mt="10px">
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={2}
                      isLoaded={loaded}
                      w={70}
                    >
                      <Text fontSize="sm" fontWeight="600" color="gray.700">
                        Progresso
                      </Text>
                    </SkeletonText>

                    <Progress
                      value={project.progress}
                      size="xs"
                      colorScheme="blue"
                      mt="5px"
                      borderRadius="8px"
                    />
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={2}
                      isLoaded={loaded}
                    >
                      <Text
                        textAlign="right"
                        fontSize="sm"
                        fontWeight="bold"
                        color="gray.700"
                        mt="5px"
                      >
                        {project.progress}%
                      </Text>
                    </SkeletonText>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Flex>

          <Box>
            <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="10px">
              {projects.length != 0 ? "Projetos recentes" : ""}
            </Text>
            <TableProjects />
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
