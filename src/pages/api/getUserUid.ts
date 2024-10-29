import { NextApiRequest, NextApiResponse } from 'next';
import admin from '@/src/services/firebaseAdmin';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const token = req.cookies.token; 

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        res.status(200).json({ uid: decodedToken.uid });
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        res.status(401).json({ error: 'Token inválido' });
    }
}
