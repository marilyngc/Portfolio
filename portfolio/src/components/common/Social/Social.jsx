import { IoHeartHalf } from "react-icons/io5";

import React, { useEffect } from 'react';
import { SocialNetworks } from "../../../data/MOCK_DATA.jsx";


export const Social = () => {
    useEffect(() => {
    

document.querySelectorAll('.button').forEach(button => {

    const bounding = button.getBoundingClientRect()

    button.addEventListener('mousemove', e => {

        let dy = (e.clientY - bounding.top - bounding.height / 2) / -1
        let dx = (e.clientX - bounding.left - bounding.width / 2)  / 10

        dy = dy > 10 ? 10 : (dy < -10 ? -10 : dy);
        dx = dx > 4 ? 4 : (dx < -4 ? -4 : dx);

        button.style.setProperty('--rx', dy);
        button.style.setProperty('--ry', dx);

    });

   

   

});



      }, []); // El segundo argumento es un array de dependencias vacío para que se ejecute solo una vez al montar el componente
    



    return (
        <section className="w-full">
            <div className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
                <h2>Social</h2>
                <IoHeartHalf />
                
            </div>
            <div className="flex flex-wrap gap-3 ">
            {SocialNetworks.map((social) => (
  <a key={social.title} href={social.link} target="_blank">
    <button className={social.title === "Linkedin" ? "button text-sky-600" :"button text-white/80"} >
      <div className="icon">{social.icon}</div>
      <span>{social.title}</span>
    </button>
  </a>
))}
            </div>
      

         
        </section>
    )
}