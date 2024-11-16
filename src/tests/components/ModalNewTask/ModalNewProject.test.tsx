import { ModalNewProject } from "@/src/components/ModalNewProject";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useModal } from "../../../contexts/ModalControlProject";
import { useManagementProject } from "../../../contexts/ManagementOfProject";
import { useAuth } from "../../../contexts/Auth/AuthContext";
import { addNewTask, updatedTask } from "../../../services/projectService";
import { useBreakpointValue, useToast } from "@chakra-ui/react";
import { useManagementTask } from "../../../contexts/ManagementOfTask";
import { ModalNewTask } from "@/src/components/ModalNewTask";

jest.mock("../../../services/projectService", () => ({
  addNewTask: jest.fn(),
  updatedTask: jest.fn(),
}));

jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: jest.fn(() => ({
    register: jest.fn(),
    handleSubmit: jest.fn((fn) => fn),
    setValue: jest.fn(),
    reset: jest.fn(),
    formState: { errors: {} },
  })),
}));

jest.mock("../../../contexts/ModalControlProject", () => ({
  useModal: jest.fn(),
}));

jest.mock("../../../contexts/ManagementOfProject", () => ({
  useManagementProject: jest.fn(),
}));
jest.mock("../../../contexts/ManagementOfTask", () => ({
  useManagementTask: jest.fn(),
}));

jest.mock("../../../contexts/Auth/AuthContext", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
  useToast: jest.fn(),
}));

describe("ModalNewProject", () => {
  it("render correctly", () => {
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      setModalType: jest.fn(),
      setModalOfInfo: jest.fn(),
      onClose: jest.fn(),
      modalOfInfo: true,
    });
    (useManagementProject as jest.Mock).mockReturnValue({
      projectId: jest.fn(),
      projects: [
        {
          id: "existingProjectId",
          name: "Projeto Atual",
          description: "Descrição atual",
        },
      ],
    });
    (useManagementTask as jest.Mock).mockReturnValue({
      taskId: jest.fn(),
    });
    (useAuth as jest.Mock).mockReturnValue({
      user: { uid: "useruid" },
    });

    render(<ModalNewTask />);

    expect(screen.getByText("Tarefa")).toBeInTheDocument();
  });

  it("button closes modal", () => {
    const mockOnClose = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      setModalType: jest.fn(),
      setModalOfInfo: jest.fn(),
      onClose: mockOnClose,
      modalOfInfo: true,
    });
    (useAuth as jest.Mock).mockReturnValueOnce({
      user: { uid: "useruid" },
    });

    render(<ModalNewTask />);

    const buttonCloseModal = screen.getByTestId("close-modal");
    expect(buttonCloseModal).toBeInTheDocument();

    fireEvent.click(buttonCloseModal);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("adds task when onSubmit", async () => {
    jest.useFakeTimers();
    const mockToast = jest.fn();
    const mockOnClose = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      modalOfInfo: true,
      modalType: "add",
      onClose: mockOnClose,
    });
    (addNewTask as jest.Mock).mockResolvedValue(true);
    (useToast as jest.Mock).mockReturnValue(mockToast);

    render(<ModalNewTask />);

    const buttonAdd = screen.getByTestId("button-action");
    expect(buttonAdd).toBeInTheDocument();

    fireEvent.submit(screen.getByTestId("form-element"));

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(addNewTask).toHaveBeenCalledTimes(1);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
      expect(mockToast).toHaveBeenCalledWith({
        title: "Tarefa criada!",
        status: "success",
      });
    });
  });

  it("edit task when onSubmit", async () => {
    jest.useFakeTimers();
    const mockToast = jest.fn();
    const mockOnClose = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      modalOfInfo: true,
      modalType: "edit",
      onClose: mockOnClose,
    });
    (updatedTask as jest.Mock).mockResolvedValue(true);
    (useToast as jest.Mock).mockReturnValue(mockToast);

    render(<ModalNewTask />);

    const buttonAdd = screen.getByTestId("button-action");
    expect(buttonAdd).toBeInTheDocument();

    fireEvent.submit(screen.getByTestId("form-element"));

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(updatedTask).toHaveBeenCalledTimes(1);
      expect(mockOnClose).toHaveBeenCalledTimes(1)
      expect(mockToast).toHaveBeenCalledWith({
        title: "Tarefa atualizada!",
        status: "info",
      })
    });
  });

  it("show message if error", async () => {
    jest.useFakeTimers();
    const mockToast = jest.fn();
    const mockOnClose = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      modalOfInfo: true,
      modalType: "add",
      onClose: mockOnClose,
    });

    (addNewTask as jest.Mock).mockRejectedValue(new Error("Houve um erro!"));
    (useToast as jest.Mock).mockReturnValue(mockToast);

    render(<ModalNewTask />);

    const buttonAdd = screen.getByTestId("button-action");
    expect(buttonAdd).toBeInTheDocument();

    fireEvent.submit(screen.getByTestId("form-element"));

    jest.advanceTimersByTime(2000);

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith({
        title: "Houve um erro ao criar tarefa, tente novamente!",
        status: "error",
      })
    });
  });
  
  //   jest.useFakeTimers();
  //   const mockToast = jest.fn();
  //   (useModal as jest.Mock).mockReturnValueOnce({
  //     isOpen: true,
  //     modalOfInfo: true,
  //     modalType: "add",
  //   });
  
  //   (addNewTask as jest.Mock).mockRejectedValue(new Error("Houve um erro"));
  //   (useToast as jest.Mock).mockReturnValueOnce(mockToast);

  //   render(<ModalNewTask />);

  //   const buttonAdd = screen.getByTestId("button-action");
  //   expect(buttonAdd).toBeInTheDocument();

  //   fireEvent.submit(screen.getByTestId('form-element'));
  //   jest.advanceTimersByTime(2000);

  //   await waitFor(() => {
  //     expect(mockToast).toHaveBeenCalledWith({
  //       title: "Houve um erro ao criar tarefa, tente novamente!",
  //       status: "error",
  //     })
  //   });
  // });
});
