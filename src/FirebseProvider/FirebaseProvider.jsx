import { createContext } from "react";


export const AuthContext = createContext(null)

const FirebaseProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;