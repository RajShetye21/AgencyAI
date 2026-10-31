import React from 'react'
import Title from '../Title'
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


let imgContact = "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original";

let emailIcon = "https://png.pngtree.com/png-clipart/20191120/original/pngtree-email-icon-png-image_5065641.jpg";

let btnclass = "w-max flex gap-2 bg-primary text-white text-md px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all";

let textA = "w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600";


function Contact() {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", accessKey);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                toast.success("Thank you for your submission")
                event.target.reset();
            } else {
                toast.error(data.message)
            }
        } catch (err) {
            toast.error(err.message);
        }

    };



    return (
        <div id="contact-us" className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white'>

            <Title title="Reach out to us" description="From Strategy to execution, we craft digital solutions that move your bussiness forward" />

            <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>

                <div>
                    <p className='mb-2 text-sm font-medium'>Your Name</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 '>
                        <img className='w-8 dark:invert' src={imgContact} alt="" />
                        <input type="text" placeholder='Enter your name' name="name" className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div>
                    <p className='mb-2 text-sm font-medium'>Email id</p>
                    <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600 '>
                        <img className='w-10' src={emailIcon} alt="" />
                        <input type="email" placeholder='Enter your Email' name='email' className='w-full p-3 text-sm outline-none' required />
                    </div>
                </div>

                <div className='sm:col-span-2'>
                    <p className='mb-2 text-sm font-medium'>Message</p>
                    <textarea name="message" rows={8} placeholder='Enter your message' className={textA} />
                </div>

                <button type="submit" className={btnclass}>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default Contact