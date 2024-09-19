import Dashboard from "@/src/pages/dashboard";
import {
  Flex,
  Text,
  Link as ChakraLink,
  LinkProps,
  Box,
} from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { ActiveLink } from "./ActiveLink";


export function Sidebar() {
  const path = usePathname();
  return (
    <Flex as="aside" w="64" direction="column" padding="40px 30px" gap="10px">
      <ActiveLink href="/dashboard">
        <Box
          display="flex"
          gap="5px"
          fontWeight="400"
          color="#718096"
          fontSize="lg"
          p="10px 30px 10px 10px"
          borderRadius="6px"
          sx={{
            _hover: {
              textDecoration: "none",
            },
          }}
        >
          <Text className="material-icons-outlined" w="24px" fontSize="lg">
            dashboard
          </Text>
          Dashboard
        </Box>
      </ActiveLink>
      <ActiveLink href="/projects">
        <Box
          display="flex"
          gap="5px"
          fontWeight="400"
          color="#718096"
          fontSize="lg"
          p="10px 30px 10px 10px"
          borderRadius="6px"
          sx={{
            _hover: {
              textDecoration: "none",
            },
          }}
        >
          <Text className="material-icons-outlined" w="24px" fontSize="lg">
            rule_folder
          </Text>
          Projetos
        </Box>
      </ActiveLink>
      <ActiveLink href="/tasks">
        <Box
          display="flex"
          gap="5px"
          fontWeight="400"
          color="#718096"
          fontSize="lg"
          p="10px 30px 10px 10px"
          borderRadius="6px"
          sx={{
            _hover: {
              textDecoration: "none",
            },
          }}
        >
          <Text className="material-icons-outlined" w="24px" fontSize="lg">
            task
          </Text>
          Tarefas
        </Box>
      </ActiveLink>
    </Flex>
  );
}
