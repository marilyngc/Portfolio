const ContentList = ({ title, contentList, isDarkTheme }) => {
  return (
    <section className="max-w-6xl mx-auto mb-6 pt-8 lg:pt-12 lg:scroll-mt-16">
      <header className="flex items-center mb-3 space-x-4">
       <h2 className={`${isDarkTheme ? "text-white" : "text-black"} font-semibold text-2xl`}>
  {title}
</h2>
      </header>
      <ul className="grid gap-4">
        {contentList.map((content, index) => (
          <li key={index}>
            <a href="Incoming...">
              <div
                className={`
                  duration-150 ease-in flex flex-col border rounded-md p-4 transition-[background] hover:bg-neutral-100/40  bg-transparent
                  ${isDarkTheme ? "border-neutral-800 hover:bg-neutral-800/40 " : "border-neutral-300 hover:bg-neutral-400/40"}
                `}
              >
                <div className="flex place-content-between">
                  <h2 className={`${isDarkTheme ? "text-white " : "text-black"} font-medium text-xl`}>
                    {content.subTitle}
                  </h2>

                  <div className="w-100 relative group order-2">
                    <img
                      src={content.icon}
                      alt=""
                      className="w-8 h-8 filter invert-[25%] brightness-125"
                    />
                    <div
                      className={`
                        duration-150 transition-all inline-block 2xl:left-[104%] 2xl:right-auto absolute border rounded-md px-2 py-1 right-[107%] shadow-sm text-sm w-max z-10
                        ${isDarkTheme ? "border-neutral-800 bg-[#1a1a1a] text-white" : "border-neutral-300 bg-neutral-200/30 text-black"}
                        group-hover:opacity-100 group-hover:visible invisible opacity-0 pointer-events-none
                      `}
                      role="tooltip"
                    >
                      {content.statusIcon}
                    </div>
                  </div>
                </div>

                <p className={`${isDarkTheme ? "text-cAccent" : "text-neutral-600"} my-2`}>
                  {content.description}
                </p>

                <div className="relative group w-fit ml-auto">
                  <img
                    src={content.iconTools}
                    alt="Icon Tools"
                    className="w-10 h-10 hover:scale-110 transition-transform duration-200"
                  />
                  <div
                    className={`
                      duration-150 transition-all inline-block 2xl:left-[104%] 2xl:right-auto absolute border rounded-md px-2 py-1 right-[107%] shadow-sm text-sm w-max z-10
                      ${isDarkTheme? "border-neutral-800 bg-[#1a1a1a] text-white" : "border-neutral-300 bg-neutral-200/30 text-black"}
                      group-hover:opacity-100 group-hover:visible invisible opacity-0 pointer-events-none
                    `}
                    role="tooltip"
                  >
                    {content.event}
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
      {/* <a
        href="/en/blog"
        className={`${isDarkTheme ? "text-cAccent" : "text-neutral-600"} font-medium block hover:underline mt-6 mx-auto w-fit`}
      >
        See all posts
      </a> */}
    </section>
  );
};


export default ContentList;
