import { SignInButtonGoogle } from "@/src/components/SignInButtonGoogle"
import { fireEvent, render, screen} from "@testing-library/react"
import { useGoogleLoggin } from "../../../hooks/useGoogleLoggin";

jest.mock("../../../hooks/useGoogleLoggin", () => ({
    useGoogleLoggin: jest.fn()
}))

describe("SignInButtonGoogle", () => {
    it("render correctly", () => {
        (useGoogleLoggin as jest.Mock).mockReturnValue({
            logginWithGoogle: jest.fn()
        });
        render(
            <SignInButtonGoogle/>
        )

        expect(screen.getByText("Entrar com Google")).toBeInTheDocument()
    });

    it("login correctly", () => {
        const mockLogginWithGoogle = jest.fn();

        (useGoogleLoggin as jest.Mock).mockReturnValue({
            logginWithGoogle: mockLogginWithGoogle
        });
        render(
            <SignInButtonGoogle/>
        )

        const buttonLogin = screen.getByTestId("loggin-click")
        expect(buttonLogin).toBeInTheDocument()

        fireEvent.click(buttonLogin)
        expect(mockLogginWithGoogle).toHaveBeenCalled()
        
    });
})