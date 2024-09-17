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
  Stack,
  Textarea,
  Select,
  FormLabel,
  SliderTrack,
  SliderMark,
  Slider,
  Box,
  SliderFilledTrack,
  SliderThumb,
  Text,
} from "@chakra-ui/react";
import { ButtonAddNew } from "../ButtonAddNew";
import { useState } from "react";
import { useModal } from "../../contexts/ModalControlProject";
import { useForm, SubmitHandler } from "react-hook-form";
import { addNewProject } from "../../services/projectService";

interface Inputs {
  name: string;
  description: string;
  status: string;
  progress: number;
}

export function ModalNewProject() {
  const { isOpen, onClose, onOpen, setModalType, modalType } = useModal();
  const [sliderValue, setSliderValue] = useState(50);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const projectData = {
      ...data,
      progress: sliderValue,
    };

    try {
      if (modalType === "add") {
        await addNewProject("rFJ6ijVTQQPSjZshkPAh", projectData);
        onClose();
        reset();
      }
    } catch (error) {
      console.log("there was one error", error);
    }
  };

  const labelStyles = {
    mt: "2",
    ml: "-2.5",
    fontSize: "sm",
  };

  return (
    <>
      <ButtonAddNew
        onOpen={() => {
          onOpen();
          setModalType("add");
        }}
      >
        Novo projeto
      </ButtonAddNew>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">
            {modalType == "edit" ? "Atualizar Projeto" : "Novo projeto"}
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Stack mb="3">
                <FormLabel mb="0">Nome</FormLabel>
                <Input
                  {...register("name", { required: true })}
                  maxLength={20}
                  placeholder="Nome do projeto"
                  sx={{
                    _focus: {
                      border: "1px solid #3A84FF",
                      outline: "none",
                    },
                  }}
                />
                {errors.name && (
                  <Text fontSize="sm" color="#FF6B6B">
                    Seu projeto precisa de um nome
                  </Text>
                )}
              </Stack>
              <Stack mb="3">
                <FormLabel mb="0">Descrição</FormLabel>
                <Textarea
                  {...register("description", { required: true })}
                  placeholder="Nome do projeto"
                  sx={{
                    _focus: {
                      border: "1px solid #3A84FF",
                      outline: "none",
                    },
                  }}
                />
                {errors.description && (
                  <Text fontSize="sm" color="#FF6B6B">
                    Adicione uma descrição
                  </Text>
                )}
              </Stack>
              <Stack>
                <FormLabel mb="0">Status</FormLabel>
                <Select {...register("status", { required: true })}>
                  <option value="em progresso">Em progresso</option>
                  <option value="na fila">Na fila</option>
                  <option value="finalizado">Finalizado</option>
                </Select>
                {errors.status && <Text>Error</Text>}
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
                {modalType === "edit"
                  ? "Atualizar projeto"
                  : "Adicionar projeto"}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
