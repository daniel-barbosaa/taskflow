import { SignInButton } from "@/src/components/SignInButton"
import { render, screen } from "@testing-library/react"

describe("SignInButton", () => {
    it("render correctly", () => {
        render(
            <SignInButton/>
        );

        expect(screen.getByText("Entrar")).toBeInTheDocument();
    })
})