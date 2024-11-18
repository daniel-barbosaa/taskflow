import { ProjectChart } from "@/src/components/ProjectChart";
import { render, screen } from "@testing-library/react";
import { useManagementProject } from "../../../contexts/ManagementOfProject";
import _ from "lodash";

jest.mock("../../../contexts/ManagementOfProject", () => ({
  useManagementProject: jest.fn(),
}));

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));

describe("ProjectChart", () => {
  it("render correctly", () => {
    const mockProject = [
      {
        id: "teste123",
        name: "Projeto ",
        description: "Descrição atual",
      },
      {
        id: "teste12",
        name: "Projeto Atual",
        description: "Descrição sm2",
      },
    ];
    (useManagementProject as jest.Mock).mockReturnValue({
      projects: mockProject,
    });

    render(<ProjectChart/>);
    
    expect(screen.getByText("Tarefas por projeto")).toBeInTheDocument();
    expect(screen.getByText("Projeto Atual")).toBeInTheDocument()
  });
});
