import { Flex, Text, Link, LinkProps } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  const path = usePathname();
  const isActive = false;

  console.log(path);
  return (
    <Flex
      as="aside"
      w="64"
      direction="column"
      padding="40px 30px"
      gap="30px"
      h="870"
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
        fontSize="lg"
        href=""
      >
        <Text
          className="material-icons-outlined"
          color="#718096"
          w="24px"
          fontSize="lg"
        >
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
        fontSize="lg"
        href=""
      >
        <Text
          className="material-icons-outlined"
          color="#718096"
          w="24px"
          fontSize="lg"
        >
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
        fontSize="lg"
        href=""
      >
        <Text
          className="material-icons-outlined"
          color="#718096"
          w="24px"
          fontSize="lg"
        >
          task
        </Text>
        Tarefas
      </Link>
    </Flex>
  );
}
