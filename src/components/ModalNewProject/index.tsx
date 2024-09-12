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

export function ModalNewProject() {
  const {isOpen, onClose, onOpen, setModalType, modalType} = useModal()
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [sliderValue, setSliderValue] = useState(50);

  function HandleSubmitData(e: any) {
    e.preventDefault();
    console.log({
      projectName,
      description,
      status,
      sliderValue,
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
      }}>Novo projeto</ButtonAddNew>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">{modalType == "edit" ? "Atualizar Projeto" : 'Novo projeto'}</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={HandleSubmitData}>
            <ModalBody>
              <Stack mb="3">
                <FormLabel mb="0">Nome</FormLabel>
                <Input
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="Nome do projeto"
                  sx={{
                    _focus: {
                      border: "1px solid #3A84FF",
                      outline: "none",
                    },
                  }}
                />
              </Stack>
              <Stack mb="3">
                <FormLabel mb="0">Descrição</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Nome do projeto"
                  sx={{
                    _focus: {
                      border: "1px solid #3A84FF",
                      outline: "none",
                    },
                  }}
                />
              </Stack>
              <Stack>
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

              <Box p={4} pt={6}>
                <FormLabel mb="8">Porcentagem do projeto</FormLabel>
                <Slider
                  aria-label="slider-ex-6"
                  onChange={(val) => setSliderValue(val)}
                >
                  <SliderMark value={25} {...labelStyles}>
                    25%
                  </SliderMark>
                  <SliderMark value={50} {...labelStyles}>
                    50%
                  </SliderMark>
                  <SliderMark value={75} {...labelStyles}>
                    75%
                  </SliderMark>
                  <SliderMark
                    value={sliderValue}
                    textAlign="center"
                    bg="blue.500"
                    color="white"
                    mt="-10"
                    ml="-5"
                    w="12"
                  >
                    {sliderValue}%
                  </SliderMark>
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <SliderThumb />
                </Slider>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" colorScheme="blue">
                {modalType === 'edit' ? 'Atualizar projeto' : 'Adicionar projeto'}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
