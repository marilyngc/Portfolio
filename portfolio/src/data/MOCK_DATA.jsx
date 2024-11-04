import ecommerce from "../assets/ecommerce.png";
import millonario from "../assets/menu_millonario.png";
import chat_photo from "../assets/chat-marco.png"
import react from "../assets//tools/react.svg";
import javascript from "../assets//tools/javascript.svg";
import sass from "../assets/tools/sass.svg";
import bootstrap from "../assets/tools/bootstrap.svg";
import firebase from "../assets/tools/firebase.svg";
import socket from "../assets/tools/socket.svg";
import handlebars from "../assets/tools/handlebars.svg";
import express from "../assets/tools/express.svg";
import python from "../assets/tools/python.svg";
import pygame from "../assets/tools/pygame.png";
import node from "../assets/tools/node.svg";
import discord from "../assets/tools/discord.svg";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export const DataProyects = [
  {
    img: millonario,
    title: "¿Quién quiere ser millonario?",
    description:
      "Juego de trivia basado en el programa de televisión, creado usando programación algorítmica y POO.",
    tools: [
        {
          id: "python",
          src: python,
        },
        {
          id: "pygame",
          src: pygame,
        },
        
      ],
    event: ["Pygame", "Python"],
    linkLive: "https://www.youtube.com/watch?v=Sey38ziXK74",
    linkCode: "https://github.com/marilyngc/Quien_quiere_ser_millonario_juego",
  },
  {
    img: chat_photo,
    title: "Chat Server",
    description:
      "Un ejemplo mínimo de programación para un servidor de chat.",
    tools: [
        {
          id: "javascript",
          src: javascript
        },
        {
          id: "handlebars",
          src: handlebars,
        },
        {
          id: "socket",
          src: socket,
        },
        {
          id: "express",
          src: express,
        },
        
      ],
    event: ["Handlebars", "Socket", "Express","Javascript"],
    linkCode: "https://github.com/marilyngc/Chat",
 
  },

  {
    img: ecommerce,
    title: "E-commerce",
    description:
      "Proyecto final realizado en CoderHouse quedando en el TOP 10 de la comisión.",
    tools: [
        {
          id: "react",
          src: react,
        },
        {
          id: "javascript",
          src: javascript,
        },
        
        {
          id: "firebase",
          src: firebase,
        },

        {
          id: "bootstrap",
          src: bootstrap,
        },
        {
          id: "sass",
          src: sass,
        },
      ],
    event: ["Sass", "Javascript", "React", "Firebase", "Bootstrap"],
    linkLive: "https://ecommerce-leyb.vercel.app",
    linkCode: "https://github.com/marilyngc/Ecommerce?tab=readme-ov-file",

  },

];

export const DataProyectNotImage = [
  {
    title: "Blockchain",
    description:
      "Ejemplo practico de creación de un blockchain.",
    tools: [
      
        {
          id: "javascript",
          src: javascript,
        },
    
        {
          id: "node",
          src: node,
        },
    
     
        
      ],

    event: ["Node", "Javascript"],
    link: "https://github.com/marilyngc/YT-blockchain",
  },
  {
    title: "Bot Discord ",
    description:
      "Bot personalizado asigna roles, da la bienvenida, reacciona a palabras clave y ofrece comandos de información.",
    tools: [
      
        {
          id: "python",
          src: python,
        },
    
        {
          id: "discord",
          src: discord,
        },
    
     
        
      ],

    event: ["Discord", "Python"],
    link: "https://youtu.be/4f9J9CRF9tI",
  },
  {
    title: "Tu mejor amigo",
    description:
      "Sitio inspirado en TuMejorAmigo. El sitio web permite que los dueños encuentren cuidadores confiables para sus animales.",
    tools: [
      {
        id: "react",
        src: react,
      },
      {
        id: "javascript",
        src: javascript,
      },
      {
        id: "bootstrap",
        src: bootstrap,
      },
      {
        id: "sass",
        src: sass,
      },
    ],
    event: ["Sass", "Javascript", "React", "Bootstrap"],
    link: "https://marilyngc.github.io/TuMejorAmigo//",
  },
  {
    title: "Wellness Center",
    description:
      "Trabajo freelance sin fines de lucro con un equipo de dos diseñadoras UX/UI y dos programadores en React.",
    tools: [
        {
          id: "react",
          src: react,
        },
        {
          id: "javascript",
          src: javascript,
        },
        {
          id: "bootstrap",
          src: bootstrap,
        },
        {
          id: "sass",
          src: sass,
        },
        
      ],

    event: ["Sass", "Javascript", "React", "Bootstrap"],
    link: "https://wellnesscenterspaygym.com",
  },
 
];

export const SocialNetworks = [
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/marilyn-celis-developer573/",
    icon: <FaLinkedin className="text-2xl" />,
  },
  {
    title: "GitHub",
    link: "https://github.com/marilyngc",
    icon: <FaGithub className="text-2xl" />,
  },
];
