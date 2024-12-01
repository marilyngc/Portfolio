
import React from "react";
import "./imageCard.scss";

import { DataProyects } from "../../../data/MOCK_DATA.jsx";

import { useThemeContext } from "../../../context/ThemeContext.jsx";
import { ToolTip } from "../ToolTip/ToolTip.jsx";

export const ImageCard = () => {
  const { contextTheme } = useThemeContext();
  // Almacenar el valor del contexto en una variable local
  const isDarkTheme = contextTheme === "dark";
  return (
    <div className="flex flex-col gap-10 mb-9">
      <div className=" grid gap-0 sm:gap-7 md:grid-cols-12 group">
        {DataProyects.map((proyect, index) => (
          <React.Fragment key={index}>
            <div
              
              className={`cardProyect mb-5  relative rounded-xl  overflow-hidden flex col-span-7 lg:col-span-4  ${
                isDarkTheme ? `dark:bg-gray-700/50 ` : ` bg-gray-500/50`
              }`}
            >
              <span>
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: 0,
                    margin: 0,
                    padding: 0,
                  }}
                  alt=""
                  aria-hidden="true"
                  src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
                />
              </span>
              <img
                src={proyect.img}
                alt={"imagen " + index + 1}
                className="rounded-xl "
              />
              
            </div>

<ToolTip  content={proyect} isDarkTheme={isDarkTheme}/>
</React.Fragment>
        ))}
      </div>
    </div>
  );
};
