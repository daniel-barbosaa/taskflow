import { render, screen } from "@testing-library/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { TasksCharts } from "@/src/components/TasksCharts";
import { useManagementTask } from "@/src/contexts/ManagementOfTask";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));

jest.mock("../../../contexts/ManagementOfTask", () => ({
  useManagementTask: jest.fn(),
}));


describe("TasksCharts", () => {
  it("render correctly", () => {
    const mockTasks = [
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

    render(<TasksCharts />);

    expect(screen.getByText("Em progresso")).toBeInTheDocument();
  });

  it("render correctly when not has task", () => {
    (useManagementTask as jest.Mock).mockReturnValue({
      tasks: [],
      loaded: true,
      setTaskId: "teste123",
    });

    render(<TasksCharts />);

    expect(screen.getByText("Sem tarefas no momento. Comece a organizar seu projeto adicionando algumas")).toBeInTheDocument()
    
  });
});
