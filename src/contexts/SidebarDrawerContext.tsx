import React, { createContext, useContext, ReactNode } from "react";
import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";

interface SidebarDrawerProviderProps {
    children: ReactNode
}

const SidebarDrawerContext = createContext({} as UseDisclosureReturn)

export function SidebarDrawerPorvider ({children}: SidebarDrawerProviderProps)  {
  const disclosure = useDisclosure();
  
  return (
    <SidebarDrawerContext.Provider
      value={disclosure}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => {
    return useContext(SidebarDrawerContext)
}
