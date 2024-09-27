import React, { createContext, useContext, useState, ReactNode } from "react";

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: string;
  createdAt?: any;
  updatedAt?: any;
}

interface ManagementProjectType  {
  projectId: string;
  setProjectId: (type: string) => void;
  projectInfo: Project | null;
  setProjectInfo: (type: Project) => void
}

const ManagementProjectContext = createContext<ManagementProjectType | undefined>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [projectId, setProjectId] = useState<string>("");
  const [projectInfo, setProjectInfo] = useState<Project | null>(null)

  return (
    <ManagementProjectContext.Provider
      value={{  projectId, setProjectId, projectInfo, setProjectInfo }}
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
