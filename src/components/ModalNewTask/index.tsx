import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  useDisclosure,
  Stack,
  Textarea,
  Select,
  FormLabel,
  FormControl,
  SliderTrack,
  SliderMark,
  Slider,
  Box,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import { ButtonAddNew } from "../ButtonAddNew";
import { useState } from "react";
import { useModal } from "../../contexts/ModalControlProject";

export function ModalNewTask() {
  const {isOpen, onClose, onOpen, setModalType, modalType} = useModal()
  const [task, setTask] = useState("");
  const [project, setProject] = useState("");
  const [status, setStatus] = useState("");


  function HandleSubmitData(e: any) {
    e.preventDefault();
    console.log({
      task,
      project,
      status,
    });
  }

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <>
      <ButtonAddNew onOpen={() => {
        onOpen()
        setModalType('')
      }}>Nova tarefa</ButtonAddNew>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">{modalType == "edit" ? "Editar tarefa" : 'Nova tarefa'}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={HandleSubmitData}>
            <ModalBody>
              <Stack mb="3">
                <FormLabel mb="0">Tarefa</FormLabel>
                <Textarea
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                  placeholder=""
                  sx={{
                    _focus: {
                      border: "1px solid #3A84FF",
                      outline: "none",
                    },
                  }}
                />
              </Stack>
              <Stack mb="3">
                <FormLabel mb="0">Status</FormLabel>
                <Select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="em progresso">Em progresso</option>
                  <option value="na fila">Na fila</option>
                  <option value="finalizado">Finalizado</option>
                </Select>
              </Stack>
              <Stack>
                <FormLabel mb="0">Projeto</FormLabel>
                <Select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                >
                  <option value="ignews">IgNews</option>
                  <option value="ignews">Dashgo.</option>
                  <option value="ignews">WaiterApp</option>
                </Select>
              </Stack>

            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" colorScheme="blue">
                {modalType === 'edit' ? 'Atualizar tarefa' : 'Adicionar tarefa'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
