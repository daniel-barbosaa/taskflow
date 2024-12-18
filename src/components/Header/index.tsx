import {
  Button,
  Flex,
  Text,
  Avatar,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useAuth } from "@/src/contexts/Auth/AuthContext";
import _ from "lodash";


import { ButtonOpenNavigation } from "./ButtonOpenNavigation";

export function Header() {
  const { signOutUser, user } = useAuth();

  async function handleLogOut() {
    try {
      await signOutUser();
      console.log("Usuario deslogado");
    } catch (error) {
      console.log("houve algum erro, tente novamente!");
    }
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex w="100%" as="header" padding="20px 30px" justify="space-between">
      <Flex align="center">
        {!isWideVersion && <ButtonOpenNavigation />}
        <Text fontSize="2xl" fontWeight="bold">
          task
          <Text color="#3A84FF" as="span">
            Flow
          </Text>
        </Text>
      </Flex>
      <Flex align="center" gap="10px">
        <Avatar
          src={user?.photoURL ?? undefined}
          name={user?.displayName ?? undefined}
          size="sm"
        />
        {isWideVersion && (
          <Text color="#161616" opacity="80%">
            {_.startCase(_.toLower(user?.displayName ?? undefined))}
          </Text>
        )}
        <Button
          onClick={handleLogOut}
          padding="0"
          sx={{
            bg: "none",
            _hover: {
              bg: "none",
            },
          }}
        >
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
