import { createContext, useState } from "react";
import auth from "../assets/firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";



export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    const [User,setUser] = useState(null)
    console.log(User)
// Observer
    onAuthStateChanged(auth, (user) => {
        if (user) {
        setUser(user)
        }
      });
// creat User
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
// value jas to pass
    const AllValues ={
        creatUser ,
        User,
        setUser
    }
    return (
        <AuthContext.Provider value={AllValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;