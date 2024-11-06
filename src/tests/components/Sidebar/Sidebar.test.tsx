import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ActiveLink } from "../../../components/Sidebar/ActiveLink";
import { useRouter } from "next/router";
import { SidebarNav } from "@/src/components/Sidebar/SidebarNav";
import { debug } from "console";
import {useBreakpointValue} from "@chakra-ui/react";
import { Sidebar } from "@/src/components/Sidebar";


jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("@chakra-ui/react", () => ({
  ...jest.requireActual("@chakra-ui/react"),
  useBreakpointValue: jest.fn(),
}));

describe("ActiveLink", () => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    asPath: "/",
  }));

  it("renders correctly", () => {
    render(
      <ActiveLink href="/dashoard">
        <p>Dashboard</p>
      </ActiveLink>
    );

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
  });

  it("Apply style correctly when is active", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      asPath: "/dashboard",
    }));

    render(
      <ActiveLink href="/dashboard">
        <p>Dashboard</p>
      </ActiveLink>
    );

    const linkElement = screen.getByTestId("active-link");

    expect(linkElement).toHaveStyle({
      color: "rgb(58, 132, 255)",
      background: "white",
    });
  });

  it("Apply style correctly when is not active", () => {
    (useRouter as jest.Mock).mockImplementation(() => ({
      asPath: "/about",
    }));

    const { debug } = render(
      <ActiveLink href="/dashboard">
        <p>Dashboard</p>
      </ActiveLink>
    );
    debug();
    const linkElement = screen.getByTestId("active-link");
    expect(linkElement).toHaveStyle({
      color: "#718096",
      background: "transparent",
    });
  });
});

describe("SidebarNav", () => {
  it("renders correctly", () => {
    render(<SidebarNav />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Tarefas")).toBeInTheDocument();
  });
});

describe("Sidebar component", () => {
  it("renders correctly", () => {
    // (useBreakpointValue as jest.Mock).mockReturnValue(true);

    render(<Sidebar />);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Projetos")).toBeInTheDocument();
    expect(screen.getByText("Tarefas")).toBeInTheDocument();
    
  });
  
});
