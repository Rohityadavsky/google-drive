const Dashboard = () =>{
    return (
        <div className="flex min-h-screen font-medium dark:bg-center-bg-dark bg-content-bg text-zinc-950 font-geist dark:text-icons-color-dark">
            <div className="hidden w-48 h-screen md:inline-block lg:w-64">
                <div className="flex items-center h-16 gap-2 p-3 pl-6 md:w-64">
                    <img src="	https://gdisk.vercel.app/logo.png" alt="main-logo" className="h-9"/>
                    <h2 className="text-[24px] text-zinc-600 dark:text-icons-color-dark">Disk</h2>
                </div>
                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r0:" data-state="closed">
                    <span className="inline-block p-4 pt-2">
                        <span className="flex items-center gap-3 py-4 pl-4 pr-5 duration-300 bg-white shadow-md dark:bg-slate-800 rounded-2xl hover:bg-opacity-10 hover:bg-blue-300 dark:hover:bg-slate-900 dark:text-slate-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus">
                            <path d="M5 12h14"></path>
                            <path d="M12 5v14"></path>
                            </svg>
                            <span className="text-sm font-medium">New</span>
                        </span>
                    </span>
                </button>
                
                <div className="grid gap-4 p-2 ml-1 text-sm">
                    <div>
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 bg-blue-100 rounded-full dark:bg-blue-950">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-home w-6 h-6">
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                            </svg>
                            <p>Home</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                            <line x1="22" x2="2" y1="12"></line>
                            <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-61-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
                            <line x1="6" x2="6.01" y1="16" y2="16"></line>
                            <line x1="10" x2="10.01" y1="16" y2="16">
                            </line>
                            </svg>
                            <p>My Drive</p>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
                            </svg>
                            <p>Computers</p>
                            </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                            <path d="M22 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                            <p>Shared with me</p>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            <p>Recent</p>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            <p>Starred</p>
                            </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16,14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
                        <line x1="12" x2="12" y1="8" y2="12"></line>
                        <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                        <p>Spam</p>
                        </div>
                        
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                        <path d="M3 6h18"></path>
                        <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                        <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        <line x1="10" x2="10" y1="11" y2="17"></line>
                        <line x1="14" x2="14" y1="11" y2="17"></line>
                        </svg>
                        <p>Trash</p>
                        </div>
                        
                        <div className="flex items-center gap-2 px-4 py-2 duration-100 rounded-full cursor-pointer dark:hover:bg-slate-800 hover:bg-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-folder-open w-6 h-6">
                        <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"></path>
                        </svg>
                        <p>Storage</p>
                       </div>
                    </div>
                </div>

                 <div className="w-10/12 mx-auto mt-4">
                <div aria-valuemax="100" aria-valuemin="0" role="progressbar" data-state="indeterminate" data-max="100" className="relative h-2 w-full overflow-hidden rounded-full bg-gray-900/20 dark:bg-gray-50/20 mb-2">
                  <div data-state="indeterminate" data-max="100" className="flex-1 w-full h-full transition-all bg-blue-500 dark:bg-blue-200"></div> 
                </div> 

                 <div className="text-sm">
                    "0 Bytes"
                    " of 100MB"
                 </div> 
                </div>
            </div> 

            <div className="w-screen md:w-[calc(100vm-12rem)] lg:w-[calc(100vw-16rem)]">
                <nav className="flex items-center justify-between w-full gap-2 p-3 md:h-16">
                    <div className="mid:hidden">
                        <div className="hidden bg-search-bg dark:bg-search-bg-dark py-3 px-4 rounded-full text-icons-color-light w-[720px] min-w-12 items-center md:flex dark:text-icons-color-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                            </svg>
                            <input className="pl-4 bg-transparent outline-none w--96 placeholder-zinc-500 dark:placeholder-blue-50 dark:placeholder-opacity-60" value type="text" placeholder="Search in Disk"/>
                            <button type="button" id="radix-:r3" aria-haspopup="menu" aria-expanded="false" data-state="closed" className="ml-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10">
                            <line x1="21" x2="14" y1="4" y2="4"></line>
                            <line x1="10" x2="3" y1="4" y2="4"></line>
                            <line x1="21" x2="12" y1="12" y2="12"></line>
                            <line x1="8" x2="3" y1="12" y2="12"></line>
                            <line x1="21" x2="16" y1="20" y2="20"></line>
                            <line x1="12" x2="3" y1="20" y2="20"></line>
                            <line x1="14" x2="14" y1="2" y2="6"></line>
                            <line x1="8" x2="8" y1="10" y2="14"></line>
                            <line x1="16" x2="16" y1="18" y2="22"></line>
                            </svg>
                            </button>
                        </div>

                        <div className=" flex items-center gap-4 text-icons-color-light dark:text-icons-color-dark">
                            <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r5:" data-state="closed">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                                <path d="M12 17h.01"></path>
                                </svg>
                            </button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell p-1 duration-150 scale-150 rounded-full cursor-pointer hover:bg-black hover:bg-opacity-10" type="button" id="radix-:r8:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                            <span className="sr-only">Toggle theme</span>
                            </svg>
                            <div className="p-0.5 rounded-full border-2 border-red-300 cursor-pointer" type="button" id="radix-:ra:" aria-haspopup="menu" aria-expanded="false" data-state="closed">
                                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                                    <img className="aspect-square h-full w-full" src="https://lh3.googleusercontent.com/a/ACg8ocKkck7Agmb4wTy5Bl6nqfNWM0afyYid-czpFRHh7lsxC5lvlK8U=s96-c" />
                                </span>
                            </div>
                        </div>

                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Dashboard;