import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  Box,
  ModalBody,
  Flex,
  Text,
  Progress,
  Spinner,
  Divider,
} from "@chakra-ui/react";
import _ from "lodash";

import { useModal } from "../../contexts/ModalControlProject";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import moment from "moment";

// Adicionar função de exluir projeto

export function ProjectInfoModal() {
  const { projectInfo } = useManagementProject();
  const { isOpen, onClose, modalOfInfo, modalType } = useModal();

  return (
    <>
      {modalType === "info" && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="gray.700">{projectInfo?.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex direction="column" gap="3">
                <Flex direction="row" maxW={200} justify="space-between">
                  <Text color="gray.500">Status</Text>
                  <Text
                    bg={
                      projectInfo?.status === "finalizado"
                        ? "#38cb898f"
                        : projectInfo?.status === "na fila"
                        ? "#ffc75860"
                        : "#a361ff83"
                    }
                    fontSize="xs"
                    p="3px 7px"
                    borderRadius="8px"
                    color={
                      projectInfo?.status === "finalizado"
                        ? "#249261"
                        : projectInfo?.status === "na fila"
                        ? "#fab833"
                        : "#944cf8"
                    }
                  >
                    {_.capitalize(projectInfo?.status)}
                  </Text>
                </Flex>
                <Flex direction="row" maxW={200} justify="space-between">
                  <Text color="gray.500">Tarefas</Text>
                  <Text
                    bg="gray.200"
                    p="3px"
                    fontSize="12px"
                    borderRadius="3px"
                    color="gray.500"
                    fontWeight="bold"
                  >
                    {3}
                  </Text>
                </Flex>
                <Flex direction="row" maxW={200} justify="space-between">
                  <Text color="gray.500">Data</Text>
                  <Text color="gray.600" fontSize="sm">
                    {moment(projectInfo?.createdAt)
                      .locale("pt-br")
                      .format("DD MMM, YYYY")}
                  </Text>
                </Flex>
                <Flex direction="column" maxW={200} justify="space-between">
                  <Text color="gray.500">Progresso</Text>
                  <Flex direction="column" gap={0.5}>
                    <Text fontSize="sm" color="gray.600" textAlign="end">
                      20%
                    </Text>
                    <Progress
                      value={projectInfo?.progress}
                      size="xs"
                      colorScheme="blue"
                    />
                  </Flex>
                </Flex>
                <Divider m="10px 0px"/>
                <Flex direction="column" maxW={200} justify="space-between">
                  <Text color="gray.700">Descrição</Text>
                  <Text mt="10px">{projectInfo?.description}</Text>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
