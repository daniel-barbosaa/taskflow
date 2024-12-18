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
  useBreakpointValue,
  Box,
} from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalControlProject";
import { useManagementProject } from "../../contexts/ManagementOfProject";
import { deleteProject } from "../../services/projectService";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import { useRef } from "react";

export function AlertOfDeleteProject() {
  const { isOpen, onClose, setModalType } = useModal();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { projectId } = useManagementProject();
  const toast = useToast();
  const { user } = useAuth();
  const andBigScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

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
    <Box>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay w="100%" h="100%" />
        <AlertDialogContent w={andBigScreen ? "lg" : "xs"}>
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
    </Box>
  );
}
