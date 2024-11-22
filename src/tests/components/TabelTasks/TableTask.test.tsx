import { TableTasks } from "@/src/components/TableTasks";
import { render, screen } from "@testing-library/react";
import { useManagementTask } from "../../../contexts/ManagementOfTask";
import { useManagementProject } from "../../../contexts/ManagementOfProject";
import { useModal } from "../../../contexts/ModalControlProject";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));
jest.mock("../../../contexts/ManagementOfProject", () => ({
  useManagementProject: jest.fn(),
}));

jest.mock("../../../contexts/ManagementOfTask", () => ({
  useManagementTask: jest.fn(),
}));

jest.mock("../../../contexts/ModalControlProject", () => ({
  useModal: jest.fn(),
}));

describe("TableTasks", () => {
  it("Render correctly", () => {
    const mockTasks = [
      {
        id: "teste12334",
        taskName: "task123",
        projectName: "teste12334",
        projectId: "projects123",
        status: "finalizado",
        updatedAt: "2023-10-21T10:00:00Z",
        createdAt: "2023-10-21T10:00:00Z",
      },
      {
        id: "teste123",
        taskName: "task123",
        status: "finalizado",
        projectName: "teste12533",
        projectId: "projects123",
        createdAt: "2023-10-21T10:00:00Z",
        updatedAt: "2023-10-21T10:00:00Z",
      },
    ];
    (useManagementTask as jest.Mock).mockReturnValue({
      tasks: mockTasks,
      loaded: true,
      setTaskId: "teste123",
    });
    (useManagementProject as jest.Mock).mockReturnValue({
      setProjectId: jest.fn(),
    });
    (useModal as jest.Mock).mockReturnValue({});
    render(<TableTasks />);

    expect(screen.getByText("Tarefa"));
  });
});
