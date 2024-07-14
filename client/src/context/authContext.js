import { createContext, useState, useEffect } from "react";
import axios from 'axios';

// Create the AuthContext
export const AuthContext = createContext();

// Create the AuthProvider component
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user") || "null"));

    // Function to handle login
    const login = async (inputs) => {
        try {
            const res = await axios.post("/auth/login", inputs);
            setCurrentUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data));
        } catch (err) {
            console.error("Login error:", err);
        }
    }

};
 // Function to handle logout
 const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
};

useEffect (() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
}, [currentUser]);
