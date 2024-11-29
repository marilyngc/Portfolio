import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

// creamos proveedor para los componentes hijos
export const ThemeContextProvider = ({ children }) => {
  // Leemos el tema desde localStorage o usamos el valor por defecto "dark"
  const storedTheme = localStorage.getItem("theme");
  const [contextTheme, setContextTheme] = useState(storedTheme || "dark");

  // Guardamos el tema en localStorage cada vez que cambie
  useEffect(() => {
    localStorage.setItem("theme", contextTheme);
  }, [contextTheme]);

  // pasamos el valor en un objeto
  const values = { contextTheme, setContextTheme };

  return (
    <ThemeContext.Provider value={values}>
      {/* los hijos recibirán este valor */}
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  return context;
};
