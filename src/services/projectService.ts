import { number } from "prop-types";
import { db } from "./firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  serverTimestamp,
  updateDoc,
  doc,
  deleteDoc,
  query,
  where,
  getDocs,
  Timestamp,
  increment,
} from "firebase/firestore";

interface Project {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: string;
  createdAt?: any;
  updatedAt?: any;
}
interface UpdatedProject {
  name: string;
  description: string;
  status: string;
  progress: number;
}

interface TaskData {
  taskName: string;
  status: string;
  projectName: string;
  projectId: string;
}

interface Task {
  id: string;
  taskName: string;
  status: string;
  projectName: string;
  projectId: string;
  createdAt?: any;
  updatedAt?: any;
}
// Services for projects
export function getAllProjectsByIdOfUser(
  userId: string,
  callback: (projects: Project[]) => void
) {
  try {
    const projectsCollection = collection(db, `users/${userId}/projects`);
    const projectsInRealTimeList = onSnapshot(
      projectsCollection,
      (querySnapshot) => {
        const projects: Project[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            name: data.name || "",
            description: data.description || "",
            progress: data.progress || "0%",
            status: data.status || "unknown",
            createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
            updatedAt: data.updatedAt ? data.updatedAt.toDate() : new Date(),
            taskCount: data.taskCount || 0
          };
        });

        const sortedProjects = projects.sort((a, b) => {
          return b.createdAt - a.createdAt;
        });

        callback(sortedProjects);
      }
    );

    return projectsInRealTimeList;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

export async function addNewProject(userId: string, projectData: any) {
  try {
    if (!userId || userId === "" || userId === null) {
      throw new Error();
    }

    const projectsCollection = collection(db, `users/${userId}/projects`);
    const project = {
      name: projectData.name,
      description: projectData.description,
      progress: projectData.progress,
      status: projectData.status,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };
    await addDoc(projectsCollection, project);
  } catch (error) {
    console.log("Error to the add project", error);
    return;
  }
}

export async function updatedProject(
  userId: string,
  projectId: string,
  projectData: UpdatedProject
) {
  try {
    const projectCollection = doc(db, `users/${userId}/projects`, projectId);

    const project = {
      name: projectData.name,
      description: projectData.description,
      progress: projectData.progress,
      status: projectData.status,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(projectCollection, project);
  } catch (error) {
    console.log("Erro ao atualizar projeto", error);
  }
}

export async function deleteProject(userId: string, projectId: string) {
  try {
    const projectCollection = doc(db, `users/${userId}/projects`, projectId);
    await deleteDoc(projectCollection);
  } catch (error) {
    console.log("Erro ao excluir  projeto", error);
  }
}
// Services for tasks
export function getAllTasksByIdOfUser(
  userId: string,
  callback: (tasks: Task[]) => void
) {
  try {
    const projectsCollection = collection(db, `users/${userId}/tasks`);
    const projectsInRealTime = onSnapshot(
      projectsCollection,
      (querySnapshot) => {
        const tasks: Task[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            taskName: data.taskName || "",
            status: data.status || "unknown",
            projectName: data.projectName || "",
            projectId: data.projectId || "",
            createdAt: data.createdAt
              ? data.createdAt.toDate().toISOString()
              : new Date().toISOString(),
            updatedAt: data.updatedAt
              ? data.updatedAt.toDate().toISOString()
              : new Date().toISOString(),
          };
        });
        callback(tasks);
      }
    );
    return projectsInRealTime;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
}

export async function addNewTask(userId: string, taskData: TaskData) {
  try {
    if (!userId || userId === "" || userId === null) {
      throw new Error();
    }
    const tasksCollection = collection(db, `users/${userId}/tasks`);

    const task = {
      taskName: taskData.taskName,
      status: taskData.status,
      projectName: taskData.projectName,
      projectId: taskData.projectId,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    await addDoc(tasksCollection, task);

    if (taskData.status !== "finalizado") {
      const projectRef = doc(
        db,
        `users/${userId}/projects`,
        taskData.projectId
      );
      await updateDoc(projectRef, {
        taskCount: increment(1),
      });
    }
  } catch (error) {
    console.log("Error to the add task", error);
    return;
  }
}

export async function updatedTask(
  userId: string,
  taskId: string,
  taskData: TaskData
) {
  try {
    const taskCollection = doc(db, `users/${userId}/tasks`, taskId);

    const task = {
      taskName: taskData.taskName,
      status: taskData.status,
      projectName: taskData.projectName,
      projectId: taskData.projectId,
      updatedAt: serverTimestamp(),
    };

    await updateDoc(taskCollection, task);
  } catch (error) {
    console.log("Erro ao atualizar tarefa", error);
  }
}

export async function deleteTask(
  userId: string,
  taskId: string,
  projectId: string
) {
  try {
    const taskCollection = doc(db, `users/${userId}/tasks`, taskId);
    await deleteDoc(taskCollection);

    const projectRef = doc(db, `users/${userId}/projects`, projectId);
    await updateDoc(projectRef, {
      taskCount: increment(-1),
    });
  } catch (error) {
    console.log("Erro ao excluir tarefa", error);
  }
}

export async function getAllTaskForProject(
  userId: string,
  projectId: string
): Promise<Task[]> {
  try {
    const taskCollectioRef = collection(db, `users/${userId}/tasks`);
    const q = query(taskCollectioRef, where("projectId", "==", projectId));
    const querySnapshot = await getDocs(q);

    const tasksList: Task[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      taskName: doc.data().taskName,
      status: doc.data().status,
      projectName: doc.data().projectName,
      projectId: doc.data().projectId,
      createdAt:
        doc.data().createdAt instanceof Timestamp
          ? doc.data().createdAt.toDate()
          : undefined,
      updatedAt:
        doc.data().updatedAt instanceof Timestamp
          ? doc.data().updatedAt.toDate()
          : undefined,
    }));

    return tasksList;
  } catch (error) {
    console.log("Erro ao buscar tarefas por projetos!", error);
    return [];
  }
}
