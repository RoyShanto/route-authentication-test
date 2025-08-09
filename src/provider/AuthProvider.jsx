import { createContext, useState } from "react";
import { auth } from "../firebase/initialize.init";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const googleSingIn = () => {
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }

    const googleLogOut = () => {
        return signOut(auth)
    }

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        }
        else {
            setUser(null)
        }
    });



    const authData = {
        googleSingIn,
        googleLogOut,
        user
    }

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;