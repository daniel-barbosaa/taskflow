import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {getAllTaskForProject} from "../services/projectService"
import { useManagementProject } from "./ManagementOfProject";

interface Task {
  id: string;
  taskName: string;
  status: string;
  projectName: string;
  projectId: string;
  createdAt?: any;
  updatedAt?: any;
}

interface ManagementTaskType {
  taskId: string;
  setTaskId: (type: string) => void;
  tasks: Task[];
  setTasks: (type: Task[]) => void;
  tasksForProject: Task[];
  setTasksForProjects: (type: Task[]) => void;
}

const ManagementProjectContext = createContext<ManagementTaskType | undefined>(
  undefined
);

export const TaskProvider: React.FC<{ children: ReactNode }> =   ({
  children,
}) => {
  const {projectId} = useManagementProject()
  const [taskId, setTaskId] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksForProject, setTasksForProjects] = useState<Task[]>([])


      useEffect(() => {
        if(projectId){
          const queryTask = async () => {
            try {
              const taskProject = await getAllTaskForProject("rFJ6ijVTQQPSjZshkPAh", projectId)
              setTasksForProjects(taskProject)
            }catch(error){
              console.log(error)
            }
          }
          queryTask()
        }
      }, [projectId])
 

  return (
    <ManagementProjectContext.Provider value={{ tasks, setTasks, taskId, setTaskId, tasksForProject, setTasksForProjects }}>
      {children}
    </ManagementProjectContext.Provider>
  );
};

export const useManagementTask = (): ManagementTaskType => {
  const context = useContext(ManagementProjectContext);
  if (!context) {
    throw new Error("Erro no contexto de Task");
  }
  return context;
};
