import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import Image from "next/image";
import Time from "../../assets/Time.png";
import Check from "../../assets/Done.png";
import FileImg from "../../assets/file.png";
import moment from "moment";
import "moment/locale/pt-br";
import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Progress,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import { ActionPopover } from "@/src/components/ActionsPopover";
import { ModalNewProject } from "@/src/components/ModalNewProject";
import { useModal } from "@/src/contexts/ModalControlProject";
import { AlertOfDeleteProject } from "@/src/components/AlertOfDeleteProject";
import { ProjectInfoModal } from "@/src/components/ProjectInfoModal";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";

export default function Dashboard() {
  const { setProjectInfo, projects, loaded } = useManagementProject();
  const { modalType } = useModal();

  const totalProjects = projects.length;

  let projectInLine = [];
  let projectInProgress = [];
  let projectFinished = [];

  projects.forEach((project) => {
    switch (project.status) {
      case "na fila":
        projectInLine.push(project);
        break;
      case "em progresso":
        projectInProgress.push(project);
        break;
      case "finalizado":
        projectFinished.push(project);
        break;
    }
  });

  return (
    <Flex direction="column" h="100vh" position="relative">
      <Header />
      <ModalNewProject />
      <ProjectInfoModal />
      {modalType === "delete" && <AlertOfDeleteProject />}
      <Flex maxW={1280} mx="left">
        <Sidebar />
        <Flex
          as="section"
          padding="40px 40px 0 70px"
          w="100%"
          direction="column"
          gap="3rem"
        >
          <Flex align="center" w="100%" justify="space-between">
            <Heading as="h2" size="md">
              Projetos
            </Heading>
            <Flex gap="5px" align="center">
              <Text fontSize="sm" color="gray.500" fontWeight="normal">
                Total de projetos
              </Text>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
              >
                {totalProjects}
              </Text>
            </Flex>
          </Flex>
          <SimpleGrid minChildWidth="300px" gap="10px">
            <Flex
              align="center"
              justify="space-between"
              maxW={270}
              borderBottom="1px solid #A461FF"
              pb="15px"
            >
              <Flex align="center" gap="10px">
                <Box
                  w="30px"
                  padding="5px"
                  bg="#ffffff"
                  borderRadius="50%"
                  shadow="0 2px 8px 0 #0000001d"
                >
                  <Image src={Time} alt="relogio" />
                </Box>
                <Text color="gray.700">Em andamento</Text>
              </Flex>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
                width={5}
                align="center"
              >
                {projectInProgress.length}
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              maxW={270}
              borderBottom="1px solid #FFC658"
              pb="15px"
            >
              <Flex align="center" gap="10px">
                <Box
                  w="30px"
                  padding="5px"
                  bg="#ffffff"
                  borderRadius="50%"
                  shadow="0 2px 8px 0 #0000001d"
                >
                  <Image src={FileImg} alt="relogio" />
                </Box>
                <Text color="gray.700">Na fila</Text>
              </Flex>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
                width={5}
                align="center"
              >
                {projectInLine.length}
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              maxW={270}
              borderBottom="1px solid #38CB89"
              pb="15px"
            >
              <Flex align="center" gap="10px">
                <Box
                  w="30px"
                  padding="5px"
                  bg="#ffffff"
                  borderRadius="50%"
                  shadow="0 2px 8px 0 #0000001d"
                >
                  <Image src={Check} alt="relogio" />
                </Box>
                <Text color="gray.700">Finalizado</Text>
              </Flex>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
                width={5}
                align="center"
              >
                {projectFinished.length}
              </Text>
            </Flex>
          </SimpleGrid>
          <SimpleGrid minChildWidth="300px" gap="10px">
            {projects.map((project) => (
              <Box
                cursor="pointer"
                key={project.id}
                maxW={270}
                bg="#ffffff"
                position="relative"
                p="15px"
                borderRadius="8px"
                shadow="0 1px 4px 0 #00000013"
                overflow="visible"
                //   sx={{
                //     transition: "transform 0.3s ease-in-out",
                //    _hover: {
                //       cursor: 'pointer',
                //       transform: "scale(1.02)",
                //    }
                //  }}
              >
                <Box
                  position="absolute"
                  right="4"
                  onClick={() => {
                    setProjectInfo({ ...project });
                  }}
                >
                  <ActionPopover projectId={project.id} />
                </Box>

                <Flex align="center" justify="space-between">
                  {project.status === "finalizado" && (
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={4}
                      isLoaded={loaded}
                    >
                      <Text
                        bg="#38cb898f"
                        fontSize="xs"
                        p="3px 7px"
                        borderRadius="8px"
                        color="#249261"
                      >
                        Finalizado
                      </Text>
                    </SkeletonText>
                  )}
                  {project.status === "na fila" && (
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={4}
                      isLoaded={loaded}
                    >
                      <Text
                        bg="#ffc75860"
                        fontSize="xs"
                        p="3px 7px"
                        borderRadius="8px"
                        color="#fab833"
                      >
                        Na fila
                      </Text>
                    </SkeletonText>
                  )}
                  {project.status === "em progresso" && (
                    <SkeletonText
                      noOfLines={1}
                      skeletonHeight={4}
                      isLoaded={loaded}
                    >
                      <Text
                        bg="#a361ff83"
                        fontSize="xs"
                        p="3px 7px"
                        borderRadius="8px"
                        color="#944cf8"
                      >
                        Em andamento
                      </Text>
                    </SkeletonText>
                  )}
                </Flex>
                <SkeletonText noOfLines={1} w={100} isLoaded={loaded}>
                  <Text fontSize="lg" fontWeight="500" mt="10px">
                    {project.name}
                  </Text>
                </SkeletonText>

                <SkeletonText noOfLines={3} isLoaded={loaded}>
                  <Text
                    noOfLines={3}
                    color="gray.600"
                    fontSize="xs"
                    mt="10px"
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
                        bg: "linear-gradient( to bottom, transparent, white)",
                      },
                    }}
                  >
                    {project.description}
                  </Text>
                </SkeletonText>

                <Box mt="20px">
                  <Flex justify="space-between">
                    <SkeletonText noOfLines={1} isLoaded={loaded}>
                      <Text fontSize="sm" fontWeight="600" color="gray.500">
                        Progresso
                      </Text>
                    </SkeletonText>

                    <SkeletonText noOfLines={1} isLoaded={loaded}>
                      <Text
                        textAlign="right"
                        fontSize="sm"
                        fontWeight="bold"
                        color="gray"
                        mt="5px"
                      >
                        {`${project.progress}%`}
                      </Text>
                    </SkeletonText>
                  </Flex>
                  <Skeleton isLoaded={loaded}>
                    <Progress
                      value={Number(project.progress)}
                      size="xs"
                      colorScheme="gray"
                      mt="5px"
                      borderRadius="8px"
                    />
                  </Skeleton>
                </Box>

                <Flex justify="flex-end" mt="20px">
                  <SkeletonText noOfLines={1} isLoaded={loaded}>
                    <Flex align="center" color="gray.500" gap="5px">
                      <Text fontSize="sm" className="material-symbols-outlined">
                        calendar_month
                      </Text>
                      <Text fontSize="sm">
                        {moment(project.createdAt)
                          .locale("pt-br")
                          .format("D MMM")}
                      </Text>
                    </Flex>
                  </SkeletonText>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
