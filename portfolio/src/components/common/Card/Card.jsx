import { DataProyectNotImage } from "../../../data/MOCK_DATA";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import React from "react";
import { useThemeContext } from "../../../context/ThemeContext.jsx";
export const Card = () => {
    const { contextTheme } = useThemeContext();
    // Almacenar el valor del contexto en una variable local
    const isDarkTheme = contextTheme === "dark";
    return(
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
                  {proyect.tools.map((tool, index) => (
                    <div key={index} className="relative group/tooltip">
                      <img
                        src={tool.src}
                        alt={`Tool ${index + 1}`}
                        className="w-7 h-6"
                      />

                      {proyect.event.map((evento, index) => {
                        const toolName = tool.id.toLowerCase();
                        const eventName = evento.toLowerCase();

                        if (eventName == toolName) {
                          console.log("herramienta:", toolName, eventName);
                          // console.log("evento:",eventName)
                          return (
                            <span
                              key={index}
                              className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3"
                            >
                              {evento}
                            </span>
                          );
                        } else {
                          return null;
                        }
                      })}
                    </div>
                  ))}
                </div>

                <div className="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">
                  <HiOutlineArrowUpRight className=" text-gray-400 dark:text-gray-50 text-2xl" />
                </div>
              </article>
            </a>
          </React.Fragment>
        ))}
      </div>
    )
}