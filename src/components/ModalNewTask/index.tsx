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
} from "@chakra-ui/react";
import { ButtonAddNew } from "../ButtonAddNew";
import { useEffect, useState } from "react";
import { useModal } from "../../contexts/ModalControlProject";
import { useForm, SubmitHandler } from "react-hook-form";
import {addNewTask, getAllProjectsByIdOfUser} from "../../services/projectService"

interface Inputs {
  taskName: string;
  status: string;
  projectName: string
}

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: string;
  createdAt?: any;
  updatedAt?: any;
}

// Adicionar validação de campos do formulário com mensagem de campo vazios


export function ModalNewTask() {
  const [projectId, setProjectId] = useState<string>('')
  const { isOpen, onClose, onOpen, setModalType, modalType } = useModal();
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectName, setProjectName] = useState<string>("")
  const userId = "rFJ6ijVTQQPSjZshkPAh";

  useEffect(() => {
    getAllProjectsByIdOfUser(userId, (projects) => {
      setProjects(projects);
    });
  }, [userId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (task) => {

    if(!projectId){
      console.log('Nenhum projeto selecionado!')
      return
    }
   try{
    const taskData = {
      ...task,
      projectId, 
      projectName
    }

    if(modalType === "add"){
      await addNewTask('rFJ6ijVTQQPSjZshkPAh',taskData)
    }
   }catch(error){

   }
  };  

  function handlePrjectSelect(event:  React.ChangeEvent<HTMLSelectElement>){
    const projectId = event.target.value
    

    const selectedProject = projects.find((project) => project.id === projectId)

    if(selectedProject){
      setProjectName(selectedProject.name)
      setProjectId(projectId)
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="gray.700">
            {modalType == "edit" ? "Editar tarefa" : "Nova tarefa"}
          </ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalBody>
              <Stack mb="3">
                <FormLabel mb="0">Tarefa</FormLabel>
                <Textarea
                  {...register("taskName", {required: true})}
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
                  {...register("status", {required: true})}
                >
                  <option value="em progresso">Em progresso</option>
                  <option value="na fila">Na fila</option>
                  <option value="finalizado">Finalizado</option>
                </Select>
              </Stack>
              <Stack>
                <FormLabel mb="0">Projeto</FormLabel>
                <Select
                  {...register("projectName", {required: true})}
                  onChange={handlePrjectSelect}
                >
                {projects.map((project) => (
                   <option key={project.id} value={project.id}>{project.name}</option>
                ))}
                </Select>
              </Stack>
            </ModalBody>

            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancelar
              </Button>
              <Button type="submit" colorScheme="blue">
                {modalType === "edit" ? "Atualizar tarefa" : "Adicionar tarefa"}
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </>
  );
}
