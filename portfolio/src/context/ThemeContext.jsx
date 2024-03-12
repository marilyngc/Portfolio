import { createContext, useContext, useState } from "react";

export const  ThemeContext = createContext();

// creamos proveedor para proveedor a los componentes hijos
export const ThemeContextProvider = ({children}) => {
    const [contextTheme, setContextTheme] = useState("dark"); // valor principal
    // pasamos a valor objeto
    const values = {contextTheme,setContextTheme}
    return (
        <ThemeContext.Provider value={values}>

        {/* ponemos que todos los hijos van a recibir ese valor */}
            {children}

        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    return context;
}