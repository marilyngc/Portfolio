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
    <span
      className={`absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap before:content-[''] before:absolute before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 group-hover:opacity-100 group-hover:-translate-y-3 ${
        isDarkTheme
          ? `dark:bg-white dark:text-gray-700 before:dark:bg-white`
          : `before:bg-gray-800 text-gray-200 bg-gray-800`
      }`}
    >
      Copiar Email 
    </span>
    <span id="urlEmail" className="m-0">
      {copied ? "Copiado!" : data}
    </span>
  </button>
  
  );
}
