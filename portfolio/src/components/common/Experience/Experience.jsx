import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { Card } from "../Card/Card.jsx";
import { ImageCard } from "../ImageCard/ImageCard.jsx";


export const Experince = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <section id="portfolio" className="mb-6 pt-8 max-w-6xl mx-auto lg:pt-15 ">
      <div
        className={`font-semibold text-2xl  mb-6 flex items-center gap-3 ${
          isDarkTheme ? `dark:text-gray-100 ` : `text-slate-600`
        }`}
      >
        <h2>Proyectos</h2>
      
       
        <div className="i-fa-pro:star-half text-3xl"></div>
      </div>
      <ImageCard />
      <Card/>
    </section>
  );
};
