import { useThemeContext } from "@/context/ThemeContext";
import { useState, useEffect } from "react";

export const Trabajo = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";

 const getMonthsPassed = (startDate) => {
  const start = new Date(startDate);
  const today = new Date();

  return (
    (today.getFullYear() - start.getFullYear()) * 12 +
    (today.getMonth() - start.getMonth())
  );
};

  return (
    <section className="mb-0 pt-8 max-w-6xl mx-auto lg:pt-20 ">
      {" "}
      <header className="mb-3 flex items-center space-x-4">
        {" "}
        <h2
          className={`text-2xl font-semibold   ${
            isDarkTheme ? `text-cWhite` : `text-slate-600`
          }`}
        >
          Experiencia
        </h2>{" "}
      </header>{" "}
      <article className="section w-full lg:w-full max-w-3x3">
        {" "}
        <ol className="relative border-s border-neutral-500 md:border-cAccent ml-2 md:ml-3">
          {" "}
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
          <time className="text-sm font-normal leading-none text-cAccent capitalize">
  Diciembre 2024 – Presente · {getMonthsPassed("2024-12-01")} meses
</time>

            <span className="text-sm mt-1 block font-normal leading-none text-cAccent capitalize">
              {" "}
              Buenos Aires, Argentina · Hibrido{" "}
            </span>{" "}
            <a
              href="https://meetsuper.com"
              target="_blank nofollow"
              aria-label="Super"
              className={`text-xl w-fit font-semibold hover:text-fuchsia-500 transition-all duration-150 ease-in  mt-2 capitalize group flex items-center gap-[6px]  ${
                isDarkTheme ? `text-white` : `text-slate-600`
              }`}
            >
              {" "}
              Super{""}
              <span className="  inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-fuchsia-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
                {}
              </span>{" "}
            </a>{" "}
            <div className="first-of-type:mt-0 mt-5">
              {" "}
              <h4 className="text-cAccent font-bold mt-2 capitalize">
                IT Analyst Developer
              </h4>{" "}
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                {" "}
                Más de 6 automatizaciones en funcionamiento, organizadas en un
                HUB central de soluciones inteligentes que opera bajo 2
                modalidades: uso interno, servicios para clientes, integrando
                herramientas propias y externas en un solo portal con el
                objetivo de optimizar procesos, reducir tiempos improductivos.
              </p>
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                Desarrollo e implementación de flujos automatizados con N8N,
                integrando Python, JavaScript y Google Cloud.
              </p>
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                Colaboro estrechamente con el equipo responsable del
                mantenimiento del HUB, asegurando que cada flujo esté
                disponible, actualizado y optimizado junto con otras
                automatizaciones desarrolladas internamente.
              </p>{" "}
            </div>{" "}
          </li>
        
          <li className="mb-10 ms-4">
            {" "}
            <span className="absolute block w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-fuchsia-700  bg-fuchsia-700 "></span>{" "}
            <time className="text-sm font-normal leading-none text-cAccent capitalize">
              {" "}
              Diciembre. 2024 - Presente · {getMonthsPassed("2024-12-01")} Meses
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
                isDarkTheme ? `text-white` : `text-slate-600`
              }`}
            >
              {" "}
              KeroKero{""}
            <span className="  inline-block text-cAccent transition-all duration-150 ease-in group-hover:-translate-y-[1px] group-hover:translate-x-[1px] group-hover:text-fuchsia-500">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
                {}
              </span> 
            </a>{" "}
            <div className="first-of-type:mt-0 mt-5">
              {" "}
              <h4 className="text-cAccent font-bold mt-2 capitalize">
                Generic Leader Of An Startup
              </h4>{" "}
              <p className="my-3 text-base font-normal text-cAccent text-pretty lg:w-2/3  ">
                {" "}
                Trabajo freelancer, Desarrollo de un sistema e-commerce
                completo, con autenticación e integración de la pasarela de pago
                Stripe. El backend fue desarrollado en Node.js, utilizando
                MongoDB como base de datos principal.{" "}
              </p>{" "}
            </div>{" "}
          </li>
        </ol>{" "}
      </article>{" "}
    </section>
  );
};
