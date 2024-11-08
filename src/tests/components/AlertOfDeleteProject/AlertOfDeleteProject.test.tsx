import { AlertOfDeleteProject } from "@/src/components/AlertOfDeleteProject"
import { render,screen } from "@testing-library/react"


//terminar testes
describe("AlertOfDeleteProject", () => {
    it("renders correctly", () => {
        render(
            <AlertOfDeleteProject/>
        )

        expect(screen.getByText("Excluir projeto?")).toBeInTheDocument()
    })
})