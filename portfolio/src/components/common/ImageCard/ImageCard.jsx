import { IoMdLink } from "react-icons/io";
import React from "react";
import { DataProyects } from "../../../data/MOCK_DATA.jsx";

export const ImageCard = () => {

    return (
        <div className=" grid gap-4 sm:gap-7 md:grid-cols-2 group">
            {DataProyects.map((proyect, index) => (
                <React.Fragment key={index}>
                     <div  className="cardProyect relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">

<span>
    <img
        style={{
            display: 'block',
            maxWidth: '100%',
            width: 'initial',
            height: "initial",
            background: 'none',
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0
        }}
        alt=""
        aria-hidden="true"
        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
    />
</span>
<img src={proyect.img} alt="" className="rounded-xl " />




</div>

<div className="flex flex-col gap-2.5 justify-center">
<h3 className="font-bold text-3xl text-slate-800 dark:text-white">
    {proyect.title}
</h3>
<p className="text-slate-600 dark:text-slate-300 text-lg">{proyect.description}</p>
<div className="flex gap-2 items-center mb-1">
{proyect.tools.map((tool, index) => (
        <div key={index} className="relative group/tooltip">
          <img src={tool} alt={`Tool ${index + 1}`} className="w-7 h-6" />

          {proyect.event.map((e, eIndex) => (
            <span
              key={eIndex}
              className="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">
              {e}
            </span>
          ))}
        </div>
      ))}




</div>
<div className="flex justify-start gap-3">
    <a href={proyect.link} target="_blank" rel="noreferrer" className="flex gap-3 group/live hover:gap-6 transition-[gap] items-center text-lg py-2 px-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-lg">Live <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform"><IoMdLink /></div></a>
    <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform">

    </div>
</div>
</div>

                </React.Fragment>
                   


            ))};


        </div>



    )
}