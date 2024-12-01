import React from 'react';

import { useThemeContext } from "@/context/ThemeContext.jsx";
const AboutMe = () => {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "dark";
  return (
    <section
      className="max-w-6xl mb-6 pt-8 lg:pt-20 mx-auto"
      id="about-me"
    >
      <h1 className={`text-2xl font-semibold mb-3 ${isDarkTheme ? "text-cWhite " :" text-slate-600"}`}>
    Sobre mí
      </h1>
      <h2 className={`mb-4 ${isDarkTheme? "text-cWhite  ":" text-slate-700"}`}>
        Venezolana que actualmente vive en Argentina. Me encanta aprender cosas nuevas constantemente, por eso disfruto creando y probando mini proyectos que me permiten ampliar mis conocimientos.
      </h2>
      <article className="text-cAccent max-w-3xl">
        <p className="text-pretty">
        En mi tiempo libre, disfruto de los videojuegos, pero también dedico tiempo a seguir capacitándome en el mundo de las   {""}
          <strong className={`font-normal  ${isDarkTheme ? "text-white": "text-slate-700"}`}>
             criptomonedas y el trading,
          </strong>
            {" "}áreas que considero fundamentales para el futuro económico y tecnológico.
        </p>
        <p className="text-pretty mt-2">
        Si tienes un proyecto o idea en mente, ¡no dudes en contactarme! Estoy segura de que podemos crear algo increíble juntos. 😊
        </p>
      </article>
    </section>
  );
};

export default AboutMe;
