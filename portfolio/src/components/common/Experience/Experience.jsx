import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { ImageCard } from "../ImageCard/ImageCard.jsx";


export const Experince = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <section className="w-full">
      <div
        className={`font-bold text-2xl  mb-6 flex items-center gap-3 ${
          isDarkTheme ? `dark:text-gray-100 ` : `text-indigo-400`
        }`}
      >
        <h2>Proyectos</h2>
        <lord-icon
          src="https://cdn.lordicon.com/vcuhguff.json"
          trigger="in"
          delay="1500"
          stroke="bold"
          state="in-dynamic"
          colors={
            isDarkTheme
              ? "primary:#ffffff,secondary:#c69cf4"
              : "primary:#a5b4fc,secondary:#c69cf4"
          }
        ></lord-icon>
       
        <div className="i-fa-pro:star-half text-3xl"></div>
      </div>
      <ImageCard />
    </section>
  );
};
