import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";

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
        className={`flex items-center text-sm gap-3   py-2 px-4 rounded-lg font-semibold ${
          isDarkTheme
            ? `dark:text-indigo-100 dark:bg-fuchsia-700 hover:dark:bg-opacity-80 `
            : `text-fuchsia-500 bg-fuchsia-200 hover:bg-opacity-80 `
        }`}
      >
        <TfiEmail className="i-fa-pro:file-user text-xl sm:text-lg z-auto" />
        <span id="urlEmail" className="m-0">
          {copied ? "Copiado!" : data}
        </span>
      </button>
    );
}
