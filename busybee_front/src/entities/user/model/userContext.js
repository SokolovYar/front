import { createContext, useState, useCallback } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const loginUser = useCallback((userData) => {
        setUser(userData);
    }, []);

    const logoutUser = useCallback(() => {
        setUser(null);
    }, []);

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};