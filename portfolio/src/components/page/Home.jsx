import { Navbar } from "../layout/navbar/Navbar.jsx"
import { Profile } from "../common/Profile/Profile.jsx";
import { Experince } from "../common/Experience/Experience.jsx";
import { Social } from "../common/Social/Social.jsx";
import { Me } from "../common/Me/Me.jsx";
import { useThemeContext } from "../../context/ThemeContext.jsx";
import { Footer } from "../common/Footer/Footer.jsx";
import { Cursor } from "../common/Cursor/Cursor.jsx";
import ProgressWrap from "../common/ProgressWrap/ProgressWrap.jsx";
import DarkMode from "../common/DarkMode/DarkMode.jsx";

export const Home = () => {
    const {contextTheme,setContextTheme} = useThemeContext()
    return(
        <>
        <body id={contextTheme}>
        <Cursor/>
        <Navbar/>
        <main  className="mx-auto max-w-3xl px-5 mb-10 flex flex-col gap-10">
    <Profile/>
    <hr className="border border-dotted border-gray-300 dark:border-gray-600 rounded-md"/>
   <Me/>
   <Social/>
   <Experince/>
<ProgressWrap/>
{/* <DarkMode/> */}
    </main>
    <Footer/>
        </body>
    
        </>

    )
}