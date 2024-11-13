import React, { useEffect, useState } from 'react';
import { useThemeContext } from "../../../context/ThemeContext";
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
  
  return (
    <div className={`switch_mode  " ${isDarkTheme ? 'switched' : ''}`} onClick={handleSwitch}>
    <div className="circle_mode">
    
    </div>
  </div>
  );
};

export default DarkMode;
