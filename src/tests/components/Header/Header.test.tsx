import { Header } from "@/src/components/Header";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import { useSidebarDrawer } from "../../../contexts/SidebarDrawerContext";
import { useBreakpointValue } from "@chakra-ui/react";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";



jest.mock("../../../contexts/Auth/AuthContext", () => ({
  useAuth: jest.fn()
}))

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));


//Testar se o botão menu abre o drawer

describe("Header", () => {
  it("renders correctly", () => {
    (useAuth as jest.Mock).mockImplementation(() => ({
      signOutUser: () => Promise
    }));
    (useBreakpointValue as jest.Mock).mockReturnValueOnce(true)
    
    render(
      <Header/>
    );
    expect(screen.getByText("Flow")).toBeInTheDocument();
  });
  
  it("the user must log out by clicking the button", () => {
    const mockSignOut = jest.fn(() => Promise.resolve());
    (useAuth as jest.Mock).mockImplementation(() => ({
      signOutUser: mockSignOut
    }));
    (useBreakpointValue as jest.Mock).mockReturnValueOnce(false)
    
    render(
      <Header/>
    );
    
    expect(screen.getByRole("button", { name: "move_item" })).toBeInTheDocument()

    fireEvent.click(screen.getByRole("button", { name: "move_item" }))
    expect(mockSignOut).toHaveBeenCalledTimes(1)
  })
});

