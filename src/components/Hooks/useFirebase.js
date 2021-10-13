import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";



initializeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signInGoogle = () =>{
        signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error=>{
            setError(error.message);
        })
    }
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                console.log('inside state change',user);
                setUser(user);
            }
        })
    },[]);

    const handleLogOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({});
        })
    }
    return {
        user, 
        error,
        signInGoogle,
        handleLogOut
    }
}

export default useFirebase;