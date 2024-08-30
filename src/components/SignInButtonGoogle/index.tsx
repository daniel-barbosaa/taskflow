import { Box, Text, Flex} from "@chakra-ui/react";
import Image from 'next/image'
import ImageGoogle from "../../assets/Google.png"


export function SignInButtonGoogle() {
  return (
    <Box bg="white" padding="13px" borderRadius="8px" marginTop="10px" border="0.2px solid #E2E8F0" sx={{
        _hover: {
            border: "1px solid #CBD5E0",
        },
        transition:"all 0.3s ease"
    }} cursor="pointer">
      <Flex direction="row" align="center" justify="center" gap="10px">
        <Image src={ImageGoogle} alt="imagen google"/>
        <Text color="gray.600" fontWeight="500" fontSize="xl" textAlign="center">Entrar com Google</Text>
      </Flex>
    </Box>
  );
}
