import { createContext, useState } from "react";
import { auth } from "../firebase/initialize.init";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const googleSingIn = () => {
        const GoogleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, GoogleProvider)
    }
    const [user, setUser] = useState(null)
    const authData = {
        googleSingIn,
        user, 
        setUser
    }

    return (
        <AuthContext.Provider value={authData} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;