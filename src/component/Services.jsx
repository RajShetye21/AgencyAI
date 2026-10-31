import React from 'react'
import Title from './Title';
import ServiceCard from './ServiceCard';

function Services() {
    const servicesData = [
        {
            title: 'AL Engineering',
            description: 'We turn bold ideas into developing powerful AI models.',
            icon: "https://www.chitkara.edu.in/blogs/wp-content/uploads/2023/04/Engineering-AI.jpg"
        },
        {
            title: 'Web Development',
            description: 'We create fast, responsive, and scalable websites designed to deliver seamless digital experiences.',
            icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8gYiTPUc0WPdSs8Bt42MTK2Pb-NWlFKuQJB4vr5BAVBbCvkR-1V9f47RY&s=10"
        },
        {
            title: 'UI/UX Design',
            description: 'We design intuitive and engaging interfaces that make every interaction simple, enjoyable, and effective.',
            icon: "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_400,h_453/https://arenajayanagar.com/wp-content/uploads/2026/03/advanced-ui-ux-design.png"
        },
        {
            title: 'Mobile App Development',
            description: 'We develop modern mobile applications that combine beautiful design with powerful functionality.',
            icon: "https://png.pngtree.com/png-clipart/20200401/original/pngtree-modern-flat-design-concept-of-mobile-app-development-with-characters-building-png-image_5331513.jpg"
        },
    ];


    return (
        <div id="services" className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 darks:text-white'>


            {/* Title  */}
            <Title title="How can we help ?" description="From Strategy top execution, we craft digital solutions that move your bussiness forward." />

            <div className='flex flex-col md:grid grid-cols-2'>
                {
                    servicesData.map((el, idx) => {
                        return <>
                            <ServiceCard key={idx} icon={el.icon} title={el.title} description={el.description} />
                        </>
                    })
                }
            </div>

        </div>
    )
}

export default Services