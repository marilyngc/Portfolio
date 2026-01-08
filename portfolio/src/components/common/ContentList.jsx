import { useState } from "react";
import TooltipPortal from "./TooltipPortal";

const ContentList = ({ title, contentList, isDarkTheme }) => {
  const ITEMS_TO_SHOW = 2;
  const [showAll, setShowAll] = useState(false);

  const [tooltip, setTooltip] = useState({
    node: null, // JSX
    x: null,
    y: null,
  });

  return (
    <section className="max-w-6xl mx-auto mb-6 pt-8 lg:pt-12 lg:scroll-mt-16">
      <header className="flex items-center mb-3 space-x-4">
        <h2
          className={`${
            isDarkTheme ? "text-white" : "text-black"
          } font-semibold text-2xl`}
        >
          {title}
        </h2>
      </header>
      <ul className="grid gap-4">
        {contentList.map((content, index) => {
          return (
            <li
              key={index}
              className={`
    transition-all duration-300 ease-in-out
    overflow-hidden
    ${
      !showAll && index >= ITEMS_TO_SHOW
        ? "opacity-0 translate-y-4 max-h-0"
        : "opacity-100 translate-y-0 max-h-[500px]"
    }
  `}
              style={{
                transitionDelay:
                  showAll && index >= ITEMS_TO_SHOW
                    ? `${(index - ITEMS_TO_SHOW) * 60}ms`
                    : !showAll && index >= ITEMS_TO_SHOW
                    ? `${(contentList.length - index - 1) * 40}ms`
                    : "0ms",
              }}
            >
              <a href="Incoming...">
                <div
                  className={`
              duration-150 ease-in flex flex-col border rounded-md p-4 transition-[background] hover:bg-neutral-100/40 bg-transparent
              ${
                isDarkTheme
                  ? "border-neutral-800 hover:bg-neutral-800/40"
                  : "border-neutral-300 hover:bg-neutral-400/40"
              }
            `}
                >
                  <div className="flex place-content-between">
                    <h2
                      className={`${
                        isDarkTheme ? "text-white" : "text-black"
                      } font-medium text-xl`}
                    >
                      {content.subTitle}
                    </h2>

                    <div
                      className="w-100 relative group order-2 "
                      onMouseEnter={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setTooltip({
                          node: (
                            <div className="flex items-center gap-2">
                              {content.statusIcon}
                            </div>
                          ),
                          x: rect.left - -50,
                          y: rect.top + rect.height / 1,
                        });
                      }}
                      onMouseLeave={() =>
                        setTooltip({ content: null, x: null, y: null })
                      }
                    >
                      <img
                        src={content.icon}
                        alt=""
                        className="w-8 h-8 filter invert-[25%] brightness-125"
                      />
                    </div>
                  </div>

                  <p
                    className={`${
                      isDarkTheme ? "text-cAccent" : "text-neutral-600"
                    } my-2`}
                  >
                    {content.description}
                  </p>

                  <div
                    className="relative group w-fit ml-auto"
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      setTooltip({
                        node: (
                          <div className="flex items-center gap-2">
                            {content.event}
                          </div>
                        ),
                        x: rect.left - -50,
                        y: rect.top + rect.height / 1,
                      });
                    }}
                    onMouseLeave={() =>
                      setTooltip({ content: null, x: null, y: null })
                    }
                  >
                    <img
                      src={content.iconTools}
                      alt="Icon Tools"
                      className="w-10 h-10 hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>

      {/* BOTÓN VER MÁS / MENOS */}
      {contentList.length > ITEMS_TO_SHOW && (
        <button
          onClick={() => setShowAll(!showAll)}
          className={`${
            isDarkTheme ? "text-cAccent" : "text-neutral-600"
          } font-medium block hover:underline mt-6 mx-auto w-fit`}
        >
          {showAll ? "Ver menos" : "Ver más"}
        </button>
      )}

      <TooltipPortal x={tooltip.x} y={tooltip.y}>
        <div
          className={`
      -translate-y-1/2
      border rounded-md px-2 py-1 shadow-sm text-sm w-max
      ${
        isDarkTheme
          ? "border-neutral-800 bg-[#1a1a1a] text-white"
          : "border-neutral-300 bg-neutral-200/30 text-black"
      }
    `}
        >
          {tooltip.node}
        </div>
      </TooltipPortal>
    </section>
  );
};

export default ContentList;
