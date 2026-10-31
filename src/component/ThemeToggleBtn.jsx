import React, { useEffect } from 'react'

function ThemeToggleBtn({ theme, setTheme }) {

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <>
            <button>
                {theme === "dark" ? (
                    <img onClick={() => setTheme("light")} className='w-9 h-9 rounded-full hover:scale-95' src="https://img.magnific.com/premium-photo/sun-icon-png-white-blue-neon-shape-transparent-background_53876-969714.jpg" alt="" />
                ) : (
                    <img onClick={() => setTheme("dark")} className='w-10 h-10 hover:scale-90' src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-sun-icon-png-image_5157664.jpg" alt="" />
                )}
            </button>
        </>
    )
}

export default ThemeToggleBtn;