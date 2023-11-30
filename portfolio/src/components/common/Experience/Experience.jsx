import home from "../../../assets/home.png"

export const Experince = () => {
    return(
        <section className="w-full">
            
        <div className="font-bold text-2xl text-indigo-400 dark:text-gray-100 mb-6 flex items-center gap-3">
        <h2>Proyectos</h2>
        <div class="i-fa-pro:star-half text-3xl"></div>
        </div>
       
            <div className="grid gap-4 sm:gap-7 md:grid-cols-2 group">
                <div className="relative rounded-xl overflow-hidden flex bg-indigo-100 dark:bg-gray-700/50">
                <span style={{
  boxSizing: 'border-box',
  display: 'block',
  width: 'initial',
  height: 'initial',
  background: 'none',
  opacity: 1,
  border: 0,
  margin: 0,
  padding: 0,
  maxWidth: '100%'
}}>
  <span>
    <img
      style={{
        display: 'block',
        maxWidth: '100%',
        width: 'initial',
        height: 'initial',
        background: 'none',
        opacity: 1,
        border: 0,
        margin: 0,
        padding: 0
      }}
      alt=""
      aria-hidden="true"
      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27928%27%20height=%27599%27/%3e"
    />
  </span>
  <img src={home} alt="" />
</span>

       
      
                </div>

                <div className="flex flex-col gap-2.5 justify-center">
                    <h3 className="font-bold text-3xl text-slate-800 dark:text-white">
        Tu mejor amigo
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-lg">kjsgnvkjdfsgnfkjdsgnd</p>
                    <div className="flex gap-2 items-center mb-1">
                    <div className="relative group/tooltip">
                    <svg width="22" height="22" viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-6"><path d="M27.5 0C20.1667 0 15.5833 3.66667 13.75 11C16.5 7.33333 19.7083 5.95833 23.375 6.875C25.4673 7.3975 26.9615 8.91458 28.6183 10.5967C31.3156 13.3329 34.4346 16.5 41.25 16.5C48.5833 16.5 53.1667 12.8333 55 5.5C52.25 9.16667 49.0417 10.5417 45.375 9.625C43.2827 9.1025 41.7885 7.58542 40.1317 5.90333C37.4367 3.16708 34.3177 0 27.5 0ZM13.75 16.5C6.41667 16.5 1.83333 20.1667 0 27.5C2.75 23.8333 5.95833 22.4583 9.625 23.375C11.7173 23.8975 13.2115 25.4146 14.8683 27.0967C17.5656 29.8329 20.6846 33 27.5 33C34.8333 33 39.4167 29.3333 41.25 22C38.5 25.6667 35.2917 27.0417 31.625 26.125C29.5327 25.6025 28.0385 24.0854 26.3817 22.4033C23.6867 19.6671 20.5677 16.5 13.75 16.5V16.5Z" fill="#19B5B9"></path></svg>
                    <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                    </div>
                    <div className="relative group/tooltip">
                    <svg width="22" height="22" viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-6"><path d="M27.5 0C20.1667 0 15.5833 3.66667 13.75 11C16.5 7.33333 19.7083 5.95833 23.375 6.875C25.4673 7.3975 26.9615 8.91458 28.6183 10.5967C31.3156 13.3329 34.4346 16.5 41.25 16.5C48.5833 16.5 53.1667 12.8333 55 5.5C52.25 9.16667 49.0417 10.5417 45.375 9.625C43.2827 9.1025 41.7885 7.58542 40.1317 5.90333C37.4367 3.16708 34.3177 0 27.5 0ZM13.75 16.5C6.41667 16.5 1.83333 20.1667 0 27.5C2.75 23.8333 5.95833 22.4583 9.625 23.375C11.7173 23.8975 13.2115 25.4146 14.8683 27.0967C17.5656 29.8329 20.6846 33 27.5 33C34.8333 33 39.4167 29.3333 41.25 22C38.5 25.6667 35.2917 27.0417 31.625 26.125C29.5327 25.6025 28.0385 24.0854 26.3817 22.4033C23.6867 19.6671 20.5677 16.5 13.75 16.5V16.5Z" fill="#19B5B9"></path></svg>
                    <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                    </div>
                    <div className="relative group/tooltip">
                    <svg width="22" height="22" viewBox="0 0 55 33" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-7 h-6"><path d="M27.5 0C20.1667 0 15.5833 3.66667 13.75 11C16.5 7.33333 19.7083 5.95833 23.375 6.875C25.4673 7.3975 26.9615 8.91458 28.6183 10.5967C31.3156 13.3329 34.4346 16.5 41.25 16.5C48.5833 16.5 53.1667 12.8333 55 5.5C52.25 9.16667 49.0417 10.5417 45.375 9.625C43.2827 9.1025 41.7885 7.58542 40.1317 5.90333C37.4367 3.16708 34.3177 0 27.5 0ZM13.75 16.5C6.41667 16.5 1.83333 20.1667 0 27.5C2.75 23.8333 5.95833 22.4583 9.625 23.375C11.7173 23.8975 13.2115 25.4146 14.8683 27.0967C17.5656 29.8329 20.6846 33 27.5 33C34.8333 33 39.4167 29.3333 41.25 22C38.5 25.6667 35.2917 27.0417 31.625 26.125C29.5327 25.6025 28.0385 24.0854 26.3817 22.4033C23.6867 19.6671 20.5677 16.5 13.75 16.5V16.5Z" fill="#19B5B9"></path></svg>
                    <span class="absolute pointer-events-none transition-all opacity-0 z-20 bottom-full -translate-y-0 py-1 px-1.5 text-xs left-1/2 -translate-x-1/2 rounded-md whitespace-nowrap text-gray-200 bg-gray-800 dark:bg-white dark:text-gray-700 before:content-[''] before:absolute before:bg-gray-800 before:rounded-sm before:w-2.5 before:rotate-45 before:h-2.5 before:-bottom-1 before:-z-10 before:left-1/2 before:-translate-x-1/2 before:dark:bg-white before:dark:gray-800 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-3">Tailwind</span>
                    </div>
                </div>
                <div className="flex justify-start gap-3">
        <a href=""> Live</a>
        <div className="i-fa-pro:link-simple text-2xl group-hover/live:rotate-45 transition-transform">

        </div>
                </div>
                </div>
             
      
            </div>
        
        </section>
    )
}