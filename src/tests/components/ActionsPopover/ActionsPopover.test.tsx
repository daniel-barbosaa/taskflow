import { ActionPopover } from "@/src/components/ActionsPopover"
import { fireEvent, render,screen } from "@testing-library/react"
import { useModal } from "../../../contexts/ModalControlProject";
import {useManagementProject} from '../../../contexts/ManagementOfProject'

jest.mock("../../../contexts/ModalControlProject", () => ({
    useModal: jest.fn()
}))
jest.mock("../../../contexts/ManagementOfProject", () => ({
    useManagementProject: jest.fn()
}))

describe("Actions Popover", () => {
    it("renders correctly", () => {
        (useModal as jest.Mock).mockReturnValue({
            onOpen: jest.fn(),
            setModalType: jest.fn(),
            setModalOfInfo: jest.fn()
        });
        (useManagementProject as jest.Mock).mockReturnValue({
            setProjectId: "testando"
        });
        render(
            <ActionPopover projectId="s23sdm2mss2s"/>
        )

        expect(screen.getByText("Excluir")).toBeInTheDocument()
        expect(screen.getByText("Editar")).toBeInTheDocument()
        expect(screen.getByText("Exibir")).toBeInTheDocument()
    })

    it("edit button its opens modal", () => {
        const mockOnOpen = jest.fn(() => 1);
        const mockSetModalType = jest.fn();
        const mockSetProjectId = jest.fn();
        const mockSetModalOfInfo = jest.fn();

        (useModal as jest.Mock).mockReturnValueOnce({
            onOpen: mockOnOpen,
            setModalType: mockSetModalType,
            setModalOfInfo: mockSetModalOfInfo,
        });
        (useManagementProject as jest.Mock).mockReturnValueOnce({
            setProjectId: mockSetProjectId
        });
        render(
            <ActionPopover projectId="testeid123"/>
        )

        fireEvent.click(screen.getByRole("button", { name: /more_horiz/i }));
        const editButton = screen.getByTestId('editar');
        expect(editButton).toBeInTheDocument();

        fireEvent.click(editButton);
        expect(mockOnOpen).toHaveBeenCalledWith();
        expect(mockSetModalType).toHaveBeenCalledWith('edit');
        expect(mockSetProjectId).toHaveBeenCalledWith('testeid123');
        expect(mockSetModalOfInfo).toHaveBeenCalledWith(true);
        
    })

    it("delete button its opens modal", () => {
        const mockOnOpen = jest.fn(() => 1);
        const mockSetModalType = jest.fn();
        const mockSetProjectId = jest.fn();
        const mockSetModalOfInfo = jest.fn();

        (useModal as jest.Mock).mockReturnValueOnce({
            onOpen: mockOnOpen,
            setModalType: mockSetModalType,
            setModalOfInfo: mockSetModalOfInfo,
        });
        (useManagementProject as jest.Mock).mockReturnValueOnce({
            setProjectId: mockSetProjectId
        });
        render(
            <ActionPopover projectId="testeid123"/>
        )

        fireEvent.click(screen.getByRole("button", { name: /more_horiz/i }));
        const editButton = screen.getByTestId('excluir');
        expect(editButton).toBeInTheDocument();

        fireEvent.click(editButton);
        expect(mockOnOpen).toHaveBeenCalledWith();
        expect(mockSetModalType).toHaveBeenCalledWith('delete');
        expect(mockSetProjectId).toHaveBeenCalledWith('testeid123');
        expect(mockSetModalOfInfo).toHaveBeenCalledWith(false);
        
    })

    it("exibir button its opens modal", () => {
        const mockOnOpen = jest.fn(() => 1);
        const mockSetModalType = jest.fn();
        const mockSetProjectId = jest.fn();
        const mockSetModalOfInfo = jest.fn();

        (useModal as jest.Mock).mockReturnValueOnce({
            onOpen: mockOnOpen,
            setModalType: mockSetModalType,
            setModalOfInfo: mockSetModalOfInfo,
        });
        (useManagementProject as jest.Mock).mockReturnValueOnce({
            setProjectId: mockSetProjectId
        });
        render(
            <ActionPopover projectId="testeid123"/>
        )

        fireEvent.click(screen.getByRole("button", { name: /more_horiz/i }));
        const editButton = screen.getByTestId('exibir');
        expect(editButton).toBeInTheDocument();

        fireEvent.click(editButton);
        expect(mockOnOpen).toHaveBeenCalledWith();
        expect(mockSetModalType).toHaveBeenCalledWith('info');
        expect(mockSetProjectId).toHaveBeenCalledWith('testeid123');
        expect(mockSetModalOfInfo).toHaveBeenCalledWith(false);
    })
})