import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import {
  getAllTaskForProject,
  getAllTasksByIdOfUser,
} from "../services/projectService";
import { useManagementProject } from "./ManagementOfProject";
import { useAuth } from "./Auth/AuthContext";

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
  loaded: boolean;
}

const ManagementProjectContext = createContext<ManagementTaskType | undefined>(
  undefined
);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const userId = user?.uid;
  const { projectId } = useManagementProject();
  const [taskId, setTaskId] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);
  const [tasksForProject, setTasksForProjects] = useState<Task[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const queryTask = async () => {
      if (userId) {
        setLoading(true);
        setLoaded(false)
        try {
          await getAllTasksByIdOfUser(userId, (tasks) => {
            setTasks(tasks);
          });
          setTimeout(() => {
            setLoaded(true);
          }, 2000);

          if (projectId) {
            const taskProject = await getAllTaskForProject(userId, projectId);
            setTasksForProjects(taskProject);
          }
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
    };
    queryTask();
  }, [projectId, userId]);

  return (
    <ManagementProjectContext.Provider
      value={{
        tasks,
        setTasks,
        taskId,
        setTaskId,
        tasksForProject,
        setTasksForProjects,
        loaded,
      }}
    >
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
