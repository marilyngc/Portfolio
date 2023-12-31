import avatar from "../../../assets/avatar/avatar.png"
import { BsFileEarmarkPersonFill } from "react-icons/bs";
import { GiBullseye } from "react-icons/gi";


export const Profile = () => {

    const team = [
        {
            avatar: avatar,
            name: "Marilyn Celis ",
            title: "Full-Stack Developer MERN ",
            desc: "Soy una desarrolladora web localizado en Argentina. Actualmente me encuentro formándome como Backend Developer.. ",
            linkedin: "https://www.linkedin.com/in/marilyn-celis-developer573/",
            github: "https://github.com/marilyngc"
        },

    ]

    return (
        <section className="flex flex-col gap-16 mt-8" >
         

        <div className="flex flex-col sm:flex-row items-center gap-5">
        {
                        team.map((item, idx) => (
                            <div key={idx} className="flex flex-col sm:flex-row items-center   gap-11">
                                <div className="w-full md:w-1/3  ">
                                    <div className=" relative w-44 h-44 bg-indigo-100 dark:bg-gray-700/60 border-8 border-white dark:border-gray-900/80 shadow-lg rounded-full overflow-hidden">
                                        <img
                                            src={item.avatar}
                                            className="w-full h-full object-cover object-center shadow-md"
                                            alt="Foto de perfil"
                                        />
                                    </div>

                                </div>
                                <div className="flex flex-col items-center sm:items-start gap-2   ">
                                    <h4 className="text-2xl sm:text-4xl text-center sm:text-left font-bold text-slate-600 dark:text-slate-100">{item.name}</h4>
                                    <p class="text-slate-700 text-sm sm:text-lg dark:text-slate-300 max-w-xl rounded-2xl">{item.title}</p>
                                    
                                    <div className="mt-1 flex gap-4 text-gray-400">
                                    <div className="relative group/tooltip">
                                        <div className="p-2.5 rounded-xl grid place-items-center bg-emerald-200 dark:bg-emerald-500">
                                        <GiBullseye  className="text-emerald-700 dark:text-white" />
                                        <div class="i-fa-pro:bullseye-arrow text-emerald-700 dark:text-white"></div></div><span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Disponible</span></div>
                                    <a href="/CV_Marilyn.pdf" download>
                                    <button  className="flex items-center text-sm gap-3 bg-indigo-100 hover:bg-opacity-80 dark:bg-indigo-500 hover:dark:bg-opacity-90 text-indigo-500 dark:text-indigo-100 py-2 px-4 rounded-lg font-semibold">
                                    <BsFileEarmarkPersonFill  className="i-fa-pro:file-user text-xl sm:text-lg z-auto" />
                                        Resumen</button>
                                    </a>
                                   

                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
               
        </div>
              
                  

           
        </section>
    )
}