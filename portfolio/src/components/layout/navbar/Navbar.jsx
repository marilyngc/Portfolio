import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa6";


export const Navbar = () => {
    return(
      <div className="mx-auto max-w-3xl sticky top-0 z-10">
        <header className="-full bottom-0 static flex justify-end items-center py-1 px-5 z-20 bg-white dark:bg-gray-800 bg-opacity-80 dark:bg-opacity-80 backdrop-blur-lg">
          <button className="relative group/tooltip py-4 px-2 sm:py-5 flex items-center gap-4 outline-none">
          <FaRegSun className=" text-2xl dark:hidden text-slate-700"/>
         
            <BsFillMoonStarsFill className=" text-2xl hidden dark:block text-slate-100"/>
            <span
  className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-3.5 px-3 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-10 before:-bottom-1 before:-z-10 before:left-16 before:-translate-x-2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1"
  style={{ top: '4rem' }} // Ajusta este valor según sea necesario
>
  Página en producción :D
</span>
        </button>
        </header></div>
    )
}