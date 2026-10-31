import React from 'react'
import Title from './Title';


const Teams = ({ title, description }) => {

    let TeamClass = 'flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white';

    let teammm = 'flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border order-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-2000';

    const teamData = [
        { name: 'Haley Carter', title: 'CEO & founder', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200' },

        { name: 'James Walker', title: 'Ads manager', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200' },

        { name: 'Sophia Mitchell', title: 'Creative director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200' },

        { name: 'Daniel Brooks', title: 'Marketing manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200' },

        { name: 'Emma Wilson', title: 'Product designer', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200' },

        { name: 'Michael Anderson', title: 'Software engineer', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200' },

        { name: 'Olivia Taylor', title: 'Content strategist', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200' },

        { name: 'Ethan Parker', title: 'Sales manager', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200' },
    ];

    return (
        <div className={TeamClass}>
            <Title title='Meet the team' description='A passionate team of digital experts dedicated to your brands success.' />

            <div className='grid grid:cols-2 md:grod-cols-3 xl:grid-cols-4 gap-5'>
                {
                    teamData.map((el, idx) => {
                        return <div key={idx} className={teammm}>

                            <img src={el.image} className='w-12 h-12 rounded-full' />

                            <div className='flex-1'>
                                <h3 className='font-bold text-sm'>{el.name}</h3>
                                <p className='text-xs opacity-60'>{el.title} </p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div >
    )
}

export default Teams