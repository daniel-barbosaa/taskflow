import { Box, Text, Flex, Spinner } from "@chakra-ui/react";
import Image from "next/image";
import ImageGoogle from "../../assets/Google.png";
import { useGoogleLoggin } from "../../hooks/useGoogleLoggin";

export function SignInButtonGoogle() {
  const { logginWithGoogle } = useGoogleLoggin();

  return (
    <Box
      data-testid="loggin-click"
      onClick={logginWithGoogle}
      bg="white"
      padding="13px"
      borderRadius="8px"
      marginTop="10px"
      border="0.2px solid #E2E8F0"
      sx={{
        _hover: {
          bg: "#e0e0e052",
          border: "1px solid #CBD5E0",
        },
        transition: "all 0.3s ease",
      }}
      cursor="pointer"
    >
      <Flex direction="row" align="center" justify="center" gap="10px">
        <Image src={ImageGoogle} alt="imagen google" />
        <Text
          color="gray.600"
          fontWeight="500"
          fontSize="xl"
          textAlign="center"
        >
          Entrar com Google
        </Text>
      </Flex>
    </Box>
  );
}
