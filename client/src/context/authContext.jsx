import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? JSON.parse(storedUser) : null;
    });

    // Function to handle login
    const login = async (inputs) => {
        try {
            const res = await axios.post("/auth/login", inputs);
            setCurrentUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
        } catch (err) {
            console.error("Login error:", err);
            throw err; // Optionally re-throw the error for components to handle
        }
    };

    // Function to handle logout
    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("user");
    };

    // Save the user to localStorage whenever currentUser changes
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    // Provide the currentUser, login, and logout functions to the context
    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
