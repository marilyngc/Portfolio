import React, { useEffect, useState, useCallback } from "react";
import { useThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme((state) => (state === "dark" ? "light" : "dark"));
    setChecked(nextChecked);
    // console.log(nextChecked)
  };

  const toggleTheme = useCallback((event) => {
    const x = event.clientX;
    const y = event.clientY;

    const applyTheme = () => {
      const current = document.documentElement.classList.contains("dark");
      document.documentElement.classList.toggle("dark", !current);
      localStorage.setItem("theme", !current ? "light" : "dark");
    };

    if (!document.startViewTransition) {
      applyTheme();
      return;
    }

    const transition = document.startViewTransition(() => applyTheme());
        transition.ready.then(() => {
      const max = Math.hypot(window.innerWidth, window.innerHeight);

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${max}px at ${x}px ${y}px)`,
          ],
          filter: [
            "drop-shadow(0 0 40px rgba(0,0,0,0.7))",
            "drop-shadow(0 0 0 rgba(0,0,0,0))",
          ],
        },
        {
          duration: 800,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, []);

  return (
    <div
      className={`switch_mode  " ${isDarkTheme ? "switched" : ""}`}
      onClick={handleSwitch}
    >
      <div className="circle_mode" onClick={toggleTheme}></div>
    </div>
  );
};

export default DarkMode;
