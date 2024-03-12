import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaRegSun } from "react-icons/fa6";
import ReactSwitch from "react-switch"
import { useState } from 'react'
import { useThemeContext } from "../../../context/ThemeContext";
export const Navbar = () => {

  const {contextTheme,setContextTheme} = useThemeContext();
      // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === 'dark';
  const [checked, setChecked] = useState(false);
  const handleSwitch = (nextChecked) => {
    setContextTheme( (state) => (state === "dark"? "light":"dark" ))
    setChecked(nextChecked);
    // console.log(nextChecked)
  }
    return(
      <div className="mx-auto max-w-3xl sticky top-0 z-10">
        <header  className={`-full bottom-0 static flex justify-end items-center py-1 px-5 z-20    `}>
          <button onClick={handleSwitch} className="relative group/tooltip py-4 px-2 sm:py-5 flex items-center gap-4 outline-none">
          {/* <ReactSwitch
  onChange = {handleSwitch}
  checked = {checked}
    onColor="#86d3ff"
    onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={15}
    width={40}
    className="react-switch"
    id="material-switch"
     />  */}
         
          <FaRegSun className={` text-2xl  text-slate-700 ${isDarkTheme ? `dark:hidden` : `block`}`}/>
         
            <BsFillMoonStarsFill className={` text-2xl   text-slate-100 ${isDarkTheme ? `dark:block` : `hidden`}`}/>
 
        </button>
        </header></div>
    )
}