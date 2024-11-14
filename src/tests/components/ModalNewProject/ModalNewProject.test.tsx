import { ModalNewProject } from "@/src/components/ModalNewProject";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { useModal } from "../../../contexts/ModalControlProject";
import { useManagementProject } from "../../../contexts/ManagementOfProject";
import { useAuth } from "../../../contexts/Auth/AuthContext";

import {
  addNewProject,
  updatedProject,
} from "../../../services/projectService";
import { useBreakpointValue, useToast } from "@chakra-ui/react";


jest.mock("../../../services/projectService", () => ({
  addNewProject: jest.fn(),
  updatedProject: jest.fn(),
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

jest.mock("../../../contexts/Auth/AuthContext", () => ({
  useAuth: jest.fn(),
}));

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
  useToast: jest.fn(),
}));

// Adcionar as outras verificaçoes de testes
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
      projects: jest.fn(),
    });
    (useAuth as jest.Mock).mockReturnValue({
      user: { uid: "useruid" },
    });

    render(<ModalNewProject />);

    expect(screen.getByText("Nome")).toBeInTheDocument();
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
    (useManagementProject as jest.Mock).mockReturnValue({
      projectId: jest.fn(),
      projects: jest.fn(),
    });
    (useAuth as jest.Mock).mockReturnValueOnce({
      user: { uid: "useruid" },
    });

    render(<ModalNewProject />);

    const buttonCloseModal = screen.getByTestId("close-modal");
    expect(buttonCloseModal).toBeInTheDocument();

    fireEvent.click(buttonCloseModal);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("adds project to onSubmit", async () => {
    jest.useFakeTimers();
    const mockToast = jest.fn();
    const mockOnClose = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      modalOfInfo: true,
      modalType: "add",
      onClose: mockOnClose,
    });
    (useManagementProject as jest.Mock).mockReturnValue({
      projectId: "existingProjectId",
      projects: [
        {
          id: "existingProjectId",
          name: "Projeto Atual",
          description: "Descrição atual",
        },
      ],
    });
    (addNewProject as jest.Mock).mockReturnValueOnce(true);
    (useToast as jest.Mock).mockReturnValueOnce(mockToast);

    render(<ModalNewProject />);


    const buttonAdd = screen.getByTestId("button-action");
    expect(buttonAdd).toBeInTheDocument();
    

    fireEvent.submit(screen.getByTestId('form-element'));

    jest.advanceTimersByTime(2000);
    await waitFor(() => {
      expect(addNewProject).toHaveBeenCalledTimes(1);
      expect(mockOnClose).toHaveBeenCalledTimes(1)
      expect(mockToast).toHaveBeenCalledWith({
        title: "Projeto criado!",
        status: "success",
      })
    });
  });
  
});
