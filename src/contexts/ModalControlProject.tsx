import React, { createContext, useContext, useState, ReactNode } from "react";
import { useDisclosure } from "@chakra-ui/react";

interface ModalContextType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  modalType: string;
  setModalType: (type: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalType, setModalType] = useState<string>("");

  return (
    <ModalContext.Provider
      value={{ isOpen, onOpen, onClose, modalType, setModalType }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro do ModalProvider");
  }
  return context;
};
