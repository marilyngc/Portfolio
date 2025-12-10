import { useThemeContext } from '@/context/ThemeContext';
import { useState, useEffect } from "react";

export const Trabajo = () => {
  const { contextTheme } = useThemeContext();
    // Almacenar el valor del contexto en una variable local
    const isDarkTheme = contextTheme === "dark";
   
    const [monthCount, setMonthCount] = useState(0);
  
    useEffect(() => {
   const startDate = new Date("2025-08-01"); // fecha de inicio
const today = new Date();

const monthsPassed =
  (today.getFullYear() - startDate.getFullYear()) * 12 +
  (today.getMonth() - startDate.getMonth()) ; 

setMonthCount(monthsPassed);
    }, []);
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
              Agosto. 2025 - Presente · {monthCount} meses
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
              IT Analyst Developer
              </h4>{" "}
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                {" "}
Más de 6 automatizaciones en funcionamiento, organizadas en un HUB central de soluciones inteligentes que opera bajo 2 modalidades: uso interno, servicios para clientes, integrando herramientas propias y externas en un solo portal con el objetivo de optimizar procesos, reducir tiempos improductivos.



</p>
<p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
Desarrollo e implementación de flujos automatizados con N8N, integrando Python, JavaScript y Google Cloud.

</p>
<p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
Colaboro estrechamente con el equipo responsable del mantenimiento del HUB, asegurando que cada flujo esté disponible, actualizado y optimizado junto con otras automatizaciones desarrolladas internamente.

</p>
{" "}
            </div>{" "}
          </li>
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
            <time className="text-sm font-normal leading-none text-cAccent capitalize">
              {" "}
              Diciembre. 2024 - Agosto 2025 · 8 meses
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
Excel y Google Sheets: Manejo avanzado para combinar y manipular datos con precisión.


           
           

<p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
Automatización de procesos en el área de influencers mediante el desarrollo de soluciones en Python con tecnologías OCR, utilizando las APIs de Google y Azure, logrando la mejora de tiempos operativos y la reducción de tareas manuales.              </p>{" "}

</p> </div>{" "}
          </li>
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
            <time className="text-sm font-normal leading-none text-cAccent capitalize">
              {" "}
              Diciembre. 2024 - Diciembre 2025 · 12 meses
            </time>{" "}
            <span className="text-sm mt-1 block font-normal leading-none text-cAccent capitalize">
              {" "}
              Santiago de Chile, Chile · Remoto{" "}
            </span>{" "}
            <a
              href="https://www.keroke.ro"
              target="_blank nofollow"
              aria-label="Gran Menú"
              className={`text-xl w-fit font-semibold hover:text-fuchsia-500 transition-all duration-150 ease-in  mt-2 capitalize group flex items-center gap-[6px]  ${
                    isDarkTheme? `text-white`: `text-slate-600`
                  }`}
            >
              {" "}
              KeroKero{""}
              <span className="size-13 inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-fuchsia-500">
                {" "}
                <svg
                  stroke="currentColor"
                  strokeWidth="1.5"
                  xmlns="https://www.keroke.ro"
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
                Trabajo freelancer,  Desarrollo de un sistema e-commerce completo, con autenticación e integración de la pasarela de pago Stripe. El backend fue desarrollado en Node.js, utilizando MongoDB como base de datos principal.{" "}
              </p>{" "}
            </div>{" "}
          </li>
        
        
        </ol>{" "}
      </article>{" "}
    </section>
  );
};
