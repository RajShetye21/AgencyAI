import React, { useState } from 'react'
import ThemeToggleBtn from './ThemeToggleBtn';

function Navbar({ theme, setTheme }) {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/70'>

            {/* Logo */}
            <div className=' flex justify-center items-center gap-2'>
                <img
                    src="https://marketplace.canva.com/1gYyA/MAFmDW1gYyA/1/tl/canva-ai%2C-artificial-outline%2C-artificial-intelligence-vector-icon-on-transparent-background.-outline-ai%2C-artificial-vector%2C-ai-icon-vector-MAFmDW1gYyA.png"
                    alt="AgencyAI Logo"
                    className='h-10'
                />

                <p className='dark:text-white'>AgencyAI</p>
            </div>


            {/* Navigation / Mobile Sidebar */}
            <div
                className={`
                    text-gray-700 dark:text-white sm:text-xl

                    ${!sidebarOpen
                        ? 'max-sm:w-0 max-sm:overflow-hidden'
                        : 'max-sm:w-[50%] max-sm:pl-8'
                    }

                    max-sm:fixed
                    top-0
                    bottom-0
                    right-0
                    max-sm:min-h-screen
                    max-sm:h-full
                    max-sm:flex-col
                    max-sm:bg-primary
                    max-sm:text-white
                    max-sm:pt-20

                    flex
                    sm:items-center
                    gap-5

                    transition-all
                    duration-300
                `}
            >

                {/* Close Button */}
                <img
                    onClick={() => setSidebarOpen(false)}
                    src={
                        theme === "dark"
                            ? "https://cdn-icons-png.flaticon.com/512/18/18157.png"
                            : "https://www.svgrepo.com/show/499592/close-x.svg"
                    }
                    alt="close_icon"
                    className='w-9 absolute right-4 top-4 sm:hidden invert cursor-pointer'
                />


                {/* Navigation Links */}
                <a
                    href="#"
                    onClick={() => setSidebarOpen(false)}
                    className='sm:hover:border-b'
                >
                    Home
                </a>

                <a
                    href="#services"
                    onClick={() => setSidebarOpen(false)}
                    className='sm:hover:border-b'
                >
                    Services
                </a>

                <a
                    href="#our-work"
                    onClick={() => setSidebarOpen(false)}
                    className='sm:hover:border-b'
                >
                    Our work
                </a>

                <a
                    href="#contact-us"
                    onClick={() => setSidebarOpen(false)}
                    className='sm:hover:border-b'
                >
                    Contact us
                </a>

            </div>


            {/* Right Side */}
            <div className='flex items-center gap-2 sm:gap-4'>

                <ThemeToggleBtn theme={theme} setTheme={setTheme} />

                {/* Mobile Menu Button */}
                <img
                    src={
                        theme === "dark"
                            ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGmsMX_MIq-noB0ayD4v-u8Vrc9d9R6uE968vn9rBz8J4NfF8aSZkHjwAO&s=10"
                            : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqMhFCQ_-zBGzl7GOU-gjbQLwO2TzwblexZ6s9kgjL6dRYZniVoeUM4EE&s=10"
                    }
                    alt="menu"
                    onClick={() => setSidebarOpen(true)}
                    className='w-8 sm:hidden cursor-pointer'
                />


                {/* Connect Button */}
                <a
                    href="#contact-us"
                    className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all'
                >
                    Connect
                </a>

            </div>

        </div>
    )
}

export default Navbar