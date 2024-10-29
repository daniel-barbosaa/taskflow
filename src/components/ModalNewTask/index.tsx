import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Stack,
  Textarea,
  Select,
  FormLabel,
  Text,
  Spinner,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ButtonAddNew } from "../ButtonAddNew";
import { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalControlProject";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  addNewTask,
  getAllProjectsByIdOfUser,
  updatedTask,
} from "../../services/projectService";
import { useManagementTask } from "@/src/contexts/ManagementOfTask";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";

interface Inputs {
  taskName: string;
  status: string;
  projectName: string;
}

export function ModalNewTask() {
  const { isOpen, onClose, onOpen, setModalType, modalType } = useModal();
  const { taskId } = useManagementTask();
  const { projects } = useManagementProject();
  const { user } = useAuth();
  const [projectName, setProjectName] = useState<string>("");
  const [projectId, setProjectId] = useState<string>("");
  const userId = user?.uid;
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const andSmallScreen = useBreakpointValue({
    base: true,
    lg: false,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  useEffect(() => {
    if (projects.length === 1) {
      const singleProject = projects[0];
      setProjectName(singleProject.name);
      setProjectId(singleProject.id);
    }
  }, [projects]);

  const onSubmit: SubmitHandler<Inputs> = async (task) => {
    setLoading(true);
    if (!projectId) {
      console.log("Nenhum projeto selecionado!");
      toast({
        title: "Selecione um projeto!",
        status: "warning",
      });
      setLoading(false);
      return;
    }
    setTimeout(async () => {
      try {
        const taskData = {
          ...task,
          projectId,
          projectName,
        };

        if (modalType === "add") {
          await addNewTask(userId, taskData);
          onClose();
          reset();
          toast({
            title: "Tarefa criada!",
            status: "success",
          });
          setLoading(false);
          return;
        } else if (modalType === "edit") {
          await updatedTask(userId, taskId, taskData);
          onClose();
          reset();
          toast({
            title: "Tarefa atualizada!",
            status: "info",
          });
          setLoading(false);
          return;
        }
      } catch (error) {
        toast({
          title: "Houve um ao criar tarefa, tente novamente!",
          status: "error",
        });
      }
    }, 2000);
  };

  function handleProjectSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const projectId = event.target.value;

    const selectedProject = projects.find(
      (project) => project.id === projectId
    );

    if (selectedProject) {
      setProjectName(selectedProject.name);
      setProjectId(projectId);
    }
  }

  return (
    <>
      <ButtonAddNew
        onOpen={() => {
          onOpen();
          setModalType("add");
        }}
      >
        Nova tarefa
      </ButtonAddNew>
      {modalType !== "delete" && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent w={andSmallScreen ? "xs" : "full"}>
            <ModalHeader color="gray.700">
              {modalType == "edit" ? "Editar tarefa" : "Nova tarefa"}
            </ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit(onSubmit)}>
              <ModalBody>
                <Stack mb="3">
                  <FormLabel mb="0">Tarefa</FormLabel>
                  <Textarea
                    {...register("taskName", { required: true })}
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
                  <Select {...register("status", { required: true })}>
                    <option value="em progresso">Em progresso</option>
                    <option value="na fila">Na fila</option>
                    <option value="finalizado">Finalizado</option>
                  </Select>
                </Stack>
                <Stack>
                  <FormLabel mb="0">Projeto</FormLabel>
                  <Select
                    {...register("projectName", { required: true })}
                    onChange={handleProjectSelect}
                  >
                    {projects.map((project) => (
                      <option key={project.id} value={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </Select>
                </Stack>
              </ModalBody>

              <ModalFooter>
                <Button mr={3} onClick={onClose}>
                  Cancelar
                </Button>
                <Button type="submit" colorScheme="blue" w="50%">
                  {loading ? (
                    <Spinner color="white" size="md" />
                  ) : (
                    <Text>
                      {modalType === "edit"
                        ? "Atualizar tarefa"
                        : "Adicionar tarefa"}
                    </Text>
                  )}
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}
