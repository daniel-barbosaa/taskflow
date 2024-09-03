import { Flex, Text, Link, LinkProps } from "@chakra-ui/react";
import {usePathname} from 'next/navigation'

export function Sidebar() {
    const path = usePathname()  
    const isActive = false

    console.log(path)
  return (
    <Flex
      as="aside"
      bg="#ffffff"
      w="64"
      direction="column"
      padding="40px 30px"
      gap="30px"
      h="870"
      borderRight="1px solid #CBD5E0"
    >
      <Link
        sx={{
          _hover: {
            textDecoration: "none",
          },
        }}
        display="flex"
        gap="5px"
        fontWeight="400"
        color="#718096"
        alignItems="center"
        fontSize="20px"
        href=""
      >
        <Text className="material-icons-outlined" color="#718096" w="24px">
        dashboard
        </Text>
        Dashboard
      </Link>
      <Link
        sx={{
          _hover: {
            textDecoration: "none",
          },
        }}
        display="flex"
        gap="5px"
        fontWeight="400"
        color="#718096"
        alignItems="center"
        fontSize="20px"
        href=""
      >
        <Text className="material-icons-outlined" color="#718096" w="24px">
          rule_folder
        </Text>
        Projetos
      </Link>

      <Link
        sx={{
          _hover: {
            textDecoration: "none",
          },
        }}
        display="flex"
        gap="5px"
        fontWeight="400"
        color="#718096"
        alignItems="center"
        fontSize="20px"
        href=""
      >
        <Text className="material-icons-outlined" color="#718096" w="24px">
          task
        </Text>
        Tarefas
      </Link>
    </Flex>
  );
}
