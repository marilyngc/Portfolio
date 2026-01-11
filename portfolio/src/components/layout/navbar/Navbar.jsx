import { useState } from "react";
import { useThemeContext } from "@/context/ThemeContext";
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
    
    <nav className="  flex w-full max-w-6xl mx-auto items-center justify-between">
    
   
      <ul className="text-cWhite flex space-x-4 flex-shrink-0">
       
       
       <li className="w-6 h-6" >
         
         {" "}
         <a
           href="https://www.linkedin.com/in/marilyn-celis-developer573/"
           target="_blank"
           className={` hover:text-fuchsia-500 transition-colors duration-150 ease-in ${
            isDarkTheme ? "text-cWhite": "text-slate-600"
           }`}
           aria-label="Linkedin"
           
         >
           <svg
             strokeWidth="1.5"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
             
           >
             <path
               d="M21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8Z"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>
             <path
               d="M7 17V13.5V10"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>
             <path
               d="M11 17V13.75M11 10V13.75M11 13.75C11 10 17 10 17 13.75V17"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>
             <path
               d="M7 7.01L7.01 6.99889"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>
           </svg>
         </a>{" "}
       </li>{" "}
       <li className="w-6 h-6" >
         {" "}
         <a
           href="https://github.com/marilyngc"
           target="_blank"
           aria-label="Github"
           className={`text-cWhite hover:text-fuchsia-500 transition-colors duration-150 ease-in ${
            isDarkTheme ? "text-cWhite": "text-slate-600"
           }`}
         
         >
           <svg
             strokeWidth="1.5"
             viewBox="0 0 24 24"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
            
           >
             <path
               d="M16 22.0268V19.1568C16.0375 18.68 15.9731 18.2006 15.811 17.7506C15.6489 17.3006 15.3929 16.8902 15.06 16.5468C18.2 16.1968 21.5 15.0068 21.5 9.54679C21.4997 8.15062 20.9627 6.80799 20 5.79679C20.4558 4.5753 20.4236 3.22514 19.91 2.02679C19.91 2.02679 18.73 1.67679 16 3.50679C13.708 2.88561 11.292 2.88561 8.99999 3.50679C6.26999 1.67679 5.08999 2.02679 5.08999 2.02679C4.57636 3.22514 4.54413 4.5753 4.99999 5.79679C4.03011 6.81549 3.49251 8.17026 3.49999 9.57679C3.49999 14.9968 6.79998 16.1868 9.93998 16.5768C9.61098 16.9168 9.35725 17.3222 9.19529 17.7667C9.03334 18.2112 8.96679 18.6849 8.99999 19.1568V22.0268"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>
             <path
               d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
               stroke="currentColor"
               strokeWidth="1.5"
               strokeLinecap="round"
               strokeLinejoin="round"
             ></path>
           </svg>
         </a>{" "}
       </li>{" "}
     </ul>{" "}
      <ul className={`  flex space-x-4 uppercase ${
            isDarkTheme ? "text-cWhite": "text-slate-600"
           }`}>
        <li>
          <a
            className={`text-cWhite hover:text-fuchsia-500 transition-colors duration-150 ease-in  ${
            isDarkTheme ? "text-cWhite": "text-slate-600"
           }`}
            aria-label="Inicio"
            href="/#top"
          >
            {" "}
            Inicio{" "}
          </a>
        </li>
        <li>
          {" "}
          <a
            className={`text-cWhite hover:text-fuchsia-500 transition-colors duration-150 ease-in  ${
              isDarkTheme ? "text-cWhite": "text-slate-600"
             }`}
            aria-label="Portafolio"
            href="/#portfolio"
          >
            {" "}
            Portafolio{" "}
          </a>
        </li>
        <li>
          <a
            className={`text-cWhite hover:text-fuchsia-500 transition-colors duration-150 ease-in  ${
              isDarkTheme ? "text-cWhite": "text-slate-600"
             }`}
            aria-label="Sobre mí"
            href="/#automatizaciones"
          >
            {" "}
            Automatizaciones{" "}
          </a>
        </li>
    
      </ul>
      <div className="h-16 w-16  items-center justify-center flex  ">
 <DarkMode />
      </div>
    </nav>
  );
};
