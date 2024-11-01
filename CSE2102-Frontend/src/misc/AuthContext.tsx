// AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the types for context
interface AuthContextType {
    Staff_ID: string | null; // Store the Staff_ID
    First_Name: string | null; // Store the first name
    Last_Name: string | null; // Store the last name
    setAuthData: (
        Staff_ID: string,
        First_Name: string,
        Last_Name: string
    ) => void; // Function to set the auth data
}

// Create the AuthContext with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider component
export const AuthProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    // Initialize with values from local storage
    const [Staff_ID, setStaff_ID] = useState<string | null>(
        localStorage.getItem("staffId")
    );
    const [First_Name, setFirst_Name] = useState<string | null>(
        localStorage.getItem("firstName")
    );
    const [Last_Name, setLast_Name] = useState<string | null>(
        localStorage.getItem("lastName")
    );

    // Function to set auth data
    const setAuthData = (
        Staff_ID: string,
        First_Name: string,
        Last_Name: string
    ) => {
        setStaff_ID(Staff_ID);
        setFirst_Name(First_Name);
        setLast_Name(Last_Name);
        // Store in local storage
        localStorage.setItem("staffId", Staff_ID);
        localStorage.setItem("firstName", First_Name);
        localStorage.setItem("lastName", Last_Name);
    };

    return (
        <AuthContext.Provider
            value={{ Staff_ID, First_Name, Last_Name, setAuthData }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Hook to use context
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};