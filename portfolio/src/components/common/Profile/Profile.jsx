import avatar from "../../../assets/avatar/avatar.png";
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { GiBullseye } from "react-icons/gi";
import { useThemeContext } from "../../../context/ThemeContext";
import { CopyData } from "../../../hooks/CopyData";

export const Profile = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";

  const team = [
    {
      avatar: avatar,
      name: "Marilyn Celis ",
      title: "Full - Stack Developer MERN ",
      desc: "Soy una desarrolladora web localizado en Argentina. Actualmente me encuentro formándome como Backend Developer.. ",
      linkedin: "https://www.linkedin.com/in/marilyn-celis-developer573/",
      github: "https://github.com/marilyngc",
      email: "marilyncelisgutierrez@gmail.com",
    },
  ];

  return (
    <section className="flex flex-col gap-16 mt-1">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        {team.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col sm:flex-row items-center   gap-11"
          >
            <div className="w-full flex justify-center md:justify-start md:w-1/3  ">
              <div
                className={`relative w-44 h-44 border-8 shadow-lg rounded-full overflow-hidden bg-indigo-100 ${
                  isDarkTheme ? ` dark:border-gray-900/80  ` : `border-white  `
                } `}
              >
                <img
                  src={item.avatar}
                  className="w-full h-full object-cover object-center shadow-md"
                  alt="Foto de perfil"
                />
              </div>
            </div>
            <div className="flex flex-col items-center sm:items-start gap-2 ">
              <h4
                className={`text-2xl sm:text-4xl text-center sm:text-left font-bold  ${
                  isDarkTheme ? `dark:text-slate-100 ` : `text-slate-600`
                }`}
              >
                {item.name}
              </h4>
              <p
                className={` text-sm sm:text-lg  max-w-xl rounded-2xl ${
                  isDarkTheme ? `dark:text-slate-300` : `text-slate-700`
                }`}
              >
                {item.title}
              </p>

              <div className="mt-2 gap-4 text-gray-400 flex flex-col sm:flex-row sm:justify-start sm:items-start    ">
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
                    <BsFileEarmarkPersonFill className="i-fa-pro:file-user text-xl sm:text-lg z-auto" />
                    Resumen
                  </button>
                </a>
                </div>
             

                <CopyData data={item.email} isDarkTheme={isDarkTheme} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
