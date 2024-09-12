import {  Button, Flex, Text, useDisclosure } from "@chakra-ui/react";

interface ButtonAddNewProps {
  children: string;
  onOpen: () => void
}

export function ButtonAddNew({ onOpen,children }: ButtonAddNewProps) {

  return (
    <Button
      position="fixed"
      bottom="30px"
      right="30px"
      zIndex="2"
      bg="#3A84FF"
      p="30px 15px"
      borderRadius="40px"
      sx={{
        _hover: {
          bg: "#2170f0",
        },
      }}
      onClick={onOpen}
    >
      <Flex align="center" gap="15px">
        <Flex bg="#88B5FF" borderRadius="50%">
          <Text className="material-symbols-outlined" color="#ffffff">
            add
          </Text>
        </Flex>
        <Text color="white" fontWeight="bold">
          {children}
        </Text>
        <Flex bg="#88B5FF" borderRadius="2px" p="3px">
          <Text color="#ffffff">N</Text>
        </Flex>
      </Flex>
    </Button>
  );
}
