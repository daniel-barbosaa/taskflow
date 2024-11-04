import "@testing-library/jest-dom";
import { getByRole, render, screen } from "@testing-library/react";
import { ActiveLink } from "../../../components/Sidebar/ActiveLink";
import { NextRouter, useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("ActiveLink Component", () => {
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
          asPath: '/about',
      }))

      const {debug}= render(
          <ActiveLink href="/dashboard">
              <p>Dashboard</p>
          </ActiveLink>
      )
      debug()
      const linkElement = screen.getByTestId("active-link");
    expect(linkElement).toHaveStyle({
      color: "#718096",
      background: "transparent",
    });
  })
});

//Aplicar os testes do Sidebar
describe("SidebarNav Component", () => {

})



