import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import { useModal } from "../../contexts/ModalControlProject";
import {useManagementProject} from '../../contexts/ManagementOfProject'


interface ActionPopoverProps {
  projectId: string,
}


export function ActionPopover({projectId}: ActionPopoverProps) {
  const { onOpen, setModalType, setModalOfInfo} = useModal();
  const {setProjectId} = useManagementProject()
  return (
    <Box sx={{ transform: "none" }}>
      <Popover placement="right">
        <PopoverTrigger>
          <Button
            bg="none"
            sx={{
              _hover: {
                bg: "none",
              },
            }}
          >
            <Text
              color="gray.500"
              className="material-symbols-outlined"
              sx={{
                transition: "all 0.3s",
                _hover: {
                  color: "gray.600",
                },
              }}
            >
              more_horiz
            </Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent position="relative" zIndex="tooltip" w="200px">
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            <Flex direction="column" gap="5px">
              <Button bg="none" w="80%" color="gray.600" onClick={() => {
                onOpen()
                setModalType('edit')
                setProjectId(projectId)
              }}>
                Editar
              </Button>
              <Box h="1px" bg="gray.200" w="80%"></Box>
              <Button
                bg="none"
                w="80%"
                color="gray.600"
                sx={{
                  _hover: {
                    bg: "red.300",
                    color: "#ffffff",
                  },
                }}
                onClick={()=> {
                  onOpen()
                  setModalType('delete')
                  setProjectId(projectId)
                  setModalOfInfo(false)
                }}
              >
                Excluir
              </Button>
              <Box h="1px" bg="gray.200" w="80%"></Box>
              <Button
                bg="none"
                w="80%"
                color="gray.600"
                sx={{
                  _hover: {
                    bg: "red.300",
                    color: "#ffffff",
                  },
                }}
                onClick={()=> {
                  onOpen()
                  setModalType('info')
                }}
              >
                Exibir
              </Button>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
}
