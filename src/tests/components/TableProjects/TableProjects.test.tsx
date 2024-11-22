import { TableProjects } from "@/src/components/TableProjects";
import { render, screen } from "@testing-library/react";
import { useBreakpointValue } from "@chakra-ui/react";
import { useManagementProject } from "../../../contexts/ManagementOfProject";

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));
jest.mock("../../../contexts/ManagementOfProject", () => ({
  useManagementProject: jest.fn(),
}));

describe("TableProjects", () => {
  it("render correctly", () => {
    const mockProject = [
      {
        id: "teste123",
        name: "Projeto",
        description: "Finanças",
        status: "finalizado",
        updatedAt: "2023-10-21T10:00:00Z",
      },
      {
        id: "1dkj233",
        name: "Projeto ",
        description: "Descrição atual",
        status: "finalizado",
        updatedAt: "2023-10-21T10:00:00Z",
      },
    ];
    (useManagementProject as jest.Mock).mockReturnValue({
      projects: mockProject,
      loaded: true,
    });

    render(<TableProjects />);

    expect(screen.getByText("Ultima atualização")).toBeInTheDocument();
  });
  
  it("render correctly when not has project", () => {
    (useBreakpointValue as jest.Mock).mockReturnValue(true);
    (useManagementProject as jest.Mock).mockReturnValue({
      projects: [],
      loaded: true,
    });

    render(<TableProjects />);

    expect(screen.getByText("Nenhum projeto foi criado ainda. Crie seu primeiro projeto agora!")).toBeInTheDocument();
  });
});
