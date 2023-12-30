import { ImageCard } from "../ImageCard/ImageCard.jsx"


export const Experince = () => {
    return(
        <section className="w-full">
            
        <div className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        <h2>Proyectos</h2>
        <div className="i-fa-pro:star-half text-3xl"></div>
        </div>
       <ImageCard/>
     
        
        </section>
    )
}