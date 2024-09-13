import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const useGoogleLoggin = () => {
    const navigate = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const auth = getAuth()
    const provider = new GoogleAuthProvider();
    
    const logginWithGoogle = async () => {
        setLoading(true)
        try {
            const result = await signInWithPopup(auth, provider)
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            const user = result.user
            setLoading(false)
            console.log(user)
            navigate.push("/dashboard")
            return user
        }catch(error) {
          setLoading(false)
          throw error
        }
    }

    return {logginWithGoogle, loading}
}