import { Box, Flex, Text } from "@chakra-ui/react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Group A", value: 50},
  { name: "Group B", value: 20 },
  { name: "Group C", value: 30 },
];
const COLORS = ["#A461FF", "#38CB89", "#FFC658"];

export function TasksCharts() {
  return (
    <Box>
      <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="10px">
        Status das tarefas
      </Text>
      <Flex align="center">
        <PieChart width={200} height={200}>
          <Pie
            cx={80}
            cy={100}
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
        <Flex direction="column" >
            <Flex align="center" justify="space-between">
                <Flex align="center"gap="5px">
                    <Text color="#38cb898f" fontSize="30px">•</Text>
                    <Text fontSize="sm" color="gray.500">Finalizado</Text>
                </Flex>
                <Text fontSize="sm" color="gray.500" ml="3rem">50%</Text> 
            </Flex>
            <Flex align="center" justify="space-between">
                <Flex align="center"gap="5px">
                    <Text color="#ffc75860" fontSize="30px">•</Text>
                    <Text fontSize="sm" color="gray.500">Na fila</Text>
                </Flex>
                <Text  color="gray.500" ml="3rem"  fontSize="sm">40%</Text> 
            </Flex>
            <Flex align="center" justify="space-between">
                <Flex align="center"gap="5px">
                    <Text color="#a361ff83" fontSize="30px">•</Text>
                    <Text fontSize="sm" color="gray.500">Em progresso</Text>
                </Flex>
                <Text  color="gray.500" ml="3rem"  fontSize="sm">20%</Text> 
            </Flex>
        </Flex>
      </Flex>
     
    </Box>
  );
}
