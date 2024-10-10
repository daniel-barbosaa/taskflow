import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalControlProject";
import React, { useRef } from "react";
import { useManagementProject } from "../../contexts/ManagementOfProject";
import { deleteProject } from "../../services/projectService";
import { useAuth } from "@/src/contexts/Auth/AuthContext";

export function AlertOfDeleteProject() {
  const { isOpen, onClose, setModalType } = useModal();
  const cancelRef = useRef();
  const { projectId } = useManagementProject();
  const toast = useToast();
  const { user } = useAuth();

  async function handleDeleteProject() {
    await deleteProject(user?.uid, projectId);
    onClose();
    setModalType("deleted");
    toast({
      title: "Excluido com sucesso!",
      status: "success",
    });
  }

  return (
    <>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />
        <AlertDialogContent w={350}>
          <AlertDialogHeader>Excluir projeto?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Seu projeto será excluido permanente e todas as tarefas relacionas
            tambem, deseja continuar?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Não
            </Button>
            <Button colorScheme="red" ml={3} onClick={handleDeleteProject}>
              Sim
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
