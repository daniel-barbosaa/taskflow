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
import {useModal} from '../../contexts/ModalControlProject'
import React, { useRef } from "react";
import {deleteTask} from '../../services/projectService'
import { useManagementTask } from "@/src/contexts/ManagementOfTask";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";


export function AlertOfDeleteTask() {
    const { isOpen, onClose, setModalType} = useModal()
    const cancelRef = useRef()
    const {taskId} = useManagementTask()
    const {projectId} = useManagementProject()

    // Passar esse id dinamico
    const userId = "rFJ6ijVTQQPSjZshkPAh";
    const toast = useToast();

  
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
          <AlertDialogContent w={350}>
            <AlertDialogHeader>Excluir projeto?</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>
              Sua tarefa será excluída e não poderá recuperar, tem certeza?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Não
              </Button>
              <Button colorScheme='red' ml={3} onClick={() => {
                deleteTask(userId, taskId, projectId)
                onClose()
                setModalType('deleted')
                toast({
                    title: "Excluido com sucesso!",
                    status: "success",
                });
              }}>
                Sim
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </>
    )
  }