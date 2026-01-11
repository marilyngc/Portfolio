import { IoMdLink } from "react-icons/io";
import { FiGithub } from "react-icons/fi";
import candado from "../../../assets/candado.png";

export const ToolTip = ({ content, isDarkTheme }) => {
  const { title, description, tools, event } = content;
  return (
    <div className="lg:w-2/3  flex flex-col  gap-2.5 justify-start  col-span-8 lg:mb-5 mb-12 ms:mb-0">
      <h3
        className={`font-bold text-3xl  ${
          isDarkTheme ? `dark:text-white` : `text-slate-800`
        }`}
      >
        {title}
      </h3>
      <p
        className={`  font-normal text-cAccent text-pretty ${
          isDarkTheme ? `text-base ` : `text-base  `
        }`}
      >
        {description}
      </p>

      <footer className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-2 flex-wrap">
          {event.map((eventItem, index) => (
            <p
              key={index}
              className={`
          border rounded-md px-2 py-1 font-mono text-xs truncate
          ${
            isDarkTheme
              ? "border-neutral-800 bg-neutral-900 text-cWhite"
              : "border-neutral-300 bg-neutral-200/30 text-black"
          }
        `}
              title={eventItem}
            >
              {eventItem}
            </p>
          ))}
        </div>
      </footer>

     <div className="flex justify-start gap-3 md:mt-2">
  {/* LIVE */}
  {content.linkLive && (
    <a
      target="_blank"
      href={content.linkLive}
      role="link"
      className={`text-base flex gap-3 group/live hover:gap-5 inline-flex max-w-fit items-center justify-center rounded-xl border px-3 py-2 transition-all duration-500
        ${
          isDarkTheme
            ? "dark:border-gray-600 dark:bg-neutral-900 dark:text-white dark:hover:border-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
            : "border-gray-900 bg-gray-100 text-gray-800 hover:bg-black/25 hover:backdrop-blur-md shadow"
        }`}
    >
      <div className="text-2xl transition-transform group-hover/live:rotate-45">
        <IoMdLink />
      </div>
      Live
    </a>
  )}

  {/* CODE */}
  {content.isPrivate ? (
    <button
      disabled
      title="Repositorio privado"
      className={`text-base inline-flex items-center gap-3 rounded-xl border px-3 py-2 cursor-not-allowed opacity-50
        ${
          isDarkTheme
            ? "dark:border-gray-600 dark:bg-neutral-900 dark:text-white/50"
            : "border-gray-900 bg-gray-100 text-gray-900 shadow"
        }`}
    >
      
      <div className="text-2xl">
        <svg
  viewBox="0 0 24 24"
  fill="none"
  className="w-6 h-6 text-current"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M9 20.0267C6 20.9999 3.5 20.0267 2 17.0267"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M15 16C18.14 15.65 21.5001 15.0068 21.5001 9.54679C21.4998 8.15062 20.9628 6.80799 20.0001 5.79679C20.4559 4.5753 20.4237 3.22514 19.9101 2.02679C19.9101 2.02679 18.7301 1.67679 16.0001 3.50679C13.7081 2.88561 11.2921 2.88561 9.00008 3.50679C6.27008 1.67679 5.09008 2.02679 5.09008 2.02679C4.57645 3.22514 4.54422 4.5753 5.00008 5.79679C4.0302 6.81549 3.4926 8.17026 3.50008 9.57679C3.50008 14.9968 6.80007 16.1868 9.94007 16.5768C9.61107 16.9168 9.35734 17.3222 9.19538 17.7667C9.03343 18.2112 8.96688 18.6849 9.00008 19.1568V22.0268"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M20.6667 18.5H21.25C21.3881 18.5 21.5 18.6175 21.5 18.7625V21.7375C21.5 21.8825 21.3881 22 21.25 22H16.75C16.6119 22 16.5 21.8825 16.5 21.7375V18.7625C16.5 18.6175 16.6119 18.5 16.75 18.5H17.3333M20.6667 18.5V16.75C20.6667 16.1667 20.3333 15 19 15C17.6667 15 17.3333 16.1667 17.3333 16.75V18.5M20.6667 18.5H17.3333"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>

 </div>
      Code
    </button>
  ) : (
    content.linkCode && (
      <a
        target="_blank"
        href={content.linkCode}
        role="link"
        className={`text-base flex gap-3 group/live hover:gap-5 inline-flex max-w-fit items-center justify-center rounded-xl border px-3 py-2 transition-all duration-500
          ${
            isDarkTheme
              ? "dark:border-gray-600 dark:bg-neutral-900 dark:text-white dark:hover:border-gray-100 dark:hover:bg-gray-200 dark:hover:text-gray-800"
              : "border-gray-900 bg-gray-100 text-gray-800 hover:bg-black/25 hover:backdrop-blur-md shadow"
          }`}
      >
        <div className="text-2xl transition-transform">
          <FiGithub />
        </div>
        Code
      </a>
    )
  )}
</div>

    </div>
  );
};
