import { IoMdLink } from "react-icons/io";
import React from "react";
import { DataProyectNotImage, DataProyects } from "../../../data/MOCK_DATA.jsx";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

import { useThemeContext } from "../../../context/ThemeContext.jsx";

export const ImageCard = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <div className="flex flex-col gap-10">
      <div className=" grid gap-4  sm:gap-7 md:grid-cols-2 group">
        {DataProyects.map((proyect, index) => (
          <React.Fragment key={index}>
            <div
              className={`cardProyect mb-3 relative rounded-xl  overflow-hidden flex   ${
                isDarkTheme ? `dark:bg-gray-700/50 ` : ` bg-gray-500/50`
              }`}
            >
              <span>
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
                />
              </span>
              <img src={proyect.img} alt={"imagen " + index + 1} className="rounded-xl " />
            </div>

            <div className="flex flex-col  gap-2.5 justify-center mb-5 ms:mb-0">
              <h3
                className={`font-bold text-3xl  ${
                  isDarkTheme ? `dark:text-white` : `text-slate-800`
                }`}
              >
                {proyect.title}
              </h3>
              <p
                className={` text-lg ${
                  isDarkTheme ? `dark:text-slate-300` : `text-slate-600 `
                }`}
              >
                {proyect.description}
              </p>
              <div className="flex gap-2 items-center mb-1">
                {proyect.tools.map((tool, index) => (
                  <div key={index} className="relative group/tooltip">
                    <img
                      src={tool.src}
                      alt={`Tool ${index + 1}`}
                      className="w-7 h-6"
                    />
                    {proyect.event.map((event, eventIndex) => {

                      if (event.toUpperCase() === tool.id.toUpperCase()) {
                        return (
                          <span
                            key={eventIndex}
                            className={`absolute absolute-tooltip group-hover-tooltip pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap   before:content-[''] before:absolute  before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2  group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 ${
                              isDarkTheme
                                ? `before:dark:bg-white before:dark:gray-800 dark:bg-white dark:text-gray-700`
                                : `before:bg-gray-800 text-gray-200 bg-gray-800`
                            }`}
                          >
                            {event}
                          </span>
                        );
                      }
                      else{
                        return null;
                      };
                      
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-start gap-3">
                <a
                  href={proyect.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5     font-bold rounded-lg ${
                    isDarkTheme
                      ? `dark:text-slate-900 dark:bg-white`
                      : `text-white bg-slate-900`
                  }`}
                >
                  Live{" "}
                  <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform">
                    <IoMdLink />
                  </div>
                </a>
                <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform"></div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">
        {DataProyectNotImage.map((proyect, index) => (
          <React.Fragment key={index}>
            <a
              href={proyect.link}
              target="_blank"
              rel="noreferrer"
              className={`block group border-2   rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1 ${
                isDarkTheme
                  ? `dark:border-gray-700 dark:hover:border-gray-300/30`
                  : ` border-gray-400 hover:border-gray-500`
              }`}
            >
              <article className="relative flex flex-col justify-between w-full py-6 px-7">
                <h2
                  className={`  text-lg font-bold ${
                    isDarkTheme ? `dark:text-gray-200` : `text-gray-700`
                  }`}
                >
                  {proyect.title}
                </h2>
                <p
                  className={`  ${
                    isDarkTheme ? `dark:text-slate-200` : `text-slate-400`
                  }`}
                >
                  {proyect.description}
                </p>
                <div className="flex gap-1 mt-1.5 items-center">
                  
                  {proyect.tools.map((tool,index) =>
                  <div key={index} className="relative group/tooltip">
                    <img
                      src={tool.src}
                      alt={`Tool ${index + 1}`}
                      className="w-7 h-6"
                    />

                 
                    {proyect.event.map((evento,index) =>{
                        const toolName = tool.id.toLowerCase();
                        const eventName = evento.toLowerCase()
                        
                        if(eventName == toolName) {
                          console.log("herramienta:",toolName,eventName)
                          // console.log("evento:",eventName)
                            return(

                              <span key={index} className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
                                  {evento}
                                  
                               </span>
                               
                        )
                        
                       }
                       else{
                        return null;
                       };
                      }
                    
                    )}
    
                  </div>
                )}

                </div>

                <div className="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
                  <HiOutlineArrowUpRight className=" text-gray-400 dark:text-gray-50 text-2xl" />
                </div>
              </article>
            </a>
          </React.Fragment>
        ))}

      </div>
    </div>
  );
};
