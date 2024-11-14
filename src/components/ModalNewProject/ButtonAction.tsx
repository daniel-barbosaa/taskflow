import { useModal } from "@/src/contexts/ModalControlProject";
import { Button, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";

interface ButtonActionProps {
    loading: boolean;
  }

export function ButtonAction({loading}: ButtonActionProps) {
  
  const { modalType} = useModal();
  return (
    <Button data-testid="button-action" type="submit" colorScheme="blue" w="50%">
      {loading ? (
        <Spinner color="white" size="md" />
      ) : (
        <Text>
          {modalType === "editproject"
            ? "Atualizar projeto"
            : "Adicionar projeto"}
        </Text>
      )}
    </Button>
  );
}
