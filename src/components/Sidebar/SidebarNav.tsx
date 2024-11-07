import {
  Text,
  Box,
  Stack,
} from "@chakra-ui/react";

import { ActiveLink } from "./ActiveLink";

// Se houver erro de navegação atraves dos links, é porque inves de usar um link estou usando uma div(Box) como elemento.
export function SidebarNav() {
  return (
    <Stack>
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
    </Stack>
  );
}
