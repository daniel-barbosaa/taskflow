import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";

interface ActionPopoverProps {
  buttonText: string;
}

export function ActionPopover() {
  return (
    <Box sx={{ transform: "none" }}>
        <Popover placement="right">
      <PopoverTrigger>
        <Button bg="none" sx={{
            _hover: {
                bg: 'none'
            }
        }}>
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
      <PopoverContent position="relative" zIndex="tooltip">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Confirmation!</PopoverHeader>
        <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
      </PopoverContent>
    </Popover>
    </Box>
  );
}
