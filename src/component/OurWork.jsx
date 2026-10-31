import React from 'react'
import Title from './Title'

const OurWork = () => {

    // Classes 
    let divTail = 'flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700  dark:text-white';

    const workData = [
        {
            title: "Mobile App Marketing",
            description: "We turn bold ideas into powerfull digital solutions that connect",
            image: "https://static.vecteezy.com/system/resources/previews/020/716/193/non_2x/mobile-marketing-with-smartphone-and-loudspeaker-illustration-of-online-marketing-using-mobile-phones-and-sound-speakers-png.png"
        },
        {
            title: "Dashboard Management",
            description: "We help you execute your plan and deliver your result",
            image: "https://png.pngtree.com/png-vector/20260707/ourlarge/pngtree-business-performance-dashboard-with-analytics-and-project-management-png-image_19721469.webp"
        },
        {
            title: "Fitness App Promotion",
            description: "We help you to create marketing strategy ",
            image: "https://cdn-icons-png.flaticon.com/512/17194/17194651.png"
        }
    ];

    return (
        <div id='our-work' className={divTail} >

            <Title title='Our latest work' description='From strategy to execution, we craft digital solutions that move your
      business forward.'/>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center w-full max-w-5xl'>
                {
                    workData.map((el, index) => (
                        <div key={index} className='hover:scale-102 duration-500 transition-all cursor-pointer'>
                            <img src={el.image} className='w-full h-60 rounded-xl' alt="" />
                            <h3 className='mb-3 mt-2 text-lg font-semibold'>{el.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{el.description}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OurWork;