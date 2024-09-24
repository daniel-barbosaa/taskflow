import React, { createContext, useContext, useState, ReactNode } from "react";

interface ManagementTaskType  {
  taskId: string;
  setTaskId: (type: string) => void;
}

const ManagementProjectContext = createContext<ManagementTaskType | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [taskId, setTaskId] = useState<string>("");

  return (
    <ManagementProjectContext.Provider
      value={{  taskId, setTaskId }}
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
