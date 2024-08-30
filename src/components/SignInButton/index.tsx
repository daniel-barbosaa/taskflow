import { Box,Text} from '@chakra-ui/react'

export function SignInButton () {
    return (
       <Box cursor="pointer" bg="#3A84FF" padding="13px" borderRadius="8px" marginTop="30px" sx={{
        _hover:{
            bg: "#2679ff"
        },
        transition: "all 0.3s ease"
       }}>
            <Text color="white" fontWeight="400" fontSize="xl" textAlign="center">Entrar</Text>
       </Box> 
    )
}