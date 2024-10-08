import { IoMdLink } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import React from "react";
import {  DataProyects } from "../../../data/MOCK_DATA.jsx";

import { useThemeContext } from "../../../context/ThemeContext.jsx";

export const ImageCard = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <div className="flex flex-col gap-10 mb-9">
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
              <img
                src={proyect.img}
                alt={"imagen " + index + 1}
                className="rounded-xl "
              />
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
                            className={`absolute  group-hover-tooltip pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap   before:content-[''] before:absolute  before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2  group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 ${
                              isDarkTheme
                                ? `before:dark:bg-white before:dark:gray-800 dark:bg-white dark:text-gray-700`
                                : `before:bg-gray-800 text-gray-200 bg-gray-800`
                            }`}
                          >
                            {event}
                          </span>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                ))}
              </div>
              <div className="flex justify-start gap-3 md:mt-2 ">
                {["Live", "Code"].map(
                  (type) =>
                    proyect[`link${type}`] && (
                      <>
                        <a
                          href={type == "Live" ? proyect.linkLive : proyect.linkCode}
                          target="_blank"
                          rel="noreferrer"
                          className={`   flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg      font-bold rounded-lg         gap-2 px-3 py-2 space-x-2 text-base     rounded-xl    ${
                            isDarkTheme
                              ? `dark:text-black bg-gray-200 `
                              : `dark:text-black hover:text-white shadow  bg-gray-200 transition-[gap]  hover:bg-gray-800   `
                          }`}
                        >
                          {type}{" "}
                          <div className={`i-fa-pro:link-simple text-2xl ${type == "Live" ? "group-hover/live:rotate-45" : "group-hover/live:rotate-0"} transition-transform`}>
                           {type == "Live" ? <IoMdLink /> : <FiGithub /> } 
                          </div>
                        </a>
                        <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform"></div>
                      </>
                    )
                )}

              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

    
    </div>
  );
};
