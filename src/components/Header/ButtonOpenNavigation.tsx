import { useSidebarDrawer } from "@/src/contexts/SidebarDrawerContext";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Icon, IconButton } from "@chakra-ui/react";


export function ButtonOpenNavigation () {
    const { onOpen } = useSidebarDrawer();
    return (
        <IconButton
        icon={<Icon fontSize="24px" as={HamburgerIcon} />}
        aria-label="Open navigation"
        fontSize="24"
        variant="unstyled"
        onClick={onOpen}
        mr="3"
        value="menu"
      ></IconButton>
    )
}