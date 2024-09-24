import React, { createContext, useContext, useState, ReactNode } from "react";

interface ManagementProjectType  {
  projectId: string;
  setProjectId: (type: string) => void;
}

const ManagementProjectContext = createContext<ManagementProjectType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projectId, setProjectId] = useState<string>("");

  return (
    <ManagementProjectContext.Provider
      value={{  projectId, setProjectId }}
    >
      {children}
    </ManagementProjectContext.Provider>
  );
};

export const useManagementProject = (): ManagementProjectType => {
  const context = useContext(ManagementProjectContext);
  if (!context) {
    throw new Error("useModal deve ser usado dentro do ModalProvider");
  }
  return context;
};
