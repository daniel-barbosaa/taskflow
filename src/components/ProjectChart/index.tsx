import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import { Box, Flex, Stack, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import _ from "lodash";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Link from "next/link";

// Resolver erro, next nao permite link dentro de texto

export function ProjectChart({ prop = "default value" }) {
  const [isClient, setIsClient] = useState(false);
  const { projects } = useManagementProject();
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const existProjects = projects.length > 0

  const data = projects.map((project) => {
    return {
      name: project.name,
      tarefas: project.taskCount || 0,
    };
  });
  useEffect(() => {
    setIsClient(true);
  });

 

  return (
    <Stack>
      {existProjects && (
        <>
        <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="2rem">
        Tarefas por projeto
      </Text>
      <Flex as="div" align="center">
        {isClient && (
          <BarChart
            width={isWideVersion ? 500 : 300}
            height={isWideVersion ? 300 : 200}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey={"name"}
              scale="point"
              padding={{ left: 10, right: 10 }}
              name="name"
            />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="tarefas"
              fill="#3A84FF"
              background={{ fill: "#eee" }}
              name="tarefas"
            />
          </BarChart>
        )}
      </Flex>
        </>
      ) }
      
    </Stack>
  );
}
