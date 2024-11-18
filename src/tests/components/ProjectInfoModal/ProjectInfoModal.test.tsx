import { ProjectInfoModal } from "@/src/components/ProjectInfoModal";
import { fireEvent, render, screen } from "@testing-library/react";
import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import { useManagementTask } from "@/src/contexts/ManagementOfTask";
import { useModal } from "@/src/contexts/ModalControlProject";
import { useBreakpointValue } from "@chakra-ui/react";

jest.mock("../../../contexts/ManagementOfProject", () => ({
  useManagementProject: jest.fn(),
}));

jest.mock("../../../contexts/ManagementOfTask", () => ({
  useManagementTask: jest.fn(),
}));
jest.mock("../../../contexts/ModalControlProject", () => ({
  useModal: jest.fn(),
}));
jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));

describe("ProjectInfoModal", () => {
  it("render correctly", () => {
    const mockeOnClose = jest.fn();
    (useManagementProject as jest.Mock).mockReturnValue({
      projectInfo: jest.fn(),
    });
    (useManagementTask as jest.Mock).mockReturnValue({
      tasksForProject: jest.fn(),
    });
    (useModal as jest.Mock).mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: mockeOnClose,
      modalType: "info",
    });

    render(<ProjectInfoModal />);

    expect(screen.getByText("Progresso")).toBeInTheDocument();
  });

  it("modal closing button", () => {
    const mockeOnClose = jest.fn();
    (useModal as jest.Mock).mockReturnValue({
        isOpen: true,
        onOpen: jest.fn(),
        onClose: mockeOnClose,
        modalType: "info",
    });

    render(<ProjectInfoModal />);

    const buttonClose = screen.getByTestId("close-button");
    expect(buttonClose).toBeInTheDocument();
    fireEvent.click(buttonClose);
    expect(mockeOnClose).toHaveBeenCalled();

    
  });
});
