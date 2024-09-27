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
} from "@chakra-ui/react";
import _ from 'lodash';

import { useModal } from "../../contexts/ModalControlProject";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";

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
              <Flex direction="column">
                <Flex direction="row" maxW={200} justify="space-between">
                  <Text color="gray.500">Status</Text>
                  <Text
                        bg={projectInfo?.status === "finalizado" ? "#38cb898f" : projectInfo?.status === "na fila" ? "#ffc75860" : "#a361ff83"}
                        fontSize="xs"
                        p="3px 7px"
                        borderRadius="8px"
                        color={projectInfo?.status === "finalizado" ? "#249261" : projectInfo?.status === "na fila" ? "#fab833" : "#944cf8"}
                      >
                        {_.capitalize(projectInfo?.status)}
                      </Text>
                </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
