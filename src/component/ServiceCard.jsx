import React, { useState } from 'react';

function ServiceCard({ title, description, icon }) {

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();

        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        });
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            className="
                group relative overflow-hidden
                max-w-lg m-2 sm:m-4
                rounded-2xl
                border border-gray-200 dark:border-gray-700
                bg-white dark:bg-gray-900
                shadow-lg shadow-gray-200/50 dark:shadow-black/30
                transition-all duration-500
                hover:-translate-y-2
                hover:shadow-2xl
            "
        >

            {/* Mouse-following Glow */}
            <div
                className="
                    pointer-events-none
                    absolute z-0
                    w-[300px] h-[300px]
                    rounded-full
                    bg-gradient-to-r
                    from-blue-500 via-indigo-500 to-purple-500
                    blur-3xl
                    opacity-0
                    group-hover:opacity-30
                    transition-opacity duration-500
                "
                style={{
                    top: position.y - 150,
                    left: position.x - 150
                }}
            />

            {/* Card Content */}
            <div
                className="
                    relative z-10
                    flex items-center gap-6
                    p-7
                    rounded-2xl
                    bg-white/90 dark:bg-gray-900/90
                    backdrop-blur-sm
                    transition-all duration-300
                "
            >

                {/* Icon */}
                <div
                    className="
                        shrink-0
                        w-20 h-20
                        flex items-center justify-center
                        rounded-2xl
                        bg-gradient-to-br
                        from-blue-50 to-indigo-100
                        dark:from-gray-800 dark:to-gray-700
                        border border-blue-100 dark:border-gray-600
                        shadow-md
                        transition-all duration-500
                        group-hover:scale-110
                        group-hover:rotate-3
                    "
                >
                    <img
                        src={icon}
                        alt={title}
                        className="
                            w-12 h-12
                            object-contain
                            transition-transform duration-500
                            group-hover:scale-110
                        "
                    />
                </div>

                {/* Text */}
                <div className="flex-1">

                    <h3
                        className="
                            text-lg sm:text-xl
                            font-bold
                            text-gray-900 dark:text-white
                            transition-colors duration-300
                            group-hover:text-indigo-600
                            dark:group-hover:text-indigo-400
                        "
                    >
                        {title}
                    </h3>

                    <p
                        className="
                            text-sm
                            leading-6
                            mt-2
                            text-gray-600 dark:text-gray-400
                        "
                    >
                        {description}
                    </p>

                </div>

                {/* Arrow */}
                <div
                    className="
                        hidden sm:flex
                        shrink-0
                        w-9 h-9
                        items-center justify-center
                        rounded-full
                        border border-gray-200 dark:border-gray-700
                        text-gray-400
                        transition-all duration-300
                        group-hover:bg-indigo-600
                        group-hover:text-white
                        group-hover:border-indigo-600
                        group-hover:translate-x-1
                    "
                >
                    →
                </div>

            </div>

        </div>
    );
}

export default ServiceCard;

