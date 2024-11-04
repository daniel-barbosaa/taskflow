import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  User,
} from "firebase/auth";
import { useState } from "react";
import { db } from "../services/firebase";
import { getDoc, setDoc, serverTimestamp, doc } from "firebase/firestore";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useRouter()

  const logginWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = await result.user.getIdToken();
      const user = result.user;
      Cookies.set("token", token, { expires: 1 });
      navigate.push("/dashboard")

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
      // if(error.code === "auth/popup-closed-by-user")
      console.log("Operação cancelada");

      // throw error;
    }
  };
  return { logginWithGoogle, loading };
};
