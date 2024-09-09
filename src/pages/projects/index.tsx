import { Header } from "@/src/components/Header";
import { Sidebar } from "@/src/components/Sidebar";
import Image from "next/image";
import Time from "../../assets/Time.png";
import Check from "../../assets/Done.png";
import FileImg from "../../assets/file.png";

import {
  Flex,
  SimpleGrid,
  Box,
  Heading,
  Text,
  Progress,
  Button,
} from "@chakra-ui/react";
import { ActionPopover } from "@/src/components/ActionsPopover";

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex maxW={1280} mx="left">
        <Sidebar />
        <Flex
          as="section"
          padding="40px 40px 0 70px"
          w="100%"
          direction="column"
          gap="3rem"
        >
          <Flex align="center" w="100%" justify="space-between">
            <Heading as="h2" size="md">
              Projetos
            </Heading>
            <Flex gap="5px" align="center">
              <Text fontSize="sm" color="gray.500" fontWeight="normal">
                Total de projetos
              </Text>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
              >
                10
              </Text>
            </Flex>
          </Flex>
          <SimpleGrid minChildWidth="300px" gap="10px">
            <Flex
              align="center"
              justify="space-between"
              maxW={270}
              borderBottom="1px solid #A461FF"
              pb="15px"
            >
              <Flex align="center" gap="10px">
                <Box
                  w="30px"
                  padding="5px"
                  bg="#ffffff"
                  borderRadius="50%"
                  shadow="0 2px 8px 0 #0000001d"
                >
                  <Image src={Time} alt="relogio" />
                </Box>
                <Text color="gray.700">Em andamento</Text>
              </Flex>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
              >
                10
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              maxW={270}
              borderBottom="1px solid #FFC658"
              pb="15px"
            >
              <Flex align="center" gap="10px">
                <Box
                  w="30px"
                  padding="5px"
                  bg="#ffffff"
                  borderRadius="50%"
                  shadow="0 2px 8px 0 #0000001d"
                >
                  <Image src={FileImg} alt="relogio" />
                </Box>
                <Text color="gray.700">Na fila</Text>
              </Flex>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
              >
                10
              </Text>
            </Flex>
            <Flex
              align="center"
              justify="space-between"
              maxW={270}
              borderBottom="1px solid #38CB89"
              pb="15px"
            >
              <Flex align="center" gap="10px">
                <Box
                  w="30px"
                  padding="5px"
                  bg="#ffffff"
                  borderRadius="50%"
                  shadow="0 2px 8px 0 #0000001d"
                >
                  <Image src={Check} alt="relogio" />
                </Box>
                <Text color="gray.700">Finalizado</Text>
              </Flex>
              <Text
                bg="gray.200"
                p="3px"
                fontSize="12px"
                borderRadius="3px"
                color="gray.500"
                fontWeight="bold"
              >
                10
              </Text>
            </Flex>
          </SimpleGrid>
          <SimpleGrid minChildWidth="300px" gap="10px">
            <Box
              maxW={270}
              bg="#ffffff"
              position="relative"
              p="15px"
              borderRadius="8px"
              shadow="0 1px 4px 0 #00000013"
              overflow="visible"
              sx={{
                transition: "transform 0.3s ease-in-out",
               _hover: {
                  cursor: 'pointer',
                  transform: "scale(1.02)",
               }
             }}
              
            >
              <Box position="absolute" right="4">
                <ActionPopover/>
              </Box>
              
              <Flex align="center" justify="space-between">
                <Text
                  bg="#38cb898f"
                  fontSize="xs"
                  p="3px 7px"
                  borderRadius="8px"
                  color="#249261"
                >
                  Finalizado
                </Text>
              </Flex>
              <Text fontSize="lg" fontWeight="500" mt="10px">
                WaterApp
              </Text>
              <Text
                noOfLines={3}
                color="gray.600"
                fontSize="xs"
                mt="10px"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "3rem",
                    bg: "linear-gradient( to bottom, transparent, white)",
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, eius eligendi velit distinctio obcaecati molestias cum
                ipsam odio veniam saepe totam ipsum ipsa reiciendis quae
                expedita nemo, debitis architecto! Eum?
              </Text>
              <Box mt="20px">
                <Flex justify="space-between">
                  <Text fontSize="sm" fontWeight="600" color="gray.500">
                    Progresso
                  </Text>
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray"
                    mt="5px"
                  >
                    100%
                  </Text>
                </Flex>

                <Progress
                  value={100}
                  size="xs"
                  colorScheme="gray"
                  mt="5px"
                  borderRadius="8px"
                />
              </Box>

              <Flex justify="flex-end" mt="20px">
                <Flex align="center" color="gray.500" gap="5px">
                  <Text fontSize="sm" className="material-symbols-outlined">
                    calendar_month
                  </Text>
                  <Text fontSize="sm">jul 20</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              maxW={270}
              bg="#ffffff"
              position="relative"
              p="15px"
              borderRadius="8px"
              shadow="0 1px 4px 0 #00000013"
            >
              <Flex align="center" justify="space-between">
                <Text
                  bg="#ffc75860"
                  fontSize="xs"
                  p="3px 7px"
                  borderRadius="8px"
                  color="#fab833"
                >
                  Na fila
                </Text>
                <Text color="gray.500" className="material-symbols-outlined">
                  more_horiz
                </Text>
              </Flex>
              <Text fontSize="lg" fontWeight="500" mt="10px">
                Dashgo.
              </Text>
              <Text
                noOfLines={3}
                color="gray.600"
                fontSize="xs"
                mt="10px"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "3rem",
                    bg: "linear-gradient( to bottom, transparent, white)",
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, eius eligendi velit distinctio obcaecati molestias cum
                ipsam odio veniam saepe totam ipsum ipsa reiciendis quae
                expedita nemo, debitis architecto! Eum?
              </Text>
              <Box mt="20px">
                <Flex justify="space-between">
                  <Text fontSize="sm" fontWeight="600" color="gray.500">
                    Progresso
                  </Text>
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray"
                    mt="5px"
                  >
                    75%
                  </Text>
                </Flex>

                <Progress
                  value={75}
                  size="xs"
                  colorScheme="gray"
                  mt="5px"
                  borderRadius="8px"
                />
              </Box>

              <Flex justify="flex-end" mt="20px">
                <Flex align="center" color="gray.500" gap="5px">
                  <Text fontSize="sm" className="material-symbols-outlined">
                    calendar_month
                  </Text>
                  <Text fontSize="sm">ago 2</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              maxW={270}
              bg="#ffffff"
              position="relative"
              p="15px"
              borderRadius="8px"
              shadow="0 1px 4px 0 #00000013"
            >
              <Flex align="center" justify="space-between">
                <Text
                  bg="#a361ff83"
                  fontSize="xs"
                  p="3px 7px"
                  borderRadius="8px"
                  color="#944cf8"
                >
                  Em andamento
                </Text>
                <Text color="gray.500" className="material-symbols-outlined">
                  more_horiz
                </Text>
              </Flex>
              <Text fontSize="lg" fontWeight="500" mt="10px">
                Ignews
              </Text>
              <Text
                noOfLines={3}
                color="gray.600"
                fontSize="xs"
                mt="10px"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "3rem",
                    bg: "linear-gradient( to bottom, transparent, white)",
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, eius eligendi velit distinctio obcaecati molestias cum
                ipsam odio veniam saepe totam ipsum ipsa reiciendis quae
                expedita nemo, debitis architecto! Eum?
              </Text>
              <Box mt="20px">
                <Flex justify="space-between">
                  <Text fontSize="sm" fontWeight="600" color="gray.500">
                    Progresso
                  </Text>
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray"
                    mt="5px"
                  >
                    23%
                  </Text>
                </Flex>

                <Progress
                  value={23}
                  size="xs"
                  colorScheme="gray"
                  mt="5px"
                  borderRadius="8px"
                />
              </Box>

              <Flex justify="flex-end" mt="20px">
                <Flex align="center" color="gray.500" gap="5px">
                  <Text fontSize="sm" className="material-symbols-outlined">
                    calendar_month
                  </Text>
                  <Text fontSize="sm">jul 20</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              maxW={270}
              bg="#ffffff"
              position="relative"
              p="15px"
              borderRadius="8px"
              shadow="0 1px 4px 0 #00000013"
            >
              <Flex align="center" justify="space-between">
                <Text
                  bg="#a361ff83"
                  fontSize="xs"
                  p="3px 7px"
                  borderRadius="8px"
                  color="#944cf8"
                >
                  Em andamento
                </Text>
                <Text color="gray.500" className="material-symbols-outlined">
                  more_horiz
                </Text>
              </Flex>
              <Text fontSize="lg" fontWeight="500" mt="10px">
                Ignews
              </Text>
              <Text
                noOfLines={3}
                color="gray.600"
                fontSize="xs"
                mt="10px"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "3rem",
                    bg: "linear-gradient( to bottom, transparent, white)",
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, eius eligendi velit distinctio obcaecati molestias cum
                ipsam odio veniam saepe totam ipsum ipsa reiciendis quae
                expedita nemo, debitis architecto! Eum?
              </Text>
              <Box mt="20px">
                <Flex justify="space-between">
                  <Text fontSize="sm" fontWeight="600" color="gray.500">
                    Progresso
                  </Text>
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray"
                    mt="5px"
                  >
                    23%
                  </Text>
                </Flex>

                <Progress
                  value={23}
                  size="xs"
                  colorScheme="gray"
                  mt="5px"
                  borderRadius="8px"
                />
              </Box>

              <Flex justify="flex-end" mt="20px">
                <Flex align="center" color="gray.500" gap="5px">
                  <Text fontSize="sm" className="material-symbols-outlined">
                    calendar_month
                  </Text>
                  <Text fontSize="sm">jul 20</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              maxW={270}
              bg="#ffffff"
              position="relative"
              p="15px"
              borderRadius="8px"
              shadow="0 1px 4px 0 #00000013"
            >
              <Flex align="center" justify="space-between">
                <Text
                  bg="#a361ff83"
                  fontSize="xs"
                  p="3px 7px"
                  borderRadius="8px"
                  color="#944cf8"
                >
                  Em andamento
                </Text>
                <Text color="gray.500" className="material-symbols-outlined">
                  more_horiz
                </Text>
              </Flex>
              <Text fontSize="lg" fontWeight="500" mt="10px">
                Ignews
              </Text>
              <Text
                noOfLines={3}
                color="gray.600"
                fontSize="xs"
                mt="10px"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "3rem",
                    bg: "linear-gradient( to bottom, transparent, white)",
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, eius eligendi velit distinctio obcaecati molestias cum
                ipsam odio veniam saepe totam ipsum ipsa reiciendis quae
                expedita nemo, debitis architecto! Eum?
              </Text>
              <Box mt="20px">
                <Flex justify="space-between">
                  <Text fontSize="sm" fontWeight="600" color="gray.500">
                    Progresso
                  </Text>
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray"
                    mt="5px"
                  >
                    23%
                  </Text>
                </Flex>

                <Progress
                  value={23}
                  size="xs"
                  colorScheme="gray"
                  mt="5px"
                  borderRadius="8px"
                />
              </Box>

              <Flex justify="flex-end" mt="20px">
                <Flex align="center" color="gray.500" gap="5px">
                  <Text fontSize="sm" className="material-symbols-outlined">
                    calendar_month
                  </Text>
                  <Text fontSize="sm">jul 20</Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              maxW={270}
              bg="#ffffff"
              position="relative"
              p="15px"
              borderRadius="8px"
              shadow="0 1px 4px 0 #00000013"
            >
              <Flex align="center" justify="space-between">
                <Text
                  bg="#38cb898f"
                  fontSize="xs"
                  p="3px 7px"
                  borderRadius="8px"
                  color="#249261"
                >
                  Finalizado
                </Text>
                <Text color="gray.500" className="material-symbols-outlined">
                  more_horiz
                </Text>
              </Flex>
              <Text fontSize="lg" fontWeight="500" mt="10px">
                WaterApp
              </Text>
              <Text
                noOfLines={3}
                color="gray.600"
                fontSize="xs"
                mt="10px"
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  _after: {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    width: "100%",
                    height: "3rem",
                    bg: "linear-gradient( to bottom, transparent, white)",
                  },
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Corporis, eius eligendi velit distinctio obcaecati molestias cum
                ipsam odio veniam saepe totam ipsum ipsa reiciendis quae
                expedita nemo, debitis architecto! Eum?
              </Text>
              <Box mt="20px">
                <Flex justify="space-between">
                  <Text fontSize="sm" fontWeight="600" color="gray.500">
                    Progresso
                  </Text>
                  <Text
                    textAlign="right"
                    fontSize="sm"
                    fontWeight="bold"
                    color="gray"
                    mt="5px"
                  >
                    100%
                  </Text>
                </Flex>

                <Progress
                  value={100}
                  size="xs"
                  colorScheme="gray"
                  mt="5px"
                  borderRadius="8px"
                />
              </Box>

              <Flex justify="flex-end" mt="20px">
                <Flex align="center" color="gray.500" gap="5px">
                  <Text fontSize="sm" className="material-symbols-outlined">
                    calendar_month
                  </Text>
                  <Text fontSize="sm">jul 20</Text>
                </Flex>
              </Flex>
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </Flex>
  );
}
