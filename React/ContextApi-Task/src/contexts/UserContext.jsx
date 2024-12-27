import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
export const UserContextProvider = ({children}) => {
    const [user , setUser] = useState("Sachin");

    return (
        <UserContext.Provider value={{user , setUser}}>
            {children}
        </UserContext.Provider>
    );
}