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
import {useManagementProject} from '../../contexts/ManagementOfProject'
import {deleteProject} from '../../services/projectService'


export function AlertOfDeleteProject() {
    const { isOpen, onClose, setModalType} = useModal()
    const cancelRef = useRef()
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
              Seu projeto será excluido permanente e todas as tarefas relacionas tambem, deseja continuar?
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Não
              </Button>
              <Button colorScheme='red' ml={3} onClick={() => {
                deleteProject(userId, projectId)
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