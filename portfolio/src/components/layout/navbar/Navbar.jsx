



export const Navbar = () => {
    return(
        <header class="bg-white dark:bg-gray-800">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="flex h-16 items-center justify-between">
            <div class="md:flex md:items-center md:gap-12">
             
            </div>
      
            <div class="hidden md:block">
              <nav aria-label="Global  ">
            
                <ul class="flex items-center gap-6 text-sm">
                <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      About
                    </a>
                  </li>
      
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Careers
                    </a>
                  </li>
      
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      History
                    </a>
                  </li>
      
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Services
                    </a>
                  </li>
      
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Projects
                    </a>
                  </li>
      
                  <li>
                    <a
                      class="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                      href="/"
                    >
                      Blog
                    </a>
                  </li>
                </ul>

              </nav>
            </div>
      
            <div class="flex items-center gap-4">
              
      
              
            </div>
          </div>
        </div>
      </header>
    )
}