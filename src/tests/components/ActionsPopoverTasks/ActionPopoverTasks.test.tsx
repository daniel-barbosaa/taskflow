import { fireEvent, render,screen } from "@testing-library/react"
import { useModal } from "../../../contexts/ModalControlProject";
import {useManagementProject} from '../../../contexts/ManagementOfProject'
import { ActionPopoverTasks } from "@/src/components/ActionsPopoverTasks";
import { useManagementTask } from "../../../contexts/ManagementOfTask";



jest.mock("../../../contexts/ModalControlProject", () => ({
    useModal: jest.fn()
}))
jest.mock("../../../contexts/ManagementOfProject", () => ({
    useManagementProject: jest.fn()
}))

jest.mock("../../../contexts/ManagementOfTask", () => ({
    useManagementTask: jest.fn()
}))

describe("Actions PopoverTasks", () => {
    it("renders correctly", () => {
        (useModal as jest.Mock).mockReturnValue({
            onOpen: jest.fn(),
            setModalType: jest.fn(),
            setModalOfInfo: jest.fn()
        });

        (useManagementProject as jest.Mock).mockReturnValue({
            setProjectId: "projectid"
        });
        (useManagementTask as jest.Mock).mockReturnValue({
            setTaskId: "taskid"
        });
        render(
            <ActionPopoverTasks projectId="projectid" taskId="taskid"/>
        )

        expect(screen.getByText("Excluir")).toBeInTheDocument()
        expect(screen.getByText("Editar")).toBeInTheDocument()
    })

    it("button edit task its opens modal", () => {
        const mockOnOpen = jest.fn(() => 1);
        const mockSetModalType = jest.fn();
        const mockSetModalInfo = jest.fn();
        (useModal as jest.Mock).mockReturnValueOnce({
            onOpen: mockOnOpen,
            setModalType: mockSetModalType,
            setModalOfInfo: mockSetModalInfo
        });
       
        render(
            <ActionPopoverTasks projectId="projectid" taskId="taskid"/>
        )

        fireEvent.click(screen.getByRole("button", { name: /more_horiz/i }));
        const editButton = screen.getByTestId('editar');
        expect(editButton).toBeInTheDocument();

        fireEvent.click(editButton);
        expect(mockOnOpen).toHaveBeenCalledWith();
        expect(mockSetModalType).toHaveBeenCalledWith('edit');
        
    })

    it("button delete task its opens modal", () => {
        const mockOnOpen = jest.fn();
        const mockSetModalType = jest.fn();
        const mockSetProjectId = jest.fn();
        const mockSetModalOfInfo = jest.fn();
        const mockSetTaskId = jest.fn();
        (useModal as jest.Mock).mockReturnValueOnce({
            onOpen: mockOnOpen,
            setModalType: mockSetModalType,
            setModalOfInfo: mockSetModalOfInfo,
        });
        (useManagementTask as jest.Mock).mockReturnValue({
            setTaskId: mockSetTaskId
        });
        (useManagementProject as jest.Mock).mockReturnValue({
            setProjectId: mockSetProjectId
        });

        render(
            <ActionPopoverTasks projectId="projectid" taskId="taskid"/>
        )

        fireEvent.click(screen.getByRole("button", { name: /more_horiz/i }));
        const editButton = screen.getByTestId('excluir');
        expect(editButton).toBeInTheDocument();

        fireEvent.click(editButton);
        expect(mockOnOpen).toHaveBeenCalledWith();
        expect(mockSetModalType).toHaveBeenCalledWith('delete');
        expect(mockSetProjectId).toHaveBeenCalledWith('projectid');
        expect(mockSetTaskId).toHaveBeenCalledWith('taskid');
        
    })
})