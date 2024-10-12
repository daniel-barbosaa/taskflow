import { useManagementProject } from "@/src/contexts/ManagementOfProject";
import { Box, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import _ from "lodash";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import Link from "next/link";

export function ProjectChart({ prop = "default value" }) {
  const [isClient, setIsClient] = useState(false);
  // const { projects } = useManagementProject();
  
  const projects = []
 
  
  // const data = projects.map((project) => {
  //   return {
  //     name: project.name,
  //     tarefas: project.taskCount || 0,
  //   };
  // });
  useEffect(() => {
    setIsClient(true);
  });

  return (
    <Box as="section">
      <Text fontSize="sm" color="gray.500" fontWeight="normal" mb="2rem">
        Tarefas por projeto
      </Text>
      <Flex as="div" align="center">
        {projects.length <= 0 ? (
          <Flex align="center" justify="center" >
            <Text fontSize="md" color="gray.500" fontWeight="normal" display="inline">
              Você não tem projetos com tarefas. Comece criando seu primeiro <Link href="/projects"> <Text display="inline" color="#3A84FF" fontWeight="600">
                  projeto!
                </Text></Link>
            </Text>
          </Flex>
        ) : (
          <></>
        )}
        {/* {isClient && <BarChart
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
          <XAxis dataKey={"name"} scale="point" padding={{ left: 10, right: 10 }} name="name"/>
          <YAxis />
          <Tooltip />
          <Bar dataKey="tarefas" fill="#3A84FF" background={{ fill: '#eee' }} name="tarefas" />
        </BarChart>} */}
      </Flex>
    </Box>
  );
}
