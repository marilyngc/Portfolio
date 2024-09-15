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
    <section className="w-full">
      <div
        className={`font-bold text-2xl   mb-6 flex items-center gap-3 ${
          isDarkTheme ? `dark:text-gray-100` : `text-indigo-400`
        }`}
      >
        <h2>Social</h2>
        <script src="https://cdn.lordicon.com/lordicon.js"></script>

        <script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/jdsvypqr.json"
          trigger="in"
          delay="1500"
          stroke="bold"
          state="in-reveal"
          colors={
            isDarkTheme
              ? "primary:#ffffff,secondary:#c69cf4"
              : "primary:#a5b4fc,secondary:#c69cf4"
          }
        ></lord-icon>
      </div>
      <div className="flex flex-wrap gap-3 ">
        {SocialNetworks.map((social) => (
          <a key={social.title} href={social.link} target="_blank">
            <button
              className={`button    ${
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
