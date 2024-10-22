import Dashboard from "@/src/pages/dashboard";
import {
  Flex,
  Text,
  Link as ChakraLink,
  LinkProps,
  Box,
  useBreakpointValue,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";

import { SidebarNav } from "./SidebarNav";
import { useSidebarDrawer } from "@/src/contexts/SidebarDrawerContext";

export function Sidebar() {
  const {onClose, isOpen} = useSidebarDrawer()
  const isDrawerSidebar = useBreakpointValue({
    base: true,
    lg: false,
  });

  if (isDrawerSidebar) {
    return (
      <Drawer  isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay w="100%" h="100%">
        <DrawerContent bg="#F4F5F7" >
          <DrawerCloseButton mt="1" mr="3" />
          <DrawerHeader>Navegação</DrawerHeader>

          <DrawerBody>
            <SidebarNav />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
    )
  }

  return (
    <Flex as="aside" w="64" direction="column" padding="40px 30px" gap="10px">
      <SidebarNav />
    </Flex>
  );
}
