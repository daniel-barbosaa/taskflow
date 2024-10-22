import { useManagementTask } from "@/src/contexts/ManagementOfTask";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";
import addTask from "../../assets/addfilepng.png";
import Link from "next/link";

interface Task {
  id: string;
  taskName: string;
  status: string;
  projectName: string;
  projectId: string;
  createdAt?: any;
  updatedAt?: any;
}

const COLORS = ["#38CB89", "#A461FF", "#FFC658"];

export function TasksCharts() {
  const [isClient, setIsClient] = useState(false);
  const { tasks } = useManagementTask();
  let taskInLine: Task[] = [];
  let taskInProgress: Task[] = [];
  let taskFinished: Task[] = [];
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  tasks.forEach((task) => {
    switch (task.status) {
      case "na fila":
        taskInLine.push(task);
        break;
      case "em progresso":
        taskInProgress.push(task);
        break;
      case "finalizado":
        taskFinished.push(task);
        break;
    }
  });

  const data = [
    { name: "finalizado", value: taskFinished.length },
    { name: "em progresso", value: taskInProgress.length },
    { name: "na fila", value: taskInLine.length },
  ];

  let totalTasks = tasks.length;

  const percentForTask = [
    {
      name: "finalizado",
      value: totalTasks
        ? Math.round((taskFinished.length / totalTasks) * 100)
        : 0,
    },
    {
      name: "em progresso",
      value: totalTasks
        ? Math.round((taskInProgress.length / totalTasks) * 100)
        : 0,
    },
    {
      name: "na fila",
      value: totalTasks
        ? Math.round((taskInLine.length / totalTasks) * 100)
        : 0,
    },
  ];

  useEffect(() => {
    setIsClient(true);
  });

  return (
    <Box maxW={!isWideVersion ? 200 : "100%"} >
      <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="10px">
        Status das tarefas
      </Text>
      <Flex align="center">
        {totalTasks <= 0 ? (
          <Flex justify="center" align="center" direction="column" mt={5}>
            <Flex direction="row">
              <Text
                fontSize="md"
                color="gray.500"
                fontWeight="normal"
                display="inline"
              >
                Sem tarefas no momento. Comece a organizar seu projeto
                adicionando algumas
                <Link
                  href="/projects"
                  style={{
                    color: "#3A84FF",
                    marginLeft: "4px",
                    fontWeight: "bold",
                  }}
                >
                  tarefas.
                </Link>
              </Text>
            </Flex>
            <Link href="/tasks">
              <Image src={addTask} alt="add tarefas" width={150}></Image>
            </Link>
          </Flex>
        ) : (
          <>
            {isClient && (
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
                  {percentForTask.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            )}
           
              <Flex direction="column">
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="5px">
                    <Text color="#38cb898f" fontSize="30px">
                      •
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Finalizado
                    </Text>
                  </Flex>
                  <Text fontSize="sm" color="gray.500" ml="3rem">
                    {`${percentForTask[0].value}%`}
                  </Text>
                </Flex>
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="5px">
                    <Text color="#ffc75860" fontSize="30px">
                      •
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Na fila
                    </Text>
                  </Flex>
                  <Text color="gray.500" ml="3rem" fontSize="sm">
                    {`${percentForTask[2].value}%`}
                  </Text>
                </Flex>
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap="5px">
                    <Text color="#a361ff83" fontSize="30px">
                      •
                    </Text>
                    <Text fontSize="sm" color="gray.500">
                      Em progresso
                    </Text>
                  </Flex>
                  <Text color="gray.500" ml="3rem" fontSize="sm">
                    {`${percentForTask[1].value}%`}
                  </Text>
                </Flex>
              </Flex>
          </>
        )}
      </Flex>
    </Box>
  );
}
