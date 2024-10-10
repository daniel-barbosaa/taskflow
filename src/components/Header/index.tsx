import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Avatar from 'react-avatar';

import { useAuth } from "@/src/contexts/Auth/AuthContext"; 

export function Header() {
  const {signOutUser} = useAuth()
  
  async function handleLogOut() {
    try{
      await signOutUser()
      console.log("Usuario deslogado")
    }catch(error){
      console.log("houve algum erro, tente novamente!")
    }
    
  }

  return (
    <Flex w="100%"  as="header" padding="20px 30px" justify="space-between" >
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
        {/* <Avatar name="Daniel barbosa" size="30px" round></Avatar> */}
        <Text color="#4F4F4F" opacity="80%">danimendes9728@gmail.com</Text>
        
      </Flex>
    </Flex>
  );
}
