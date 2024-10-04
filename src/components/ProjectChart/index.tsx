import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import _ from 'lodash';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

//   {
//     name: "Page A",
//     tarefas: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

export function ProjectChart({ prop = 'default value' }) {
  const [isClient, setIsClient] = useState(false)
  const {projects} = useManagementProject()

  const data = projects.map((project) => {
    return {
      name: _.capitalize(project.name),
      tarefas: project.taskCount || 0  
    }
  })

  useEffect(() => {
  setIsClient(true) 
  })

  return (
    <Box as="section">
      <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="2rem">
        Tarefas por projeto
      </Text>
      <Flex as="div" align="center">
        {isClient && <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey={"name"} scale="point" padding={{ left: 10, right: 10 }}  />
          <YAxis />
          <Tooltip />
          <Bar dataKey="tarefas" fill="#3A84FF" background={{ fill: '#eee' }} />
        </BarChart>}
      
      </Flex>
    </Box>
  );
}
