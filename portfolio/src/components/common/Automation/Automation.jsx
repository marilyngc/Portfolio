
import ContentList from "../ContentList.jsx";
import { AutomationList } from "../../../data/MOCK_DATA.jsx";
import { useThemeContext } from "../../../context/ThemeContext.jsx";





const Automation = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";

  return (
    <ContentList title={"Automatizaciones"} contentList={AutomationList}  isDarkTheme={isDarkTheme}/>
   
  );
};


export default Automation;