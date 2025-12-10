import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
export function CopyData({ data, isDarkTheme }) {
  const [copied, setCopied] = useState(false);

  const copyInfo = () => {
    navigator.clipboard.writeText(data).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
    onClick={copyInfo}
    className={`flex items-center text-sm gap-3 py-2 px-4 rounded-lg font-semibold relative group ${
      isDarkTheme
        ? `dark:text-indigo-100 dark:bg-fuchsia-700 hover:dark:bg-opacity-80`
        : `text-fuchsia-500 bg-fuchsia-200 hover:bg-opacity-80`
    }`}
  >
    <IoCopyOutline className="i-fa-pro:file-user text-xl sm:text-lg z-auto" />
    <div
                      className={`
                        duration-150 transition-all inline-block 2xl:left-[104%] 2xl:right-auto absolute border rounded-md px-2 py-1 right-[107%] shadow-sm text-sm w-max z-10
                        ${isDarkTheme ? "border-neutral-800 bg-[#1a1a1a] text-white" : "border-neutral-300 bg-neutral-200/30 text-black"}
                        group-hover:opacity-100 group-hover:visible invisible opacity-0 pointer-events-none
                      `}
                      role="tooltip"
                    >
                      Copiar email
                    </div>
    <span id="urlEmail" className="m-0">
      {copied ? "Copiado!" : data}
    </span>
  </button>
  
  );
}
