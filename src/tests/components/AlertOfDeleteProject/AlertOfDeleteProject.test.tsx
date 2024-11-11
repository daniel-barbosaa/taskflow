import { AlertOfDeleteProject } from "@/src/components/AlertOfDeleteProject";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { deleteProject } from "../../../services/projectService";
import { useModal } from "../../../contexts/ModalControlProject";
import {useAuth } from "../../../contexts/Auth/AuthContext";
import {  Flex, useToast} from "@chakra-ui/react";
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
    useToast: jest.fn(),
  }));
  
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



  it("Its delete project correctly", async () => {
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
        projectId: "project-id-mockado"
    });
    (useAuth as jest.Mock).mockReturnValueOnce({
        user: {uid: "useruid"}
    });
    (deleteProject as jest.Mock).mockReturnValueOnce(Promise.resolve());
    (useToast as jest.Mock).mockReturnValueOnce(mockToast);

    render(
      <Flex>
        <AlertOfDeleteProject />
      </Flex>
    );

    const buttonDelete = screen.getByRole("button", { name: "Sim" })
    expect(buttonDelete).toBeInTheDocument()

    fireEvent.click(buttonDelete)
    await waitFor(() => expect(mockSetModalType).toHaveBeenCalledWith("deleted"))
    expect(mockOnClose).toHaveBeenCalledTimes(1)
    expect(deleteProject).toHaveBeenCalledTimes(1)
    expect(mockToast).toHaveBeenCalledWith({
      title: "Excluido com sucesso!",
      status: "success",
    });
  });

  it("Is button closing the modal", async () => {
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
   


    render(
      <Flex>
        <AlertOfDeleteProject />
      </Flex>
    );

    const buttonNo = screen.getByRole("button", { name: "Não" })
    expect(buttonNo).toBeInTheDocument()

    
    fireEvent.click(buttonNo)
    expect(mockOnClose).toHaveBeenCalledTimes(1)
    
    
    
  });
});
