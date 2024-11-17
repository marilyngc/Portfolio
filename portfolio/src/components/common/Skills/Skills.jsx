import { SkillsInfo } from "../../../data/MOCK_DATA";
import { useThemeContext } from "../../../context/ThemeContext";


export const Skills = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <section id="tecnologias" className="mb-6 pt-8 max-w-6xl mx-auto lg:pt-15 ">
      {" "}
      <header className="mb-3 flex items-center space-x-4">
        {" "}
        <h2 className={`text-2xl font-semibold text-cWhite ${
                    isDarkTheme ? `dark:text-gray-200` : `text-gray-700`
                  }`}>Tecnologías</h2>{" "}
      </header>{" "}
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6">
        {" "}
        {SkillsInfo.map((item, index) => (
          <div key={index} className="lg:h-32  flex max-w-xs flex-col items-center space-y-2 rounded-lg border border-neutral-800 lg:py-5 lg:px-11 p-16 ">
            {" "}
            <div className="size-14">
              {" "}
             {item.url}
            </div>{" "}
            <h2 className={`text-cWhite ${
                    isDarkTheme ? `dark:text-gray-200` : `text-gray-700`
                  }`}>{item.name}</h2>{" "}
          </div>
        ))}
      </div>{" "}
    </section>
  );
};
