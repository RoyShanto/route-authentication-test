import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/initialize.init";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

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

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const UserUpdateProfile = (user, name) => {
        return updateProfile(user, { displayName: name })
    }
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const authData = {
        googleSingIn,
        googleLogOut,
        user,
        loading,
        createUser,
        UserUpdateProfile,
        signInUser
    }

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;