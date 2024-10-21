import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { getAllProjectsByIdOfUser } from "../services/projectService";
import { useAuth } from "./Auth/AuthContext";

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: string;
  createdAt?: any;
  updatedAt?: any;
  taskCount?: number;
}

interface ManagementProjectType {
  projectId: string;
  setProjectId: (type: string) => void;
  projectInfo: Project | null;
  setProjectInfo: (type: Project) => void;
  projects: Project[];
  setProjects: (type: Project[]) => void;
  loaded: boolean;
}

const ManagementProjectContext = createContext<
  ManagementProjectType | undefined
>(undefined);

export const ProjectProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [projectId, setProjectId] = useState<string>("");
  const [projectInfo, setProjectInfo] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>([]);
  const { user } = useAuth();
  const userId = user?.uid;
  useEffect(() => {
    setLoaded(false);
    getAllProjectsByIdOfUser(userId, (projects) => {
      setProjects(projects);
    });

    const timer = setTimeout(() => {
      setLoaded(true);
    },1000);

  }, [userId]);

  return (
    <ManagementProjectContext.Provider
      value={{
        projects,
        setProjects,
        projectId,
        setProjectId,
        projectInfo,
        setProjectInfo,
        loaded,
      }}
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
