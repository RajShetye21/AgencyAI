import React from 'react'

function TrustedBy() {
    const companies = [
        {
            id: 1,
            name: "Google",
            logo: "https://pngimg.com/uploads/google/google_PNG102344.png"
        },
        {
            id: 2,
            name: "Microsoft",
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQimDzTYnpmjU3q3kPF9d6B1huHn6H7qwrl-lIrgojclQ&s=10"
        },
        {
            id: 3,
            name: "Apple",
            logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        },
        {
            id: 4,
            name: "Amazon",
            logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        },
        {
            id: 5,
            name: "Meta",
            logo: "https://cdn.pixabay.com/photo/2021/12/14/22/29/meta-6871457_1280.png"
        },
        {
            id: 6,
            name: "Netflix",
            logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
        }
    ]

    return (
        <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80'>
            <h3 className='font-semibold'>Trusted  by Leading Companies</h3>

            <div className='flex flex-wrap items-center justify-center gap-10 m-4'>
                {
                    companies.map((el, idx) => {
                        return <div>
                            <img key={idx} src={el.logo} alt=""
                                className={
                                    `h-20 w-20 dark:drop-shadow-xl ${el.name === "Apple" ? "dark:invert" : ""}
                                    ${el.name === "Amazon" ? "dark:invert" : ""}
                           `} />
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default TrustedBy