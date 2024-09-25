import { useState } from "react";
import { useThemeContext } from "../../../context/ThemeContext";
import DarkMode from "../../common/DarkMode/DarkMode";

export const Navbar = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "dark" ? "light" : "dark"));
    setChecked(nextChecked);
    // console.log(nextChecked)
  };

  return (
    <div className="mx-auto max-w-3xl sticky top-0 z-10">
      <header
        className={`h-full bottom-0 static flex  justify-end items-center py-10 px-5 z-20    `}
      >
        <div className="relative group/tooltip py-4 px-10 sm:py-5 flex items-center gap-4 outline-none">
        <DarkMode/>
        </div>
     
     
      </header>
    </div>
  );
};
