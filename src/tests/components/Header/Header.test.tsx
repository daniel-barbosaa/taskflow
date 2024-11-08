import { Header } from "@/src/components/Header";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import { useSidebarDrawer } from "../../../contexts/SidebarDrawerContext";
import { useBreakpointValue } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ButtonOpenNavigation } from "@/src/components/Header/ButtonOpenNavigation";



jest.mock("../../../contexts/Auth/AuthContext", () => ({
  useAuth: jest.fn()
}))

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));

jest.mock("../../../contexts/SidebarDrawerContext", () => ({
  useSidebarDrawer: jest.fn(), 
}))


//Testar se o botão menu abre o drawer

describe("Header", () => {
  it("renders correctly", () => {
    (useAuth as jest.Mock).mockImplementation(() => ({
      signOutUser: jest.fn()
    }));
    (useBreakpointValue as jest.Mock).mockReturnValue(true)
    
    render(
      <Header/>
    );
    expect(screen.getByText("Flow")).toBeInTheDocument();
  });
  
  it("the user must log out by clicking the button", () => {
    const mockSignOut = jest.fn(() => Promise.resolve());
    (useAuth as jest.Mock).mockReturnValue({
      signOutUser: mockSignOut
    });
    (useBreakpointValue as jest.Mock).mockReturnValue(false);
    (useSidebarDrawer as jest.Mock).mockReturnValue({
      onOpen: jest.fn(),
    });
    
    render(
      <Header/>
    );
    
    const logoutButton = screen.getByRole("button", { name: "move_item" })
    expect(logoutButton).toBeInTheDocument()

    fireEvent.click(logoutButton)
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  })

  it("menu button opens modal", () => {
    const mockonOpen = jest.fn() as any
    (useSidebarDrawer as jest.Mock).mockReturnValue({
      onOpen: mockonOpen
    })
    render (
      <ButtonOpenNavigation/>
    )

    
    const button = screen.getByLabelText("Open navigation")
    expect(button).toBeInTheDocument()
    fireEvent.click(button);
    
    expect(mockonOpen).toHaveBeenCalledTimes(1)

  })
});

