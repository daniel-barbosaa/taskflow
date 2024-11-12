import {
  Button,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface ButtonAddNewProps {
  children: string;
  onOpen: () => void;
}

export function ButtonAddNew({ onOpen, children }: ButtonAddNewProps) {
  const andBigScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  });

  return (
    <Button
      data-testid="add-new"
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex="2"
      bg="#3A84FF"
      p="30px 15px"
      borderRadius={andBigScreen ? "40px" : "50%"}
      sx={{
        _hover: {
          bg: "#2170f0",
        },
      }}
      onClick={onOpen}
    >
      <Flex align="center" gap="15px">
        {andBigScreen && (
          <>
            <Flex bg="#88B5FF" borderRadius="50%">
              <Text className="material-symbols-outlined" color="#ffffff">
                add
              </Text>
            </Flex>

            <Text color="white" fontWeight="bold">
              {children}
            </Text>
          </>
        )}
        <Flex bg="#88B5FF" borderRadius="2px" p="3px">
          <Text color="#ffffff">N</Text>
        </Flex>
      </Flex>
    </Button>
  );
}
