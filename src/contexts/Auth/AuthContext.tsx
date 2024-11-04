import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import {getAuth, User, onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';



interface AuthContextType  {
 user: User | null,
 setUser: (type: User) => void
 signOutUser: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const auth = getAuth();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    if(user){
      router.push('/dashboard')
    }
    return () => unsubscribe();
  }, [user]);

  const signOutUser  = async () =>  {
    await signOut(auth)
    setUser(null)
    Cookies.remove('token')
    router.push('/')
  }
  return (
    <AuthContext.Provider
      value={{ user, setUser, signOutUser}}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext deve ser usado dentro de AuthProvider");
  }
  return context;
};
