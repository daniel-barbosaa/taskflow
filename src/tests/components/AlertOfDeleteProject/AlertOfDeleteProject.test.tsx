import { AlertOfDeleteProject } from "@/src/components/AlertOfDeleteProject";
import { fireEvent, render, screen } from "@testing-library/react";
import { deleteProject } from "../../../services/projectService";
import { ModalProvider, useModal } from "../../../contexts/ModalControlProject";
import { AuthProvider, useAuth } from "../../../contexts/Auth/AuthContext";
import {  Flex, useBreakpointValue } from "@chakra-ui/react";
import { useManagementProject } from "../../../contexts/ManagementOfProject";


jest.mock("../../../services/projectService", () => ({
  deleteProject: jest.fn(),
}));

jest.mock("../../../contexts/ModalControlProject", () => ({
  useModal: jest.fn(),
}));

jest.mock("../../../contexts/Auth/AuthContext", () => ({
  useAuth: jest.fn(),
}));
jest.mock(".../../../contexts/ManagementOfProject", () => ({
    useManagementProject: jest.fn(),
}));
jest.mock("@chakra-ui/react", () => ({
    ...jest.requireActual("@chakra-ui/react"),
    useBreakpointValue: jest.fn(),
  }));
  

//terminar testes
describe("AlertOfDeleteProject", () => {

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
    (useAuth as jest.Mock).mockReturnValue({
        user: {uid: "useruid"}
    });
    render(
      <Flex>
        <AlertOfDeleteProject />
      </Flex>
    );
    expect(screen.getByText("Excluir projeto?")).toBeInTheDocument()
  

  });


  // Ajustar erro, testar se o botao de "sim" chama a funcao onClose
  it("Its delete project correctly", () => {
    const mockOnClose = jest.fn(() => jest.fn());
    (useModal as jest.Mock).mockReturnValue({
        isOpen: true,
        onOpen: jest.fn(),
        setModalType: jest.fn(),
        setModalOfInfo: jest.fn(),
        onClose: mockOnClose
    });
    (useManagementProject as jest.Mock).mockReturnValue({
        projectId: jest.fn()
    });
    (useAuth as jest.Mock).mockReturnValue({
        user: {uid: "useruid"}
    });
    render(
      <Flex>
        <AlertOfDeleteProject />
      </Flex>
    );

    const buttonDelete = screen.getByRole("button", { name: "Sim" })
    expect(buttonDelete).toBeInTheDocument()

    fireEvent.click(buttonDelete)
    expect(mockOnClose).toHaveBeenCalledWith()

  });
});
