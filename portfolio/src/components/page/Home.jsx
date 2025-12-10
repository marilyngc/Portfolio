import { Navbar } from "../layout/navbar/Navbar.jsx";
import { Experince } from "../common/Experience/Experience.jsx";
import { Social } from "../common/Social/Social.jsx";
import { useThemeContext } from "../../context/ThemeContext.jsx";
import { Footer } from "../common/Footer/Footer.jsx";
import { Cursor } from "../common/Cursor/Cursor.jsx";
import ProgressWrap from "../common/ProgressWrap/ProgressWrap.jsx";
import DarkMode from "../common/DarkMode/DarkMode.jsx";
import { ChatBot } from "../common/ChatBot/ChatBot.jsx";
import { Trabajo } from "../common/Trabajo/Trabajo.jsx";
import { Skills } from "../common/Skills/Skills.jsx";
import { Formacion } from "../common/Formacion/Formacion.jsx";
import { Portada } from "../common/Portada/Portada.jsx";
import AboutMe from "../common/AboutMe/AboutMe.jsx";
import Automation from "../common/Automation/Automation.jsx";

export const Home = () => {
  const { contextTheme, setContextTheme } = useThemeContext();
  return (
    <div id={contextTheme}>
      <header className="scroll-animation hidden lg:block full p-2 fixed top-0 left-0 right-0 z-[9999]">
        <Navbar />
      </header>

      <main className="w-full px-2 z-0">
        <Portada />

        <Cursor />
        <AboutMe />

        <Experince />
        <ChatBot />
        <ProgressWrap />
        <Trabajo />
        <Formacion />
        <Skills />

        <Automation />
        <Social />
      </main>

      <Footer />
    </div>
  );
};
