import { useState } from "react";
import { useThemeContext } from "../../../context/ThemeContext";

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
        className={`-full bottom-0 static flex justify-end items-center py-1 px-5 z-20    `}
      >
        <button
          onClick={handleSwitch}
          className="relative group/tooltip py-4 px-2 sm:py-5 flex items-center gap-4 outline-none"
        >
          <lord-icon
            src="https://cdn.lordicon.com/ucjpmssl.json"
            trigger="hover"
            style={{
              width: "40px",
              height: "40px",
              display: isDarkTheme ? "none" : "block",
            }}
          ></lord-icon>
          <lord-icon
            src="https://cdn.lordicon.com/ajwiqpin.json"
            trigger="hover"
            style={{
              width: "40px",
              height: "40px",
              display: isDarkTheme ? "block" : "none",
            }}
          ></lord-icon>
        </button>
      </header>
    </div>
  );
};
