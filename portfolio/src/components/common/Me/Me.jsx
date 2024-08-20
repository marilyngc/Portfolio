import { useThemeContext } from "../../../context/ThemeContext";

export const Me = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <section className="w-full">
      <header
        className={`font-bold text-2xl  mb-6 flex items-center gap-3 ${
          isDarkTheme ? `dark:text-gray-100 ` : `text-indigo-400`
        }`}
      >
        <h2>Que estoy haciendo</h2>

        <lord-icon
          src="https://cdn.lordicon.com/jjoolpwc.json"
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

        <div className="i-fa-pro:briefcase text-3xl"></div>
      </header>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 ">
            <p
              className={` text-lg ${
                isDarkTheme ? `dark:text-slate-300` : `text-slate-600 `
              }`}
            >
              Soy de esas personas a la que le gusta estar haciendo un poco de
              todo, desde el 2022 me encuentro cubriendo varios roles en
              paralelo. Actualmente, estoy enfocada en mi formación académica en
              la Universidad Tecnológica Nacional (UTN), cursando la Tecnicatura
              Universitaria en Programación 💪.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
