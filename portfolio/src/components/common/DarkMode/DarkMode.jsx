import React, { useCallback } from "react";
import { useThemeContext } from "@/context/ThemeContext";

const DarkMode = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "dark";

  const switchTheme = useCallback(() => {
    setContextTheme((prev) => (prev === "dark" ? "light" : "dark"));

    const root = document.documentElement;
    const isDark = root.classList.contains("dark");

    root.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", !isDark ? "dark" : "light");
  }, [setContextTheme]);

  const toggleTheme = () => {
    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(() => {
      switchTheme();
    });
  };

  return (
    <div
      className={`switch_mode ${isDarkTheme ? "switched" : ""}`}
      onClick={toggleTheme}
    >
      <div className="circle_mode" />
    </div>
  );
};

export default DarkMode;
