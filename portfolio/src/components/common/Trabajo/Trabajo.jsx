import { useThemeContext } from '@/context/ThemeContext';

export const Trabajo = () => {
  const { contextTheme } = useThemeContext();
    // Almacenar el valor del contexto en una variable local
    const isDarkTheme = contextTheme === "dark";
  
  return (
    <section className="mb-0 pt-8 max-w-6xl mx-auto lg:pt-20 ">
      {" "}
      <header className="mb-3 flex items-center space-x-4">
        {" "}
        <h2 className={`text-2xl font-semibold   ${
                    isDarkTheme? `text-cWhite`: `text-slate-600`
                  }`}>Experiencia</h2>{" "}
      </header>{" "}
      <article className="section w-full lg:w-full max-w-3x3">
        {" "}
        <ol className="relative border-s border-neutral-500 md:border-cAccent ml-2 md:ml-3">
          {" "}
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
            <time className="text-sm font-normal leading-none text-cAccent capitalize">
              {" "}
              Diciembre. 2024 - Presente · 1 Mes{" "}
            </time>{" "}
            <span className="text-sm mt-1 block font-normal leading-none text-cAccent capitalize">
              {" "}
              Buenos Aires, Argentina · Hibrido{" "}
            </span>{" "}
            <a
              href="https://meetsuper.com"
              target="_blank nofollow"
              aria-label="Super"
              className={`text-xl w-fit font-semibold hover:text-fuchsia-500 transition-all duration-150 ease-in  mt-2 capitalize group flex items-center gap-[6px]  ${
                    isDarkTheme? `text-white`: `text-slate-600`
                  }`}
            >
              {" "}
              Super{""}
              <span className="size-13 inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-fuchsia-500">
                {" "}
                <svg
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="https://meetsuper.com"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>{}
              </span>{" "}
            </a>{" "}
            <div className="first-of-type:mt-0 mt-5">
              {" "}
              <h4 className="text-cAccent font-bold mt-2 capitalize">
              Data Analyst
              </h4>{" "}
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                {" "}
                Actualmente, me encargo de crear y actualizar reportes en un dashboard interactivo, proporcionando a los clientes información  y visualizaciones para la toma de decisiones.
              </p>{" "}
            </div>{" "}
          </li>
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
            <time className="text-sm font-normal leading-none text-cAccent capitalize">
              {" "}
              Diciembre. 2024 - Presente · 1 Mes{" "}
            </time>{" "}
            <span className="text-sm mt-1 block font-normal leading-none text-cAccent capitalize">
              {" "}
              Santiago de Chile, Chile · Remoto{" "}
            </span>{" "}
            <a
              href="https://labs.granmenu.me"
              target="_blank nofollow"
              aria-label="Gran Menú"
              className={`text-xl w-fit font-semibold hover:text-fuchsia-500 transition-all duration-150 ease-in  mt-2 capitalize group flex items-center gap-[6px]  ${
                    isDarkTheme? `text-white`: `text-slate-600`
                  }`}
            >
              {" "}
              Gran Menú{""}
              <span className="size-13 inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-fuchsia-500">
                {" "}
                <svg
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="https://labs.granmenu.me"
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>{}
              </span>{" "}
            </a>{" "}
            <div className="first-of-type:mt-0 mt-5">
              {" "}
              <h4 className="text-cAccent font-bold mt-2 capitalize">
                Desarrolladora Full-Stack
              </h4>{" "}
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                {" "}
                Trabajo freelancer, actualmente desarrollo el backend que gestiona compras, generación de NFTs, QR, autenticación basada en NFTs, además de configurar la base de datos en MongoDB. Documentar y explicar los endpoints al equipo frontend para facilitar la integración.{" "}
              </p>{" "}
            </div>{" "}
          </li>
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
            <time className="text-sm font-normal leading-none text-cAccent capitalize">
              {" "}
              Noviembre. 2024   -  2 Meses{" "}
            </time>{" "}
            <span className="text-sm mt-1 block font-normal leading-none text-cAccent capitalize">
              {" "}
              Buenos Aires, Argentina · Remoto{" "}
            </span>{" "}
            <a
              href="https://www.wearezeaze.com"
              target="_blank nofollow"
              aria-label="Zeaze"
              className={`text-xl w-fit font-semibold hover:text-fuchsia-500 transition-all duration-150 ease-in  mt-2 capitalize group flex items-center gap-[6px]  ${
                    isDarkTheme? `text-white`: `text-slate-600`
                  }`}
            >
              {" "}
              Zeaze{""}
              <span className="size-13 inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-fuchsia-500">
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
                </svg>{}
              </span>{" "}
            </a>{" "}
            <div className="first-of-type:mt-0 mt-5">
              {" "}
              <h4 className="text-cAccent font-bold mt-2 capitalize">
                Desarrolladora Frontend
              </h4>{" "}
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                {" "}
                Trabajo como freelancer, creando interfaces de usuario y funcionales con HTML, CSS, JavaScript y React. Colaboro con el equipo de diseño. Mi objetivo es desarrollar aplicaciones web responsivas y centradas en el usuario.{" "}
              </p>{" "}
            </div>{" "}
          </li>
        
        </ol>{" "}
      </article>{" "}
    </section>
  );
};
