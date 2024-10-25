import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  User,
  getIdToken,
  Auth
} from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { db } from "../services/firebase";
import { getDoc, setDoc, serverTimestamp, doc } from "firebase/firestore";
import Cookies from 'js-cookie';
import { getInstallations, getToken } from "firebase/installations";

const createUserIfNotExists = async (user: User) => {
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      uid: user.uid,
      name: user.displayName,
      email: user.email,
      createdAt: serverTimestamp(),
      lastLogin: serverTimestamp(),
    });
  } else {
    await setDoc(
      userRef,
      {
        lastLogin: serverTimestamp(),
      },
      { merge: true }
    );
  }
};

export const useGoogleLoggin = () => {
  const navigate = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const logginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = await result.user.getIdToken()
      const user = result.user;
      Cookies.set('token', token, {expires: 1})
      
      if (!user) {
        console.log("Houve algum erro");
        return;
      } else {
        await createUserIfNotExists(user);
        setLoading(false);
      }
      return user;
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };
  return { logginWithGoogle, loading };
};

