import React from "react";

import { useThemeContext } from "@/context/ThemeContext.jsx";
const AboutMe = () => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "dark";
  return (
    <section className="max-w-6xl mb-6 pt-8 lg:pt-20 mx-auto" id="about-me">
      <h1
        className={`text-2xl font-semibold mb-3 ${
          isDarkTheme ? "text-cWhite " : " text-slate-600"
        }`}
      >
        Sobre mí
      </h1>
      <h2
        className={`mb-4 ${isDarkTheme ? "text-cWhite  " : " text-slate-700"}`}
      >
        Venezolana que actualmente vive en Argentina. Me encanta aprender cosas
        nuevas constantemente, por eso disfruto creando y probando mini
        proyectos que me permiten ampliar mis conocimientos.
      </h2>
      <article className="text-cAccent ">
        <p className="text-pretty">
          Me enfoco en el{" "}
          <strong
            className={`font-normal ${
              isDarkTheme ? "text-white" : "text-slate-700"
            }`}
          >
            desarrollo backend
          </strong>
          , trabajando con tecnologías como{" "}
          <strong
            className={`font-normal ${
              isDarkTheme ? "text-white" : "text-slate-700"
            }`}
          >
            Node.js y MongoDB
          </strong>
          , y a su par diseño{" "}
          <strong
            className={`font-normal ${
              isDarkTheme ? "text-white" : "text-slate-700"
            }`}
          >
            automatizaciones y workflows con Python y N8N
          </strong>{" "}
          para optimizar procesos.
        </p>

        <p className="text-pretty mt-2">
          Si tienes un proyecto o idea en mente, ¡no dudes en contactarme! Estoy
          segura de que podemos crear algo increíble juntos. 😊
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
