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
} from "@chakra-ui/react";
import {useModal} from '../../contexts/ModalControlProject'
import React, { useRef } from "react";
import {deleteTask} from '../../services/projectService'
import { useManagementTask } from "@/src/contexts/ManagementOfTask";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import { useAuth } from "@/src/contexts/Auth/AuthContext";


export function AlertOfDeleteTask() {
    const { isOpen, onClose, setModalType} = useModal()
    const cancelRef = useRef<HTMLButtonElement>(null);
    const {taskId} = useManagementTask()
    const {projectId} = useManagementProject()
    const {user} = useAuth()
    const userId = user?.uid;
    const toast = useToast();
    const andBigScreen = useBreakpointValue({
      base: false,
      md: true,
      lg: true,
    });

    async function handleDeleTask () {
      try {
        await deleteTask(userId, taskId, projectId)
                onClose()
                setModalType('deleted')
                toast({
                    title: "Excluido com sucesso!",
                    status: "success",
                });
      } catch(error){
        toast({
          title: "Houve algum erro ao exluir tarefa, tente novamente!",
          status: "error",
      });
      }
    }

  
    return (
      <>
        <AlertDialog
          motionPreset='slideInBottom'
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay />
          <AlertDialogContent w={andBigScreen ? "lg" : "xs"}>
            <AlertDialogHeader>Excluir Tarefa?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Sua tarefa será excluída e não poderá recuperar, tem certeza?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Não
              </Button>
              <Button colorScheme='red' ml={3} onClick={handleDeleTask}>
                Sim
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }