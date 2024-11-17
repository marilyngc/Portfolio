import { useThemeContext } from "../../../context/ThemeContext";
import { FormacionData } from "../../../data/MOCK_DATA";
export const Formacion = () => {

  const { contextTheme } = useThemeContext();
    // Almacenar el valor del contexto en una variable local
    const isDarkTheme = contextTheme === "dark";
  
    return (
      <section className="mb-6 pt-8 max-w-6xl mx-auto lg:pt-15 ">
        {" "}
        <header className="mb-3 flex items-center space-x-4">
          {" "}
          <h2 className={`text-2xl font-semibold text-cWhite ${
                    isDarkTheme? `text-cWhite`: `text-slate-600`
                  }`}>Formación</h2>{" "}
        </header>{" "}
        <article className="section w-full lg:w-full max-w-3x3">
          {" "}
          <ol className="relative border-s border-neutral-500 md:border-cAccent ml-2 md:ml-3">
            {" "}
            {FormacionData.map((item,index) => (
                <li className="mb-10 ms-4">
                {" "}
                <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
                <time className="text-sm font-normal leading-none text-cAccent capitalize">
                  {" "}
                  {item.fecha} {" "}
                </time>{" "}
                <span className="text-sm mt-1 block font-normal leading-none text-cAccent capitalize">
                  {" "}
                  {item.localidad}{" "}
                </span>{" "}
                <a
                  href="https://www.utn.edu.ar/es/"
                  target="_blank nofollow"
                  aria-label="SoundAdvice"
                  className={`text-xl w-fit font-semibold hover:text-fuchsia-500 transition-all duration-150 ease-in  mt-2 capitalize group flex items-center gap-[6px]  ${
                      isDarkTheme? `text-cWhite`: `text-slate-600`
                    }`}
                >
                  {" "}
                  {item.institucion}{" "}
                  <span className="size-3 inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-cBlue">
                    {" "}
                    <svg
                      stroke="currentColor"
                      strokeWidth="1.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>{" "}
                  </span>{" "}
                </a>{" "}
                <div className="first-of-type:mt-0 mt-5">
                  {" "}
                  <h4 className="text-cAccent font-bold mt-2 capitalize">
                  {item.titulo}
                  </h4>{" "}
                  <p className="my-3 text-base font-normal text-cAccent text-pretty" 
   dangerouslySetInnerHTML={{ __html: item.descripcion }} />
    
                          </div>{" "}
              </li>
            ))}
          
          
          </ol>{" "}
        </article>{" "}
      </section>
    );
  };
  