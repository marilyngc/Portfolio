import { ImageCard } from "../ImageCard/ImageCard.jsx"
import { FaStarHalfAlt } from "react-icons/fa";

export const Experince = () => {
    return(
        <section className="w-full">
            
        <div className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        <h2>Proyectos</h2>
        <FaStarHalfAlt />
        <div className="i-fa-pro:star-half text-3xl"></div>
        </div>
       <ImageCard/>
     
        
        </section>
    )
}