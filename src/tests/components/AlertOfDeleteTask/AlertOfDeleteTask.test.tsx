import { AlertOfDeleteProject } from "@/src/components/AlertOfDeleteProject";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { deleteProject, deleteTask } from "../../../services/projectService";
import { useModal } from "../../../contexts/ModalControlProject";
import {useAuth } from "../../../contexts/Auth/AuthContext";
import {  Flex, useToast} from "@chakra-ui/react";
import { useManagementProject } from "../../../contexts/ManagementOfProject";
import { useManagementTask } from "../../../contexts/ManagementOfTask";
import { AlertOfDeleteTask } from "@/src/components/AlertOfDeleteTask";


jest.mock("../../../services/projectService", () => ({
  deleteProject: jest.fn(),
  deleteTask: jest.fn(),
}));

jest.mock("../../../contexts/ModalControlProject", () => ({
  useModal: jest.fn(),
}));

jest.mock("../../../contexts/Auth/AuthContext", () => ({
  useAuth: jest.fn(),
}));
jest.mock("../../../contexts/ManagementOfProject", () => ({
    useManagementProject: jest.fn(),
}));
jest.mock("../../../contexts/ManagementOfTask", () => ({
  useManagementTask: jest.fn(),
}));
jest.mock("@chakra-ui/react", () => ({
    ...jest.requireActual("@chakra-ui/react"),
    useBreakpointValue: jest.fn(),
    useToast: jest.fn(),
  }));
  
describe("AlertOfDeleteTask", () => {
  it("renders correctly", () => {
    (useModal as jest.Mock).mockReturnValue({
        isOpen: true,
        onOpen: jest.fn(),
        setModalType: jest.fn(),
        setModalOfInfo: jest.fn(),
    });
    (useManagementProject as jest.Mock).mockReturnValue({
        projectId: jest.fn()
    });
    (useManagementTask as jest.Mock).mockReturnValue({
      taskId: jest.fn()
    });
    (useAuth as jest.Mock).mockReturnValue({
        user: {uid: "useruid"}
    });
    render(
      <Flex>
        <AlertOfDeleteTask/>
      </Flex>
    );
    expect(screen.getByText("Excluir Tarefa?")).toBeInTheDocument()

  });

  it("delete task succes", async () => {
    const mockOnClose = jest.fn(() => jest.fn());
    const mockSetModalType = jest.fn();
    const mockToast = jest.fn();
    (useModal as jest.Mock).mockReturnValueOnce({
        isOpen: true,
        onOpen: jest.fn(),
        setModalType: mockSetModalType,
        setModalOfInfo: jest.fn(),
        onClose: mockOnClose
    });
    (useManagementProject as jest.Mock).mockReturnValueOnce({
        projectId: "projectId"
    });
    (useManagementTask as jest.Mock).mockReturnValueOnce({
      taskId: "taskId"
    });
    (useAuth as jest.Mock).mockReturnValueOnce({
        user: {uid: "useruid"}
    });
    (deleteTask as jest.Mock).mockReturnValueOnce(Promise.resolve());
    (useToast as jest.Mock).mockReturnValueOnce(mockToast);

    render(
      <Flex>
        <AlertOfDeleteTask />
      </Flex>
    );
    const buttonDeleteTask = screen.getByRole("button", { name: "Sim" })
    expect(buttonDeleteTask).toBeInTheDocument()

    fireEvent.click(buttonDeleteTask)
    await waitFor(() => {
      expect(deleteTask).toHaveBeenCalledTimes(1);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
      expect(mockToast).toHaveBeenCalledWith({
        title: "Excluido com sucesso!",
        status: "success",
      });
      
    })
  });

  it("delete task error", async () => {
    const mockOnClose = jest.fn(() => jest.fn());
    const mockSetModalType = jest.fn();
    const mockToast = jest.fn();
    (useModal as jest.Mock).mockReturnValueOnce({
        isOpen: true,
        onOpen: jest.fn(),
        setModalType: mockSetModalType,
        setModalOfInfo: jest.fn(),
        onClose: mockOnClose
    });
    (useManagementProject as jest.Mock).mockReturnValueOnce({
        projectId: "projectId"
    });
    (useManagementTask as jest.Mock).mockReturnValueOnce({
      taskId: "taskId"
    });
    (useAuth as jest.Mock).mockReturnValueOnce({
        user: {uid: "useruid"}
    });
    (deleteTask as jest.Mock).mockRejectedValueOnce(new Error("Delete task failed!"));
    (useToast as jest.Mock).mockReturnValueOnce(mockToast);

    render(
      <Flex>
        <AlertOfDeleteTask />
      </Flex>
    );
    const buttonDeleteTask = screen.getByRole("button", { name: "Sim" })
    expect(buttonDeleteTask).toBeInTheDocument()

    fireEvent.click(buttonDeleteTask)
    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: "Houve algum erro ao exluir tarefa, tente novamente!",
        status: "error",
      });
      
    })
  });

  it("Is button closing the modal", async () => {
    const mockOnClose = jest.fn(() => jest.fn());
    (useModal as jest.Mock).mockReturnValueOnce({
        isOpen: true,
        onClose: mockOnClose
    });

    render(
      <Flex>
        <AlertOfDeleteTask />
      </Flex>
    );

    const buttonNo = screen.getByRole("button", { name: "Não" })
    expect(buttonNo).toBeInTheDocument()
    fireEvent.click(buttonNo)
    expect(mockOnClose).toHaveBeenCalledTimes(1)    
  });
});
