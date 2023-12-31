import home from "../assets/home.png";
import ecommerce from "../assets/ecommerce.png"
import wellness from "../assets/wellness.png"
import react from "../assets//tools/react.svg"
import javascript from "../assets//tools/javascript.svg"
import sass from "../assets/tools/sass.svg"
import bootstrap from "../assets/tools/bootstrap.svg"
import firebase from "../assets/tools/firebase.svg"
import { FaLinkedin,FaGithub  } from "react-icons/fa6";


export const DataProyects = [
    {
        img: home,
        title: "Tu mejor amigo",
        description: "Sitio inspirado en TuMejorAmigo. El sitio web permite que los dueños encuentren cuidadores confiables para sus animales.",
        tools: [react , javascript, bootstrap, sass],
        event: ["Sass", "Javascript", "React","Bootstrap"],
        link: "https://marilyngc.github.io/TuMejorAmigo//"



    },
    {
        img: ecommerce,
        title: "E-commerce",
        description: "Proyecto final realizado en CoderHouse quedando en el TOP 10 de la comisión.",
        tools: [react,javascript ,firebase, bootstrap, sass],
        event: ["Sass","Javascript", "React","Firebase","Bootstrap"],
        link: "https://ecommerce-leyb.vercel.app"



    },
    {
        img: wellness,
        title: "Wellness Center",
        description: "Nuestra plataforma se dedica a ofrecer una experiencia centrada a la salud física como mental.",
        tools: [ react,javascript,bootstrap,sass, ],
        event: ["Sass","Javascript", "React","Bootstrap"],
        link: "https://wellness-center-35r7.vercel.app"



    },


];


export const SocialNetworks = [
    {
        title:"Linkedin",
        link:"https://www.linkedin.com/in/marilyn-celis-developer573/",
        icon:<FaLinkedin className="text-2xl"/>,
        
    },
    {
        title:"GitHub",
        link:"https://github.com/marilyngc",
        icon:<FaGithub  className="text-2xl"/>,
    },
]