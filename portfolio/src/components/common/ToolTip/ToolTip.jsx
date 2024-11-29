import { IoMdLink } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import React from "react";


export const ToolTip =  ({content, isDarkTheme}) => {

    const { title, description,tools, event } = content;
    return(
        <div   className="lg:w-2/3  flex flex-col  gap-2.5 justify-start  col-span-8 lg:mb-5 mb-12 ms:mb-0">
        <h3
          className={`font-bold text-3xl  ${
            isDarkTheme ? `dark:text-white` : `text-slate-800`
          }`}
        >
          {title}
        </h3>
        <p
          className={`  font-normal text-cAccent text-pretty ${
            isDarkTheme ? `text-base ` : `text-base  `
          }`}
        >
          {description}
        </p>
        <div className="flex gap-2 items-center mb-1">
          {tools.map((tool, index) => (
            <div key={index} className="relative group/tooltip">
              <img
                src={tool.src}
                alt={`Tool ${index + 1}`}
                className="w-7 h-6"
              />
              {event.map((event, eventIndex) => {
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
        <div  className="flex justify-start gap-3 md:mt-2 ">
          {["Live", "Code"].map(
            (type, index) =>
              content[`link${type}`] && (
                <React.Fragment  key={index}> 
                  <a
                 
                    target="_blank"
                    href={
                      type == "Live" ? content.linkLive : content.linkCode
                    }
                    role="link"
                    className={` text-base flex gap-3 group/live hover:gap-5  group inline-flex max-w-fit items-center justify-center gap-2 space-x-2 rounded-xl border     px-3 py-2 text-gray-800 transition-all duration-500    hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black   ${
                      isDarkTheme
                        ? ` dark:border-gray-600 dark:bg-neutral-900  dark:text-white dark:hover:border-gray-100 dark:hover:bg-gray-200  dark:hover:text-gray-800`
                        : `dark:text-black border-gray-900 hover:text-white shadow  bg-gray-100  transition-[gap]  hover:bg-gray-700   `
                    }`}
                  >
                    
                     <div
                      className={`i-fa-pro:link-simple text-2xl ${
                        type == "Live"
                          ? "group-hover/live:rotate-45"
                          : "group-hover/live:rotate-0"
                      } transition-transform`}
                    >
                      {type == "Live" ? <IoMdLink /> : <FiGithub />}
                    </div>
                   {type}
                  
                  </a>
                
                  <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform"></div>
                  </React.Fragment>
              )
          )}
        </div>
      </div>
    )
}