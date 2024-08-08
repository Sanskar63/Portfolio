import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const form = useRef();
    // const [loading, setLoading] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_7125yxl', 'template_17gdva6', form.current, {
                publicKey: 'OThbAK_-5hwxTS1JI',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Mail sent successfully.")
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Couldn't send");
                },
            );
    };

    return (
        <div className='w-[100%]'>
            <form className='flex flex-col gap-2 md:gap-3 w-[80%] md:w-[40%] mx-auto' ref={form} onSubmit={sendEmail}>
                <label className='text-gray-800 dark:text-white font-mono text-sm md:text-xl'>Name</label>
                <input className='border border-gray-800 rounded-md text-gray-800 p-2' type="text" name="user_name" />
                <label className='text-gray-800 dark:text-white font-mono text-sm md:text-xl'>Email</label>
                <input className='border border-gray-800 rounded-md  text-gray-800 p-2' type="email" name="from_name" />
                <label className='text-gray-800 dark:text-white font-mono text-sm md:text-xl'>Message</label>
                <textarea className='border border-gray-800 rounded-md  text-gray-800 p-2' name="message" />
                <input className=' mx-auto w-20 md:w-24 px-4 py-2 md:px-6 md:py-2 mt-2 text-sm  md:text-xl rounded-lg active:scale-[95%] text-white dark:text-gray-800 bg-gray-800 dark:bg-white text-center cursor-pointer' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactUs;