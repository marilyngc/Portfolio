import { IoMdLink } from "react-icons/io";
import React from "react";
import { DataProyects } from "../../../data/MOCK_DATA.jsx";
import { HiOutlineArrowUpRight } from "react-icons/hi2";


import socket from "../../../assets/tools/socket-io.svg"
import express from "../../../assets/tools/express.svg"
import handlebars from "../../../assets/tools/handlebars.svg"

export const ImageCard = () => {

    return (
       
            <div className="flex flex-col gap-10">
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
          {proyect.event.map((event, eventIndex) => {
            const toolName = tool.split('/').pop().split('.')[0]; // Extraer el nombre de la herramienta de la ruta de la imagen
            
            if (event.toUpperCase() === toolName.toUpperCase()) {
             
        return (
          <span
          key={eventIndex}
          className="absolute absolute-tooltip group-hover-tooltip pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3"
        >
          {event}
        </span>
      
        );
      }
      return null;
      
})}

         
         
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
                   


            ))}



        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5">
        <a href="https://github.com/marilyngc/Chat" target="_blank" rel="noreferrer" class="block group border-2 border-gray-100 hover:border-gray-200 dark:border-gray-700 dark:hover:border-gray-300/30 rounded-xl shadow_translate-transition hover:sm:shadow sm:hover:-translate-y-1">
            <article class="relative flex flex-col justify-between w-full py-6 px-7">
        <h2 class="text-gray-700 dark:text-gray-200 text-lg font-bold">Chat Server</h2>
        <p class="text-slate-400 dark:text-slate-200">Un ejemplo mínimo de programación para un servidor de chat.</p>
        <div class="flex gap-1 mt-1.5 items-center">
            <div class="relative group/tooltip">
           
          
            <svg width="20" height="20" viewBox="0 0 512 124" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid"><path d="M188.432 0c17.799-.077 36.052 5.03 49.886 16.537 7.089 5.738 12.815 12.937 17.678 20.602 8.75-14.144 21.531-26.162 37.292-31.955 19.206-7.21 40.915-6.712 60.088.355 16.747 6.114 31.39 16.769 44.67 28.487 10.389 9.171 20.003 19.206 30.702 28.034 5.638 4.574 11.696 8.86 18.63 11.23 9.215 3.146 20.114.178 26.704-6.922 6.103-6.645 5.726-18.131-.997-24.2-4.275-3.689-11.585-2.947-14.61 1.97-2.646 3.9-1.162 8.762.91 12.539-5.506-4.02-11.021-9.625-11-16.935-1.14-8.451 5.129-15.906 12.638-18.863 14.654-5.86 33.029-.808 42.278 12.095 8.894 12.04 9.602 27.867 8.052 42.21-1.872 13.624-9.492 26.34-20.79 34.226-15.86 11.32-35.964 14.83-55.092 14.587-18.386-.499-36.584-4.652-53.619-11.52-28.487-11.452-55.147-27.28-84.565-36.428-9.758-3.788-20.136-5.837-30.57-6.469-8.307-.055-16.182-.443-24.024.089-9.57.92-19.084 2.88-28.044 6.39-29.916 9.305-56.975 25.531-86.005 37.006-24.512 9.536-51.67 13.967-77.687 8.672-14.554-2.946-29.042-9.381-38.866-20.845C3.684 91.145-.347 78.098.05 65.316c-.465-12.062 2.182-24.877 10.157-34.27 7.42-8.904 19.372-13.423 30.847-12.426 7.387.343 14.875 3.566 19.438 9.514 3.589 4.707 3.81 11.154 2.237 16.658-1.916 4.951-5.87 8.817-10.167 11.785 2.193-3.7 3.522-8.584.93-12.45-3.19-5.15-11.043-5.67-15.196-1.44-5.117 5.262-6.192 13.857-2.758 20.303 3.721 6.757 11.42 10.611 18.873 11.397 11.276.975 21.056-6.014 29.33-12.792 17.123-14.743 32.54-31.611 51.536-44.083 15.662-10.5 34.114-17.6 53.154-17.511z" fill="#423426"/></svg>
        <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">HTML</span>
        </div>
        <div class="relative group/tooltip">
        <svg width="20" height="20" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet"><path d="M96.447 7.382c32.267-8.275 67.929-3.453 96.386 14.11 35.84 21.433 59.238 61.976 59.833 103.71 1.31 42.15-20.659 83.944-55.963 106.865-39.293 26.433-93.648 27.446-133.775 2.322-40.9-24.41-64.774-73.645-58.641-120.916 4.94-49.95 43.52-94.005 92.16-106.09z" fill="#010101"/><path d="M91.505 27.803c60.964-24.41 135.74 20.658 142.05 86.028 9.824 58.82-38.995 118.593-98.59 120.32-56.677 5.656-111.449-42.39-113.056-99.304-4.227-46.08 26.136-91.803 69.596-107.044z" fill="#FFF"/><path d="M97.637 121.69c27.327-22.326 54.058-45.426 81.98-67.097-14.646 22.505-29.708 44.711-44.354 67.215-12.562.06-25.123.06-37.626-.119zM120.737 134.132c12.621 0 25.183 0 37.745.179-27.505 22.206-54.117 45.484-82.099 67.096 14.646-22.505 29.708-44.77 44.354-67.275z" fill="#010101"/></svg>
        <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
        </div>
        <div class="relative group/tooltip">
            <svg width="20" height="20" viewBox="0 0 512 149" xmlns="http://www.w3.org/2000/svg"><path d="M3.332 115.629V58.648h71.144v-3.333H3.332V3.332h75.642V0H0v118.961h79.64v-3.332H3.333zm140.455-82.307l-29.49 38.821-28.825-38.82H81.14l31.157 41.32L78.14 118.96h3.999l32.156-41.82 32.323 41.82h4.165l-34.322-44.319 31.323-41.32h-3.998zm16.994 114.963V94.97h.333c2 7.775 5.943 14.023 11.83 18.744 5.887 4.72 13.384 7.081 22.492 7.081 5.887 0 11.108-1.194 15.662-3.582s8.358-5.637 11.413-9.747c3.054-4.11 5.387-8.886 6.998-14.329 1.61-5.442 2.416-11.163 2.416-17.16 0-6.443-.834-12.386-2.5-17.828-1.666-5.443-4.082-10.164-7.247-14.162-3.166-3.999-6.998-7.11-11.497-9.33-4.498-2.222-9.58-3.333-15.245-3.333-4.332 0-8.358.639-12.079 1.916-3.721 1.278-7.025 3.082-9.913 5.415a36.674 36.674 0 0 0-7.498 8.247c-2.11 3.166-3.721 6.637-4.832 10.414h-.333V33.322h-3.332v114.963h3.332zm34.655-30.657c-10.44 0-18.827-3.582-25.158-10.746-6.331-7.164-9.497-17.467-9.497-30.907 0-5.554.778-10.83 2.333-15.828 1.555-4.998 3.804-9.386 6.747-13.162 2.944-3.777 6.582-6.776 10.913-8.997 4.332-2.222 9.22-3.333 14.662-3.333 5.554 0 10.414 1.111 14.579 3.333 4.165 2.221 7.609 5.248 10.33 9.08s4.776 8.22 6.165 13.162c1.388 4.943 2.082 10.191 2.082 15.745 0 4.999-.638 9.97-1.916 14.912-1.277 4.943-3.249 9.386-5.915 13.33-2.665 3.942-6.08 7.163-10.246 9.663-4.166 2.499-9.192 3.748-15.079 3.748zm54.816 1.333V70.477c0-4.665.666-9.22 2-13.662 1.332-4.443 3.387-8.359 6.164-11.746 2.777-3.388 6.303-6.054 10.58-7.998 4.276-1.944 9.358-2.749 15.245-2.416v-3.332c-5.11-.11-9.58.444-13.412 1.666-3.833 1.222-7.137 2.888-9.914 4.999-2.777 2.11-4.998 4.581-6.664 7.414a33.15 33.15 0 0 0-3.666 9.08h-.333v-21.16h-3.332v85.64h3.332zm38.154-42.153h71.643c.223-5.887-.36-11.551-1.749-16.994-1.388-5.443-3.61-10.275-6.664-14.495-3.055-4.221-6.998-7.609-11.83-10.164-4.832-2.555-10.58-3.832-17.244-3.832-4.777 0-9.442 1-13.996 3-4.554 1.999-8.553 4.914-11.996 8.746-3.443 3.832-6.22 8.525-8.33 14.08-2.11 5.553-3.166 11.884-3.166 18.993 0 6.331.722 12.246 2.166 17.744 1.444 5.498 3.665 10.275 6.664 14.329 3 4.054 6.86 7.192 11.58 9.413 4.72 2.222 10.413 3.277 17.078 3.166 9.774 0 17.994-2.75 24.658-8.247 6.665-5.499 10.608-13.246 11.83-23.243h-3.332c-1.444 9.442-5.138 16.523-11.08 21.243-5.943 4.721-13.412 7.081-22.41 7.081-6.109 0-11.274-1.055-15.495-3.165-4.22-2.11-7.664-4.999-10.33-8.664-2.665-3.666-4.637-7.97-5.914-12.913-1.278-4.942-1.972-10.302-2.083-16.078zm68.311-3.332h-68.31c.332-5.998 1.443-11.385 3.331-16.161 1.889-4.777 4.36-8.859 7.415-12.246 3.054-3.388 6.609-5.97 10.663-7.748 4.054-1.777 8.414-2.666 13.079-2.666 5.554 0 10.44 1.028 14.662 3.083 4.22 2.055 7.747 4.86 10.58 8.414 2.832 3.554 4.97 7.692 6.414 12.412 1.444 4.721 2.166 9.692 2.166 14.912zm72.477-14.828h3.332c0-9.553-2.777-16.495-8.33-20.827-5.555-4.332-13.108-6.498-22.66-6.498-5.332 0-9.83.667-13.496 2-3.665 1.332-6.664 3.054-8.997 5.164-2.332 2.11-3.998 4.443-4.998 6.998-1 2.555-1.5 4.999-1.5 7.331 0 4.665.833 8.386 2.5 11.163 1.666 2.777 4.276 4.943 7.83 6.498 2.444 1.11 5.22 2.11 8.331 3 3.11.888 6.72 1.832 10.83 2.831 3.665.89 7.275 1.778 10.83 2.666 3.554.889 6.692 2.083 9.413 3.582 2.722 1.5 4.943 3.416 6.665 5.749 1.721 2.332 2.582 5.387 2.582 9.163 0 3.666-.86 6.776-2.582 9.33a20.815 20.815 0 0 1-6.581 6.249c-2.666 1.61-5.638 2.776-8.914 3.498-3.277.722-6.47 1.083-9.58 1.083-10.108 0-17.856-2.249-23.243-6.747-5.387-4.499-8.08-11.58-8.08-21.244h-3.333c0 10.775 2.916 18.661 8.747 23.66 5.832 4.998 14.468 7.497 25.909 7.497 3.665 0 7.358-.417 11.08-1.25 3.72-.833 7.053-2.193 9.996-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.75-6.665 2.75-10.997 0-4.11-.806-7.442-2.416-9.997-1.611-2.554-3.721-4.665-6.332-6.331-2.61-1.666-5.553-2.971-8.83-3.915a516.08 516.08 0 0 0-9.914-2.75 1726.675 1726.675 0 0 0-12.246-3.165c-3.498-.889-6.747-1.944-9.746-3.166-2.888-1.222-5.193-2.971-6.915-5.248-1.722-2.277-2.582-5.526-2.582-9.747 0-.777.222-2.166.666-4.165.444-2 1.5-4.027 3.166-6.082 1.666-2.054 4.22-3.887 7.664-5.498 3.443-1.61 8.164-2.416 14.162-2.416 4.11 0 7.858.445 11.246 1.333 3.388.889 6.304 2.305 8.747 4.249 2.444 1.944 4.332 4.415 5.665 7.414 1.333 3 2 6.665 2 10.997zm77.141 0h3.332c0-9.553-2.776-16.495-8.33-20.827-5.554-4.332-13.107-6.498-22.66-6.498-5.331 0-9.83.667-13.495 2-3.666 1.332-6.665 3.054-8.997 5.164-2.333 2.11-3.999 4.443-4.999 6.998-1 2.555-1.499 4.999-1.499 7.331 0 4.665.833 8.386 2.5 11.163 1.665 2.777 4.276 4.943 7.83 6.498 2.444 1.11 5.22 2.11 8.33 3 3.11.888 6.72 1.832 10.83 2.831 3.666.89 7.276 1.778 10.83 2.666 3.555.889 6.692 2.083 9.414 3.582 2.721 1.5 4.943 3.416 6.664 5.749 1.722 2.332 2.583 5.387 2.583 9.163 0 3.666-.861 6.776-2.583 9.33a20.815 20.815 0 0 1-6.58 6.249c-2.667 1.61-5.638 2.776-8.915 3.498-3.276.722-6.47 1.083-9.58 1.083-10.108 0-17.855-2.249-23.242-6.747-5.388-4.499-8.081-11.58-8.081-21.244h-3.332c0 10.775 2.915 18.661 8.747 23.66 5.831 4.998 14.467 7.497 25.908 7.497 3.666 0 7.359-.417 11.08-1.25 3.72-.833 7.053-2.193 9.997-4.082a22.592 22.592 0 0 0 7.164-7.33c1.833-3 2.749-6.665 2.749-10.997 0-4.11-.805-7.442-2.416-9.997-1.61-2.554-3.72-4.665-6.331-6.331-2.61-1.666-5.554-2.971-8.83-3.915a516.071 516.071 0 0 0-9.914-2.75 1726.65 1726.65 0 0 0-12.246-3.165c-3.499-.889-6.748-1.944-9.747-3.166-2.888-1.222-5.193-2.971-6.914-5.248-1.722-2.277-2.583-5.526-2.583-9.747 0-.777.222-2.166.667-4.165.444-2 1.5-4.027 3.165-6.082 1.666-2.054 4.221-3.887 7.664-5.498 3.444-1.61 8.164-2.416 14.163-2.416 4.11 0 7.858.445 11.246 1.333 3.388.889 6.303 2.305 8.747 4.249 2.444 1.944 4.332 4.415 5.665 7.414 1.333 3 2 6.665 2 10.997z" fill="#222"/></svg>
        <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Javascript</span>
        </div>
        </div>




        <div class="absolute grid place-items-center right-3 top-3 bg-white dark:bg-gray-800 w-9 h-9 rounded-full scale-0 group-hover:scale-90 transition-transform dark:opacity-80 border-0 border-slate-100 border-indigo-100/50 dark:border-slate-200/20 shadow-sm">  
        <HiOutlineArrowUpRight  className=" text-gray-400 dark:text-gray-50 text-2xl"/>
       
        </div>
        </article>
        </a>


      
               </div>
            </div>
        
      
       
        



    )
}