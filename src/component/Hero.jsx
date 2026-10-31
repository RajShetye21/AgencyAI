import React from 'react'

function Hero() {
    return (
        <div id='hero' className='flex flex-col items-center gap-6 py-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white'>

            <div className='inline-flex items-center gap-2 border border-gray-300 p-1.5 pr-4 rounded-full'>
                <img className='w-9 rounded-full' src="https://img.magnific.com/free-vector/user-group-with-shadow_78370-7019.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
                <p className='text-sm font-medium'>Trusted by 10k people</p>
            </div>

            <h1 className='text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl dark:text-white'>
                Turning imagination into <span className='bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent'>digital</span> impact.
            </h1>

            <p className='text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3'>
                Creating meaningful connections and turning big ideas into interactive digital experiences.
            </p>

            <div className='relative'>
                <img src="https://images.ctfassets.net/pdf29us7flmy/WDC9iS14cKJgRN6gBTte3/dcccde8474f2cc87a4c1870c2ce35aa1/iStock_000053700494_Double_optimized__2_.jpg?w=720&q=100&fm=jpg" alt="clients image" className='w-full max-w-6xl rounded-3xl' />
            </div>
        </div>
    )
}

export default Hero