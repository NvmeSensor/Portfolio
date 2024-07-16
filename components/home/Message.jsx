"use client"
import React, { useState } from 'react';

const Message = () => {
    const [result, setResult] = useState('');
    const [error, setError] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        setError('');
        const formData = new FormData(event.target);

        formData.append('access_key', 'cd983054-7435-40e2-9c17-344402d4232c');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setResult('Form Submitted Successfully');
                event.target.reset();
            } else {
                setError(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
        <section className='flex flex-col justify-center items-center w-full px-5 mb-14'>
            <div className='flex flex-col justify-center items-center gap-3 lg:w-[75vw] w-full'>
                <div className='flex justify-center items-center gap-4 self-start'>
                    <h1 className='text-3xl font-semibold self-start text-slate-300 flex gap-2 items-center'>Drop a message</h1>
                </div>
                <form onSubmit={onSubmit} className='p-5 rounded-lg flex flex-col justify-center items-center gap-2 w-full card'>
                    <label htmlFor="name" className='text-[18px] text-slate-200 font-semibold self-start text-xl'>Name</label>
                    <input type="text" id='name' name="name" placeholder='Your Name' className='text-slate-200 font-medium px-3 py-2 rounded-lg w-full outline-none inputt' required />
                    <label htmlFor="email" className='text-[18px] text-slate-200 font-semibold self-start text-xl'>Email</label>
                    <input type="email" id='email' name="email" placeholder='Your Email' className='text-slate-200 font-medium px-3 py-2 rounded-lg w-full outline-none inputt' required />
                    <label htmlFor="message" className='text-[18px] text-slate-200 font-semibold self-start text-xl'>Message</label>
                    <textarea id='message' name="message" placeholder='Drop Your Message' className='text-slate-200 font-medium px-3 py-2 rounded-lg w-full outline-none inputt' required></textarea>
                    <button type="submit" className='px-3 py-2 font-semibold bg-slate-200 hover:bg-slate-300 text-[16px] transition ease-in-out rounded-lg mt-2 self-start'>Submit</button>
                </form>
                {error && <span className="text-[18px] text-slate-300 font-medium">{error}</span>}
                {result && <span className="text-[18px] text-slate-300 font-medium">{result}</span>}
            </div>
        </section>
    )
}

export default Message;