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
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export const DataProyects = [
  {
    img: millonario,
    title: "¿Quién quiere ser millonario?",
    description:
      "Juego de trivia que hace referencia al famoso programa de televisión.",
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
    link: "https://github.com/marilyngc/Quien_quiere_ser_millonario_juego",
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
    link: "https://github.com/marilyngc/Chat",
 
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
    link: "https://ecommerce-leyb.vercel.app",
  },

];

export const DataProyectNotImage = [
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
      "Plataforma dedicada a ofrecer una experiencia centrada a la salud física.",
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
