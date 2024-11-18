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


// Erro no SkeletonText, alguma propriedade esta indo como undefined.
describe("TableProjects", () => {
  it("render correctly", () => {
    const mockProject = [
      {
        id: "teste123",
        name: "Projeto ",
        description: "Descrição atual",
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

    const {debug} = render(<TableProjects />);

    debug()
  });
});
