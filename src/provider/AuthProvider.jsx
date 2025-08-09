import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/initialize.init";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleSingIn = () => {
        // setLoading(true)
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }

    const googleLogOut = () => {
        // setLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log("current user", currentUser);
                setUser(currentUser);
            }
            else {
                setUser(null)
                console.log("current user", currentUser);
            }
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }

    }, [])


    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //         console.log("current user", currentUser);
    //         setUser(currentUser);
    //     }
    //     else {
    //         setUser(null)
    //         console.log("current user", currentUser);
    //     }
    // })



    const authData = {
        googleSingIn,
        googleLogOut,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;