import avatar from "../../../assets/avatar/avatar.png";



import { GiBullseye } from "react-icons/gi";
import { MdCloudDownload } from "react-icons/md";
import { useThemeContext } from "../../../context/ThemeContext";
import { CopyData } from "../../../hooks/CopyData";
export const Portada = () => {
    const { contextTheme } = useThemeContext();
    // Almacenar el valor del contexto en una variable local
    const isDarkTheme = contextTheme === "dark";
  
    const team = [
      {
        avatar: avatar,
        name: " Hola, Soy Marilyn",
        title: "Desarrolladora Web",
        desc: "Soy una desarrolladora web localizado en Argentina. Actualmente me encuentro formándome como Backend Developer.. ",
        linkedin: "https://www.linkedin.com/in/marilyn-celis-developer573/",
        github: "https://github.com/marilyngc",
        email: "marilyncelisgutierrez@gmail.com",
      },
    ];
  
    return (
     
   <section className="max-w-4xl pt-20 pb-10 lg:pb-10 lg:py-44 mx-auto" data-astro-cid-bbe6dxrz="">
     {team.map((item, idx) => (
             <article key={idx} className="text-cWhite  text-center px-2 space-y-2 sm:space-y-3 md:space-y-4 lg:space-y-5" data-astro-cid-bbe6dxrz="">
             <header className="space-y-2" data-astro-cid-bbe6dxrz=""> 
            
                <picture data-astro-cid-bbe6dxrz=""> 
                <div
                className={`relative w-30 h-20 border-8 shadow-lg rounded-full overflow-hidden bg-neutral-900 mx-auto ${
                  isDarkTheme ? ` dark:border-neutral-800  ` : `border-white  `
                } `}
              >
                <img
                  src={item.avatar}
                  className="w-full h-full object-cover object-center shadow-md"
                  alt="Foto de perfil"
                />
              </div>
                 </picture> <strong className="text-[clamp(14px,6vw,18px)] font-normal text-base block w-fit mx-auto rounded-md bg-cPaper" data-astro-cid-bbe6dxrz="">@mxtel</strong>
                  </header> 
                  <h1 className={`text-[clamp(1.875rem,2vw+1rem,5rem)] font-bold leading-none ${
                    isDarkTheme? `dark:text-slate-100`: `text-slate-600`
                  }`} > {item.name}</h1> 
                  <strong className={`font-normal block text-[clamp(1.235rem,2vw+1rem,1.375rem)] text-cWhite ${
                    isDarkTheme? `dark:text-slate-100`: `text-slate-600`
                  }`}> {item.title}</strong>
                   <h2 className={`text-[clamp(2.125rem,2vw+1rem,3rem)] font-medium leading-none text-pretty ${
                    isDarkTheme? `dark:text-slate-100`: `text-slate-600`
                  }`}> Apasionada por crear productos digitales 
                  
                    </h2>
                     
                     <div className="mt-1 mx-auto  pt-4 gap-4 text-gray-400 flex  flex-col  items-center  sm:flex-row sm:justify-center sm:items-center  ">
                <div className="flex  justify-center gap-4">
                <div className="relative group/tooltip">
                <div
                    className={`p-2.5 rounded-xl grid place-items-center  ${
                      isDarkTheme ? `dark:bg-emerald-500 ` : `bg-emerald-300`
                    }`}
                  >
                    <GiBullseye
                      className={` ${
                        isDarkTheme ? `dark:text-white` : `text-emerald-700 `
                      }`}
                    />
                  </div>
                  <span
                    className={`absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap before:content-[''] before:absolute  before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3 ${
                      isDarkTheme
                        ? ` dark:bg-white dark:text-gray-700 before:dark:bg-white before:dark:gray-800`
                        : `before:bg-gray-800  text-gray-200 bg-gray-800`
                    }`}
                  >
                    Disponible
                  </span>
                </div>
            
                
                  <a href="/MarilynCelis-programadora.pdf" download>
                  <button
                    className={`flex items-center text-sm gap-3   py-2 px-4 rounded-lg font-semibold  ${
                      isDarkTheme
                        ? `dark:text-indigo-100 dark:bg-indigo-500 hover:dark:bg-opacity-80 `
                        : `text-indigo-500 bg-indigo-100 hover:bg-opacity-80 `
                    }`}
                  >
                    <MdCloudDownload className="i-fa-pro:file-user text-xl sm:text-lg z-auto" />
                    Resumen
                  </button>
                </a>
                </div>
             

                <CopyData data={item.email} isDarkTheme={isDarkTheme} />
              </div>
                      </article>
        ))}
    
                   </section>
  
    
    );
  };
  