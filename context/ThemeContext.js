"use client"

import {createContext, useState} from "react"

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [mode, setMode] = useState("dark");

    const toggleMode = () => {
        setMode((prevState => (prevState === "dark" ? "light" : "dark")))
    };

    return (
        <ThemeContext.Provider value={{toggleMode, mode}}>
            <div className={`theme ${mode}`}>
                {children}
            </div>
        </ThemeContext.Provider>
        )
}