import React, { useEffect } from "react";
import { SocialNetworks } from "../../../data/MOCK_DATA.jsx";
import { useThemeContext } from "../../../context/ThemeContext.jsx";

export const Social = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  useEffect(() => {
    document.querySelectorAll(".button").forEach((button) => {
      const bounding = button.getBoundingClientRect();

      button.addEventListener("mousemove", (e) => {
        let dy = (e.clientY - bounding.top - bounding.height / 2) / -1;
        let dx = (e.clientX - bounding.left - bounding.width / 2) / 10;

        dy = dy > 10 ? 10 : dy < -10 ? -10 : dy;
        dx = dx > 4 ? 4 : dx < -4 ? -4 : dx;

        button.style.setProperty("--rx", dy);
        button.style.setProperty("--ry", dx);
      });

      button.addEventListener("mouseleave", () => {
        button.style.setProperty("--rx", 0);
        button.style.setProperty("--ry", 0);
      });
    });
  }, []); // El segundo argumento es un array de dependencias vacío para que se ejecute solo una vez al montar el componente

  return (
    <section className="mb-6 pt-8 max-w-6xl mx-auto lg:pt-15 ">
      <div
        className={`font-semibold text-2xl   mb-6 flex items-center gap-3 ${
          isDarkTheme ? `dark:text-gray-100` : `text-gray-700`
        }`}
      >
        <h2>Social</h2>
      
      </div>
      <div className="flex flex-wrap gap-3 ">
        {SocialNetworks.map((social) => (
          <a key={social.title} href={social.link} target="_blank">
            <button
              className={`button font-semibold   ${
                social.title === "Linkedin"
                  ? isDarkTheme
                    ? " text-sky-600"
                    : " text-sky-700"
                  : isDarkTheme
                  ? "text-white/80"
                  : "text-black/100"
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
