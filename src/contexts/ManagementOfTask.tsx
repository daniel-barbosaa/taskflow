import React, { createContext, useContext, useState, ReactNode } from "react";

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
  setTasks: (type: Task[]) => void
}

const ManagementProjectContext = createContext<ManagementTaskType | undefined>(
  undefined
);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [taskId, setTaskId] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <ManagementProjectContext.Provider value={{ tasks, setTasks, taskId, setTaskId }}>
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
