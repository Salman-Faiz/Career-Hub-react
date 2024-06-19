import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import auth from "../../Firebase/firebase.config";


// create context and export it
export const AuthContext = createContext(null);
const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = {user, createUser}




    return (
        <AuthContext.Provider value={authInfo}>

            { Children }

        </AuthContext.Provider>
    );
};

export default AuthProvider;