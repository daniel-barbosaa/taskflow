import { Box, Button, Flex, Image, Text, Avatar } from "@chakra-ui/react";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import _ from "lodash";

export function Header() {
  const { signOutUser, user } = useAuth();

  console.log(user);

  async function handleLogOut() {
    try {
      await signOutUser();
      console.log("Usuario deslogado");
    } catch (error) {
      console.log("houve algum erro, tente novamente!");
    }
  }

  return (
    <Flex w="100%" as="header" padding="20px 30px" justify="space-between">
      <Flex>
        <Text fontSize="2xl" fontWeight="bold">
          task
          <Text color="#3A84FF" as="span">
            Flow
          </Text>
        </Text>
        <Flex direction="column" gap="4px" marginLeft="9rem">
          <Text fontWeight="600" color="#2F2F2F">
            Bem vindo, Daniel
          </Text>
          <Text fontSize="12px" color="#2F2F2F" opacity="80%">
            23 de agosto, 2024
          </Text>
        </Flex>
      </Flex>
      <Flex align="center" gap="10px">
        <Avatar
          src={user?.photoURL ?? undefined}
          name={user?.displayName ?? undefined}
          size="sm"
        />
        <Text color="#161616" opacity="80%">
          {_.startCase(_.toLower(user?.displayName ?? undefined))}
        </Text>
        <Button onClick={handleLogOut} padding="0" sx={{
          bg: "none",
          _hover: {
            bg: 'none',
          }
        }}>
          {" "}
          <Text
          
            className="material-symbols-outlined"
            color="gray.600"
            fontSize="xl"
          >
            move_item
          </Text>
        </Button>
      </Flex>
    </Flex>
  );
}
