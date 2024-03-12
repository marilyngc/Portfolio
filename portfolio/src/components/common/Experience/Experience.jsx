import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { ImageCard } from "../ImageCard/ImageCard.jsx"
import { FaStarHalfAlt } from "react-icons/fa";

export const Experince = () => {
    const {contextTheme} = useThemeContext();
    // Almacenar el valor del contexto en una variable local
    const isDarkTheme = contextTheme === 'dark';
    return(
        <section className="w-full">
            
        <div className={`font-bold text-2xl  mb-6 flex items-center gap-3 ${isDarkTheme ? `dark:text-gray-100 ` : `text-indigo-400`}`}>
        <h2>Proyectos</h2>
        <FaStarHalfAlt />
        <div className="i-fa-pro:star-half text-3xl"></div>
        </div>
       <ImageCard/>
     
        
        </section>
    )
}