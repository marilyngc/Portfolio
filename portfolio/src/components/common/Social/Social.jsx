import { SocialNetworks } from "@/data/MOCK_DATA.jsx";
import { useThemeContext } from "@/context/ThemeContext.jsx";

export const Social = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";

  return (
    <section className="mb-6 pt-8 max-w-6xl  ms-0
  md:ms-20
  lg:ms-0
  xl:ms-64
  2xl:ms-80  lg:ps-10 lg:pt-15 ">
      <div
        className={`font-semibold text-2xl   mb-6 flex items-center gap-3 ${
          isDarkTheme ? `dark:text-gray-100` : `text-gray-700`
        }`}
      >
        <h2>Social</h2>
      
      </div>
      <div className="flex flex-wrap gap-5 ">
        {SocialNetworks.map((social) => (
          <a key={social.title} href={social.link} target="_blank">
            <button
              className={`  flex gap-0  hover:gap-2 max-w-fit  rounded-xl border px-3 py-2 transition-all duration-500 font-semibold   ${
                social.title === "Linkedin"
                  ? isDarkTheme
                    ? " text-sky-600    border-sky-600 bg-neutral-900  hover:border-sky-400  hover:text-sky-400 " 
                    : " text-sky-700  border-sky-600 "
                  : isDarkTheme 
                  ? "text-white/80 border-gray-600 bg-neutral-900  hover:border-gray-100  hover:text-white/90"
                  : "text-black/100 border-black/100"
              }`}
            >
              <div className="icon">{social.icon}</div>
              <span>{social.title}</span>
            </button>
            
          </a>

          
        ))}
      </div>
    </section>
  );
};
