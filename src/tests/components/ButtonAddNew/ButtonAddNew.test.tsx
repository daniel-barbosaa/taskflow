const { render, screen } = require("@testing-library/react")
import {
    useBreakpointValue,
} from "@chakra-ui/react";
import { ButtonAddNew} from '../../../components/ButtonAddNew'
import { fireEvent } from "@testing-library/dom";

jest.mock("@chakra-ui/react", () => ({
    ...jest.requireActual("@chakra-ui/react"),
    useBreakpointValue: jest.fn(),
  }));

describe("ButtonAddNew" , () => {
    it("render correctly" ,() => {
        (useBreakpointValue as jest.Mock).mockReturnValue(true); 

        render(
            <ButtonAddNew children="Adicionar novo" onOpen={jest.fn()}/>
        )

        expect(screen.getByText("N")).toBeInTheDocument()
        expect(screen.getByText("Adicionar novo")).toBeInTheDocument()
    })

    it("button open modal",() => {
        
        const mockOnOpen = jest.fn();

        render(
            <ButtonAddNew children="Adicionar novo" onOpen={mockOnOpen} key="1"/>
        )

        const buttonOpen = screen.getByTestId("add-new")

        expect(buttonOpen).toBeInTheDocument()
        fireEvent.click(buttonOpen)

        expect(mockOnOpen).toHaveBeenCalledTimes(1)

    })
})