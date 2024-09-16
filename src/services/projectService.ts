import { db } from "./firebase";
import { collection, getDocs, doc, getDoc, QuerySnapshot } from 'firebase/firestore';

interface Project {
    id: string,
    name: string,
    description: string,
    progress: string,
    status: string,
    createdAt: string,
    updatedAt: string,
}

export async function getAllProjectsById(userId: string): Promise<Project[]>  {

    try {
        const projectsCollection = collection(db, `users/${userId}/projects`);
        const querySnapshot = await getDocs(projectsCollection)

        const projects: Project[] = querySnapshot.docs.map(doc => {
            const data = doc.data()
            return {
                id: doc.id,
                name: data.name || '',
                description: data.description || '',
                progress: data.progress || '0%',
                status: data.status || 'unknown',
                createdAt: data.createdAt ? data.createdAt.toDate().toISOString() : new Date().toISOString(),
                updatedAt: data.updatedAt ? data.updatedAt.toDate().toISOString() : new Date().toISOString()

            }
        })

        return projects
    } catch(error) {
        console.log(error)
        throw new Error()
    }
}
